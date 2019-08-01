import React from 'react';
import { TodoType, TodoState } from '../../../context/TodoListContext';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  paper: { padding: theme.spacing(2), margin: 'auto' }
}));

type Props = { todo: TodoType; toggle: () => void; remove: () => void };

export default function TodoItem(props: Props) {
  const classes = useStyles();
  const disabled = props.todo.state !== TodoState.Noop;

  return (
    <Paper className={classes.paper}>
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
      <CircularProgress
        style={{ margin: '1em', visibility: props.todo.state === TodoState.Noop ? 'hidden' : 'visible' }}
        size={12}
      />
      <IconButton style={{ float: 'right' }} aria-label="delete" disabled={disabled} onClick={() => props.remove()}>
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}
