import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as Api from '../../api';
import { NotificationLevel } from '../reducers/notification';
import { notifyAction } from '../actions/notification';
import {
  TODOLIST_TRY_ADD_TODO,
  TODOLIST_TRY_REMOVE_TODO,
  TODOLIST_TRY_TOGGLE_TODO,
  ActionTryAddTodo,
  addOrEditTodoAction,
  removeTodoAction,
  ActionTryRemoveTodo
} from '../actions/todolist';
import { TodoState, TodoType } from '../reducers/todolist';
import { ReduxState } from '../reducers';

function* tryAddTodo(action: ActionTryAddTodo) {
  const { token, guid, task } = action.payload;

  const todo = { guid, task, done: false };
  yield put(addOrEditTodoAction(todo, TodoState.Add));
  try {
    const r: boolean = yield call(() => Api.addTodo(token, todo));
    if (!r) {
      yield put(notifyAction(`Failed to add todo: ${todo.task}`, NotificationLevel.Error));
      yield put(removeTodoAction(todo.guid));
    } else {
      // We apply the modification
      yield put(addOrEditTodoAction(todo, TodoState.Noop));
    }
  } catch (err) {}
}

function* tryToggleTodo(action: ActionTryRemoveTodo) {
  const { token, guid } = action.payload;

  const todos: TodoType[] = yield select((state: ReduxState) => state.todolist.todos);
  const prevTodo = todos.find(t => t.data.guid === guid && t.state === TodoState.Noop);
  if (!prevTodo) {
    yield put(notifyAction(`No todo available for modification given guid ${guid}`, NotificationLevel.Error));
    return;
  }
  const todo = { ...prevTodo.data, done: !prevTodo.data.done };
  yield put(addOrEditTodoAction(todo, TodoState.Edit));

  try {
    const r: boolean = yield call(() => Api.editTodo(token, prevTodo.data));
    if (!r) {
      yield put(notifyAction(`Failed to edit todo: ${prevTodo.data.task}`, NotificationLevel.Error));
      yield put(addOrEditTodoAction(prevTodo.data, prevTodo.state));
    } else {
      // We apply the modification
      yield put(addOrEditTodoAction(todo, TodoState.Noop));
    }
  } catch (err) {}
}

function* tryRemoveTodo(action: ActionTryRemoveTodo) {
  const { token, guid } = action.payload;

  const todos: TodoType[] = yield select((state: ReduxState) => state.todolist.todos);
  const prevTodo = todos.find(t => t.data.guid === guid && t.state === TodoState.Noop);
  if (!prevTodo) {
    yield put(notifyAction(`No todo available for modification given guid ${guid}`, NotificationLevel.Error));
    return;
  }
  yield put(addOrEditTodoAction(prevTodo.data, TodoState.Remove));

  try {
    const r: boolean = yield call(() => Api.removeTodo(token, prevTodo.data));
    if (!r) {
      yield put(notifyAction(`Failed to remove todo: ${prevTodo.data.task}`, NotificationLevel.Error));
      yield put(addOrEditTodoAction(prevTodo.data, prevTodo.state));
    } else {
      // We apply the modification
      yield put(removeTodoAction(prevTodo.data.guid));
    }
  } catch (err) {}
}

export default function* rootTodolistSaga(): SagaIterator {
  yield takeEvery(TODOLIST_TRY_ADD_TODO, tryAddTodo);
  yield takeEvery(TODOLIST_TRY_TOGGLE_TODO, tryToggleTodo);
  yield takeEvery(TODOLIST_TRY_REMOVE_TODO, tryRemoveTodo);
}
