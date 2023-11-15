// @ts-check
import AddTodo from './AddTodo';
import React from 'react';
import TodoItem from './TodoItem';
import { readRichTodos } from '../server/Db';
import TodoListener from './TodoListener';

export default async function Todolist() {
  const { todos, checksum } = await readRichTodos();

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
      <TodoListener checksum={checksum} />
    </div>
  );
}
