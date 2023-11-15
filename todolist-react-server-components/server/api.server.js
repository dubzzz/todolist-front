// @ts-check
'use strict';

const register = require('react-server-dom-webpack/node-register');
register();
const babelRegister = require('@babel/register');

babelRegister({
  ignore: [/[\\\/](build|server|node_modules)[\\\/]/],
  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: ['@babel/transform-modules-commonjs']
});

const express = require('express');
const compress = require('compression');
const { readFileSync } = require('fs');
const { renderToPipeableStream } = require('react-server-dom-webpack/server');
const path = require('path');
const React = require('react');
const ReactApp = require('../src/App').default;
const { addTodo, toggleTodo } = require('./Db');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(compress());
app.use(express.json());

app
  .listen(PORT, () => {
    console.log(`React Notes listening at ${PORT}...`);
  })
  .on('error', function(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const isPipe = portOrPipe => Number.isNaN(portOrPipe);
    const bind = isPipe(PORT) ? 'Pipe ' + PORT : 'Port ' + PORT;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  });

// Handling React bootstrap of the Client
// (returns the index.html)

app.get(
  '/',
  handleErrors(async function(_req, res) {
    await waitForWebpack();
    const html = readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8');
    // Note: this is sending an empty HTML shell, like a client-side-only app.
    // However, the intended solution (which isn't built out yet) is to read
    // from the Server endpoint and turn its response into an HTML stream.
    res.send(html);
  })
);

// Handling initial state or reloads

app.get('/react', function(req, res) {
  sendResponse(req, res, {});
});

// Handling API calls

app.post(
  '/todos/new',
  handleErrors(async (req, res) => {
    await addTodo(req.body.value);
    sendResponse(req, res, {});
  })
);

app.post(
  '/todos/toggle',
  handleErrors(async (req, res) => {
    await toggleTodo(req.body.id);
    sendResponse(req, res, {});
  })
);

// Handling static assets

app.use(express.static('build'));
app.use(express.static('public'));

// Various helpers

function handleErrors(fn) {
  return async function(req, res, next) {
    try {
      return await fn(req, res);
    } catch (x) {
      next(x);
    }
  };
}

async function renderReactTree(res, props) {
  await waitForWebpack();
  const manifest = readFileSync(path.resolve(__dirname, '../build/react-client-manifest.json'), 'utf8');
  const moduleMap = JSON.parse(manifest);
  const { pipe } = renderToPipeableStream(React.createElement(ReactApp, props), moduleMap);
  pipe(res);
}

function sendResponse(req, res, locationOverrides) {
  const location = JSON.parse(req.query.location);
  const newLocation = { ...location, ...locationOverrides };
  res.set('X-Location', JSON.stringify(newLocation));
  renderReactTree(res, newLocation);
}

async function waitForWebpack() {
  while (true) {
    try {
      readFileSync(path.resolve(__dirname, '../build/index.html'));
      return;
    } catch (err) {
      console.log('Could not find webpack build output. Will retry in a second...');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}
