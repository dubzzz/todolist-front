import * as Api from '../../api';
import { Dispatch } from 'redux';
import { TodoState, TodoType } from '../reducers/todolist';
import { notifyAction } from './notification';
import { NotificationLevel } from '../reducers/notification';
import { ReduxState } from '../reducers';

// types

export const TODOLIST_ADD_OR_EDIT_TODO = 'TODOLIST_ADD_OR_EDIT_TODO';
export const TODOLIST_REMOVE_TODO = 'TODOLIST_REMOVE_TODO';
export const TODOLIST_REFRESH_TODOS = 'TODOLIST_REFRESH_TODOS';

// actions

const addOrEditTodoAction = (todo: Api.Todo, state: TodoState) =>
  ({
    type: TODOLIST_ADD_OR_EDIT_TODO,
    payload: { todo, state }
  } as const);

const removeTodoAction = (guid: string) =>
  ({
    type: TODOLIST_REMOVE_TODO,
    payload: { guid }
  } as const);

export const refreshTodosAction = (todos: Api.Todo[]) =>
  ({
    type: TODOLIST_REFRESH_TODOS,
    payload: { todos }
  } as const);

export type ActionAddOrEditTodo = ReturnType<typeof addOrEditTodoAction>;
export type ActionRemoveTodo = ReturnType<typeof removeTodoAction>;
export type ActionRefreshTodos = ReturnType<typeof refreshTodosAction>;
export type Actions = ActionAddOrEditTodo | ActionRemoveTodo | ActionRefreshTodos;

// thunks

export const tryAddTodoAction = (token: string, task: string) => {
  return async (dispatch: Dispatch) => {
    const guid = Math.random()
      .toString(16)
      .substr(2);

    const todo = { guid, task, done: false };
    dispatch(addOrEditTodoAction(todo, TodoState.Add));
    try {
      const r = await Api.addTodo(token, todo);
      if (!r) {
        dispatch(notifyAction(`Failed to add todo: ${todo.task}`, NotificationLevel.Error));
        dispatch(removeTodoAction(todo.guid));
      } else {
        // We apply the modification
        dispatch(addOrEditTodoAction(todo, TodoState.Noop));
      }
    } catch (err) {}
  };
};

export const tryToggleTodoAction = (token: string, guid: string) => {
  return async (dispatch: Dispatch, getState: () => ReduxState) => {
    const todos: TodoType[] = getState().todolist.todos;
    const prevTodo = todos.find(t => t.data.guid === guid && t.state === TodoState.Noop);
    if (!prevTodo) {
      dispatch(notifyAction(`No todo available for modification given guid ${guid}`, NotificationLevel.Error));
      return;
    }
    const todo = { ...prevTodo.data, done: !prevTodo.data.done };
    dispatch(addOrEditTodoAction(todo, TodoState.Edit));

    try {
      const r = await Api.editTodo(token, prevTodo.data);
      if (!r) {
        dispatch(notifyAction(`Failed to edit todo: ${prevTodo.data.task}`, NotificationLevel.Error));
        dispatch(addOrEditTodoAction(prevTodo.data, prevTodo.state));
      } else {
        // We apply the modification
        dispatch(addOrEditTodoAction(todo, TodoState.Noop));
      }
    } catch (err) {}
  };
};

export const tryRemoveTodoAction = (token: string, guid: string) => {
  return async (dispatch: Dispatch, getState: () => ReduxState) => {
    const todos: TodoType[] = getState().todolist.todos;
    const prevTodo = todos.find(t => t.data.guid === guid && t.state === TodoState.Noop);
    if (!prevTodo) {
      dispatch(notifyAction(`No todo available for modification given guid ${guid}`, NotificationLevel.Error));
      return;
    }
    dispatch(addOrEditTodoAction(prevTodo.data, TodoState.Remove));

    try {
      const r = await Api.removeTodo(token, prevTodo.data);
      if (!r) {
        dispatch(notifyAction(`Failed to remove todo: ${prevTodo.data.task}`, NotificationLevel.Error));
        dispatch(addOrEditTodoAction(prevTodo.data, prevTodo.state));
      } else {
        // We apply the modification
        dispatch(removeTodoAction(prevTodo.data.guid));
      }
    } catch (err) {}
  };
};
