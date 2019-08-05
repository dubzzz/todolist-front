import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import TodoItem from './TodoItem';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../../../redux/reducers';
import { tryAddTodoAction, tryToggleTodoAction, tryRemoveTodoAction } from '../../../redux/actions/todolist';

type Props = {};

export default function TodoList(props: Props) {
  const token = useSelector((state: ReduxState) => state.authentication.token);
  const ready = useSelector((state: ReduxState) => state.todolist.ready);
  const todos = useSelector((state: ReduxState) => state.todolist.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '1em' }}>
        <TextField
          label="Add a new todo"
          value={newTodo}
          onChange={p => setNewTodo(p.currentTarget.value)}
          onKeyPress={ev => {
            if (ev.which === 13 && newTodo !== '') {
              dispatch(tryAddTodoAction(token, newTodo));
              setNewTodo('');
              ev.preventDefault();
            }
          }}
          style={{ flexGrow: 1 }}
        />
        <Button
          disabled={newTodo === ''}
          onClick={() => {
            dispatch(tryAddTodoAction(token, newTodo));
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
              toggle={() => dispatch(tryToggleTodoAction(token, t.data.guid))}
              remove={() => dispatch(tryRemoveTodoAction(token, t.data.guid))}
            />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
