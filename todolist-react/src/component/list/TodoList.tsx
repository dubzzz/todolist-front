import React, { useState } from 'react';
import { useTodoList } from '../../context/TodoListContext';
import TextField from '@material-ui/core/TextField';
import TodoItem from './TodoItem';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

type Props = {};

export default function TodoList(props: Props) {
  const { ready, todos, addTodo, toggleTodo, removeTodo } = useTodoList();
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <div>
        <TextField
          label="Add a new todo"
          value={newTodo}
          onChange={p => setNewTodo(p.currentTarget.value)}
          onKeyPress={ev => {
            if (ev.which === 13) {
              addTodo(newTodo);
              setNewTodo('');
              ev.preventDefault();
            }
          }}
        />
        <Button
          onClick={() => {
            addTodo(newTodo);
            setNewTodo('');
          }}
        >
          Add
        </Button>
      </div>
      {ready ? (
        <div>
          {todos.map(t => (
            <TodoItem
              key={t.data.guid}
              todo={t}
              toggle={() => toggleTodo(t.data.guid)}
              remove={() => removeTodo(t.data.guid)}
            />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
