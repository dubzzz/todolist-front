import { Injectable, Component, OnInit, OnDestroy } from "@angular/core";
import * as Api from "../../../api";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

export enum TodoSyncState {
  Noop = "noop",
  Add = "add",
  Edit = "edit",
  Remove = "remove"
}

export type TodolistState = {
  readonly ready: boolean;
  readonly todos: ReadonlyArray<{
    readonly data: Api.Todo;
    readonly state: TodoSyncState;
  }>;
};

@Injectable({
  providedIn: "root"
})
export class TodolistService {
  private token = "";
  private todos: TodolistState["todos"];
  private subject: Subject<TodolistState>;
  readonly state$: Observable<TodolistState>;

  private todoListenerHandle: Api.TodoListenerHandle | null;
  private requesters = new Set<OnInit & OnDestroy>();

  constructor(readonly authService: AuthService) {
    this.todos = [];
    this.subject = new BehaviorSubject({ ready: false, todos: this.todos });
    this.state$ = this.subject.asObservable();
    this.authService.state$.subscribe(s => {
      this.token = s.token;
      if (this.requesters.size !== 0) {
        this.unregisterTodoListener();
        this.registerTodoListener();
      }
    });
  }

  private updateTodos(todos: TodolistState["todos"]) {
    this.todos = todos;
    this.subject.next({ ready: true, todos });
  }

  async addTodo(task: string) {
    const todo: Api.Todo = {
      guid: Math.random()
        .toString(16)
        .substr(2),
      task,
      done: false
    };
    this.updateTodos([...this.todos, { state: TodoSyncState.Add, data: todo }]);
    const r = await Api.addTodo(this.token, todo);
    if (r) {
      this.updateTodos(
        this.todos.map(t =>
          t.data.guid === todo.guid
            ? { state: TodoSyncState.Noop, data: todo }
            : t
        )
      );
    } else {
      this.updateTodos(this.todos.filter(t => t.data.guid !== todo.guid));
    }
  }

  async toggleTodo(guid: string) {
    const todo = this.todos.find(
      t => t.data.guid === guid && t.state === TodoSyncState.Noop
    );
    if (!todo) {
      return;
    }

    const newData = { ...todo.data, done: !todo.data.done };
    this.updateTodos([
      ...this.todos.map(t =>
        t.data.guid === guid
          ? {
              state: TodoSyncState.Edit,
              data: newData
            }
          : t
      )
    ]);
    const r = await Api.editTodo(this.token, newData);
    if (r) {
      this.updateTodos(
        this.todos.map(t =>
          t.data.guid === guid
            ? {
                state: TodoSyncState.Noop,
                data: newData
              }
            : t
        )
      );
    } else {
      this.updateTodos(
        this.todos.map(t =>
          t.data.guid === guid
            ? { state: TodoSyncState.Noop, data: todo.data }
            : t
        )
      );
    }
  }

  async removeTodo(guid: string) {
    const todo = this.todos.find(
      t => t.data.guid === guid && t.state === TodoSyncState.Noop
    );
    if (!todo) {
      return;
    }
    this.updateTodos([
      ...this.todos.map(t =>
        t.data.guid === guid
          ? {
              state: TodoSyncState.Remove,
              data: todo.data
            }
          : t
      )
    ]);
    const r = await Api.removeTodo(this.token, todo.data);
    if (r) {
      this.updateTodos(this.todos.filter(t => t.data.guid !== guid));
    } else {
      this.updateTodos(
        this.todos.map(t =>
          t.data.guid === guid
            ? { state: TodoSyncState.Noop, data: todo.data }
            : t
        )
      );
    }
  }

  private registerTodoListener() {
    this.todoListenerHandle = Api.addTodoListener(
      this.token,
      todos => {
        const todosBeingAdded: {
          [guid: string]: Api.Todo;
        } = this.todos
          .filter(t => t.state === TodoSyncState.Add)
          .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});
        const todosBeingEdited: {
          [guid: string]: Api.Todo;
        } = this.todos
          .filter(t => t.state === TodoSyncState.Edit)
          .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});
        const todosBeingRemoved: {
          [guid: string]: Api.Todo;
        } = this.todos
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
          .concat(this.todos.filter(t => t.state === TodoSyncState.Add)); // Add

        this.updateTodos(updatedTodos);
      },
      () => {
        this.authService.logout();
      }
    );
  }

  private unregisterTodoListener() {
    Api.removeTodoListener(this.todoListenerHandle);
    this.subject.next({ ready: false, todos: this.todos });
  }

  addRequester(requester: OnInit & OnDestroy) {
    if (this.requesters.size === 0) {
      this.registerTodoListener();
    }
    this.requesters.add(requester);
  }

  removeRequester(requester: OnInit & OnDestroy) {
    if (!this.requesters.has(requester)) {
      return;
    }
    this.requesters.delete(requester);
    if (this.requesters.size === 0) {
      this.unregisterTodoListener();
    }
  }
}
