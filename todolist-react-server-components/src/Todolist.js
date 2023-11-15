// @ts-check
import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import AddTodo from './AddTodo';
import React from 'react';
import TodoItem from './TodoItem';

const dbPath = path.join(__dirname, '..', 'db', 'todos.json');

export default async function Todolist() {
  const todosResponse = await readFile(dbPath);
  const todos = JSON.parse(todosResponse.toString());

  return (
    <div>
      <h1>Welcome to Todolist</h1>
      <h2>Add new todos</h2>
      <AddTodo />
      <h2>Existing todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
