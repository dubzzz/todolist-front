import { Injectable } from "@angular/core";
import { TodolistStateModel, TodoSyncState } from "./todolist.model";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  RefreshTodos,
  TryAddTodo,
  TryToggleTodo,
  TryRemoveTodo,
  UpdateRefreshStatus
} from "./todolist.actions";
import * as Api from "../../api";

@Injectable()
@State<TodolistStateModel>({
  name: "todolistState",
  defaults: { ready: false, todos: [] }
})
export class TodolistState {
  @Selector()
  static numTodos(state: TodolistStateModel) {
    return state.todos.length;
  }

  constructor(readonly snackBar: MatSnackBar) {}

  @Action(RefreshTodos)
  refreshTodos(
    { getState, patchState }: StateContext<TodolistStateModel>,
    { todos }: RefreshTodos
  ) {
    const state = getState();
    const todosBeingAdded: {
      [guid: string]: Api.Todo;
    } = state.todos
      .filter(t => t.state === TodoSyncState.Add)
      .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});
    const todosBeingEdited: {
      [guid: string]: Api.Todo;
    } = state.todos
      .filter(t => t.state === TodoSyncState.Edit)
      .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});
    const todosBeingRemoved: {
      [guid: string]: Api.Todo;
    } = state.todos
      .filter(t => t.state === TodoSyncState.Remove)
      .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});

    const updatedTodos = todos
      .filter(t => todosBeingAdded[t.guid] === undefined)
      .map(t => {
        // Remove, Edit and Noop
        if (todosBeingEdited[t.guid]) {
          return {
            state: TodoSyncState.Edit,
            data: todosBeingEdited[t.guid]
          };
        }
        if (todosBeingRemoved[t.guid]) {
          return {
            state: TodoSyncState.Remove,
            data: todosBeingRemoved[t.guid]
          };
        }
        return { state: TodoSyncState.Noop, data: t };
      })
      .concat(state.todos.filter(t => t.state === TodoSyncState.Add)); // Add

    patchState({ todos: updatedTodos });
  }

  @Action(UpdateRefreshStatus)
  updateRefreshStatus(
    { getState, patchState }: StateContext<TodolistStateModel>,
    { status }: UpdateRefreshStatus
  ) {
    patchState({ ready: status });
  }

  @Action(TryAddTodo)
  async tryAddTodo(
    { getState, patchState }: StateContext<TodolistStateModel>,
    { token, task }: TryAddTodo
  ) {
    const todo: Api.Todo = {
      guid: Math.random()
        .toString(16)
        .substr(2),
      task,
      done: false
    };
    patchState({
      todos: [...getState().todos, { state: TodoSyncState.Add, data: todo }]
    });
    const r = await Api.addTodo(token, todo);
    if (r) {
      patchState({
        todos: getState().todos.map(t =>
          t.data.guid === todo.guid
            ? { state: TodoSyncState.Noop, data: todo }
            : t
        )
      });
    } else {
      patchState({
        todos: getState().todos.filter(t => t.data.guid !== todo.guid)
      });
      this.snackBar.open(`Failed to add todo: ${todo.task}`, "", {
        duration: 1000
      });
    }
  }

  @Action(TryToggleTodo)
  async tryToggleTodo(
    { getState, patchState }: StateContext<TodolistStateModel>,
    { token, guid }: TryToggleTodo
  ) {
    const todo = getState().todos.find(
      t => t.data.guid === guid && t.state === TodoSyncState.Noop
    );
    if (!todo) {
      this.snackBar.open(
        `No todo available for modification given guid ${guid}`,
        "",
        {
          duration: 1000
        }
      );
      return;
    }

    const newData = { ...todo.data, done: !todo.data.done };
    patchState({
      todos: [
        ...getState().todos.map(t =>
          t.data.guid === guid
            ? {
                state: TodoSyncState.Edit,
                data: newData
              }
            : t
        )
      ]
    });
    const r = await Api.editTodo(token, newData);
    if (r) {
      patchState({
        todos: getState().todos.map(t =>
          t.data.guid === guid
            ? {
                state: TodoSyncState.Noop,
                data: newData
              }
            : t
        )
      });
    } else {
      patchState({
        todos: getState().todos.map(t =>
          t.data.guid === guid
            ? { state: TodoSyncState.Noop, data: todo.data }
            : t
        )
      });
      this.snackBar.open(`Failed to edit todo: ${todo.data.task}`, "", {
        duration: 1000
      });
    }
  }

  @Action(TryRemoveTodo)
  async tryRemoveTodo(
    { getState, patchState }: StateContext<TodolistStateModel>,
    { token, guid }: TryRemoveTodo
  ) {
    const todo = getState().todos.find(
      t => t.data.guid === guid && t.state === TodoSyncState.Noop
    );
    if (!todo) {
      this.snackBar.open(
        `No todo available for modification given guid ${guid}`,
        "",
        {
          duration: 1000
        }
      );
      return;
    }
    patchState({
      todos: [
        ...getState().todos.map(t =>
          t.data.guid === guid
            ? {
                state: TodoSyncState.Remove,
                data: todo.data
              }
            : t
        )
      ]
    });
    const r = await Api.removeTodo(token, todo.data);
    if (r) {
      patchState({ todos: getState().todos.filter(t => t.data.guid !== guid) });
    } else {
      patchState({
        todos: getState().todos.map(t =>
          t.data.guid === guid
            ? { state: TodoSyncState.Noop, data: todo.data }
            : t
        )
      });
      this.snackBar.open(`Failed to remove todo: ${todo.data.task}`, "", {
        duration: 1000
      });
    }
  }
}
