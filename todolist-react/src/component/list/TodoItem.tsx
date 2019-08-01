import React from 'react';
import { TodoType, TodoState } from '../../context/TodoListContext';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = { todo: TodoType; toggle: () => void; remove: () => void };

export default function TodoItem(props: Props) {
  const disabled = props.todo.state !== TodoState.Noop;

  return (
    <div>
      <Checkbox
        disabled={disabled}
        checked={props.todo.data.done}
        onChange={() => props.toggle()}
        inputProps={{
          'aria-label': 'primary checkbox'
        }}
      />
      <span
        style={{
          textDecoration: props.todo.state === TodoState.Remove ? 'line-through' : 'none',
          color: disabled ? 'grey' : 'black'
        }}
      >
        {props.todo.data.task}
      </span>
      <IconButton aria-label="delete" disabled={disabled} onClick={() => props.remove()}>
        <DeleteIcon />
      </IconButton>
      {props.todo.state !== TodoState.Noop ? <CircularProgress size={12} /> : <></>}
    </div>
  );
}
