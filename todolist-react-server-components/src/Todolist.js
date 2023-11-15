// @ts-check
import AddTodo from './AddTodo';
import React from 'react';
import TodoItem from './TodoItem';
import { readTodos } from '../server/Db';

export default async function Todolist() {
  const todos = await readTodos();

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
