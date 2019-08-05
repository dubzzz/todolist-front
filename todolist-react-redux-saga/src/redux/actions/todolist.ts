import * as Api from '../../api';
import { TodoState } from '../reducers/todolist';

// types
export const TODOLIST_TRY_ADD_TODO = 'TODOLIST_TRY_ADD_TODO';
export const TODOLIST_TRY_TOGGLE_TODO = 'TODOLIST_TRY_TOGGLE_TODO';
export const TODOLIST_TRY_REMOVE_TODO = 'TODOLIST_TRY_REMOVE_TODO';
export const TODOLIST_ADD_OR_EDIT_TODO = 'TODOLIST_ADD_OR_EDIT_TODO';
export const TODOLIST_REMOVE_TODO = 'TODOLIST_REMOVE_TODO';
export const TODOLIST_REFRESH_TODOS = 'TODOLIST_REFRESH_TODOS';

// actions
export const tryAddTodoAction = (token: string, task: string) =>
  ({
    type: TODOLIST_TRY_ADD_TODO,
    payload: {
      token,
      guid: Math.random()
        .toString(16)
        .substr(2),
      task
    }
  } as const);
export const tryToggleTodoAction = (token: string, guid: string) =>
  ({
    type: TODOLIST_TRY_TOGGLE_TODO,
    payload: { token, guid }
  } as const);
export const tryRemoveTodoAction = (token: string, guid: string) =>
  ({
    type: TODOLIST_TRY_REMOVE_TODO,
    payload: { token, guid }
  } as const);
export const addOrEditTodoAction = (todo: Api.Todo, state: TodoState) =>
  ({
    type: TODOLIST_ADD_OR_EDIT_TODO,
    payload: { todo, state }
  } as const);
export const removeTodoAction = (guid: string) =>
  ({
    type: TODOLIST_REMOVE_TODO,
    payload: { guid }
  } as const);
export const refreshTodosAction = (todos: Api.Todo[]) =>
  ({
    type: TODOLIST_REFRESH_TODOS,
    payload: { todos }
  } as const);

export type ActionTryAddTodo = ReturnType<typeof tryAddTodoAction>;
export type ActionTryToggleTodo = ReturnType<typeof tryToggleTodoAction>;
export type ActionTryRemoveTodo = ReturnType<typeof tryRemoveTodoAction>;
export type ActionAddOrEditTodo = ReturnType<typeof addOrEditTodoAction>;
export type ActionRemoveTodo = ReturnType<typeof removeTodoAction>;
export type ActionRefreshTodos = ReturnType<typeof refreshTodosAction>;
export type Actions =
  | ActionTryAddTodo
  | ActionTryToggleTodo
  | ActionTryRemoveTodo
  | ActionAddOrEditTodo
  | ActionRemoveTodo
  | ActionRefreshTodos;
