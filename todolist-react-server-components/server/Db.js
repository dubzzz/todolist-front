// @ts-check
const crypto = require('crypto');
const path = require('path');
const { existsSync, writeFileSync } = require('fs');
const { readFile, writeFile } = require('fs').promises;

const dbPath = path.join(__dirname, '..', 'db', 'todos.json');

// Creating DB if not DB exists yet
if (!existsSync(dbPath)) {
  writeFileSync(dbPath, '[]');
}

/** @type {Promise<unknown>} */
let lock = Promise.resolve();

/**
 * @template T
 * @param {() => Promise<T>} fn
 * @returns {Promise<T>}
 */
async function exclusive(fn) {
  const action = lock.then(fn);
  lock = action.catch(() => {});
  return action;
}

/**
 * A todo element.
 * @typedef {{id: string, done: boolean, task: string}} TodoElement
 */

/**
 * Get back all the Todos
 * @returns {Promise<TodoElement[]>}
 */
async function readTodos() {
  const todosResponse = await readFile(dbPath);
  return JSON.parse(todosResponse.toString());
}
module.exports.readTodos = readTodos;

/**
 * Get back the Todos and the associated checksum
 * @returns {Promise<{todos:TodoElement[],checksum:string}>}
 */
async function readRichTodos() {
  const todos = await readTodos();
  const shasum = crypto.createHash('sha1');
  shasum.update(JSON.stringify(todos));
  return { todos, checksum: shasum.digest('hex') };
}
module.exports.readRichTodos = readRichTodos;

/**
 * Add a new Todo in the set of existing Todos.
 * @param {string} taskLabel The task assigned to our new Todo
 * @returns {Promise<TodoElement>} The newly created element
 */
async function addTodo(taskLabel) {
  return exclusive(async () => {
    const todos = await readTodos();
    const newTodo = {
      id: Math.random()
        .toString(16)
        .substring(2),
      done: false,
      task: taskLabel
    };
    todos.push(newTodo);
    await writeFile(dbPath, JSON.stringify(todos));
    return newTodo;
  });
}
module.exports.addTodo = addTodo;

/**
 * Toggle an existing Todo.
 * @param {string} id The id to toggle
 * @returns {Promise<TodoElement>} The updated element
 */
async function toggleTodo(id) {
  return exclusive(async () => {
    const todos = await readTodos();
    let toggledOne = undefined;
    for (const todo of todos) {
      if (todo.id === id) {
        todo.done = !todo.done;
        toggledOne = todo;
        break;
      }
    }
    if (toggledOne === undefined) {
      throw new Error(`Unable to find TodoElement with id=${id}`);
    }
    await writeFile(dbPath, JSON.stringify(todos));
    return toggledOne;
  });
}
module.exports.toggleTodo = toggleTodo;
