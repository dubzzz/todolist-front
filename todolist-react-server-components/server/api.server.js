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
const { existsSync, readFileSync, writeFileSync } = require('fs');
const { readFile, writeFile } = require('fs').promises;
const { renderToPipeableStream } = require('react-server-dom-webpack/server');
const path = require('path');
const React = require('react');
const ReactApp = require('../src/App').default;

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

function handleErrors(fn) {
  return async function(req, res, next) {
    try {
      return await fn(req, res);
    } catch (x) {
      next(x);
    }
  };
}

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

async function renderReactTree(res, props) {
  await waitForWebpack();
  const manifest = readFileSync(path.resolve(__dirname, '../build/react-client-manifest.json'), 'utf8');
  const moduleMap = JSON.parse(manifest);
  const { pipe } = renderToPipeableStream(React.createElement(ReactApp, props), moduleMap);
  pipe(res);
}

function sendResponse(req, res, redirectToId) {
  const location = JSON.parse(req.query.location);
  if (redirectToId) {
    location.selectedId = redirectToId;
  }
  res.set('X-Location', JSON.stringify(location));
  renderReactTree(res, {
    selectedId: location.selectedId,
    isEditing: location.isEditing,
    searchText: location.searchText
  });
}

app.get('/react', function(req, res) {
  sendResponse(req, res, null);
});

const dbPath = path.join(__dirname, '..', 'db', 'todos.json');

if (!existsSync(dbPath)) {
  writeFileSync(dbPath, '[]');
}

app.get('/todos', async (req, res) => {
  const todosResponse = await readFile(dbPath);
  res.send(todosResponse.toString());
});

app.post(
  '/todos/new',
  handleErrors(async (req, res) => {
    // Not race-condition free, just experiementing React Server Components
    // not aiming production-grade application
    const todosResponse = await readFile(dbPath);
    const todos = JSON.parse(todosResponse.toString());
    todos.push({
      id: Math.random()
        .toString(16)
        .substring(2),
      done: false,
      task: req.body.value
    });
    await writeFile(dbPath, JSON.stringify(todos));
    renderReactTree(res, {});
  })
);

app.post(
  '/todos/toggle',
  handleErrors(async (req, res) => {
    // Not race-condition free, just experiementing React Server Components
    // not aiming production-grade application
    const todosResponse = await readFile(dbPath);
    const todos = JSON.parse(todosResponse.toString());
    todos.map(todo => (todo.id === req.body.id ? { ...todo, done: !todo.done } : todo));
    await writeFile(dbPath, JSON.stringify(todos));
    renderReactTree(res, {});
  })
);

app.use(express.static('build'));
app.use(express.static('public'));

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
