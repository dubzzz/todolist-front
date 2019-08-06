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
  ready: boolean;
  todos: { data: Api.Todo; state: TodoSyncState }[];
};

@Injectable({
  providedIn: "root"
})
export class TodolistService {
  private todos: TodolistState["todos"];
  private subject: Subject<TodolistState>;
  readonly state$: Observable<TodolistState>;

  private todoListenerHandle: Api.TodoListenerHandle | null;
  private requesters = new Set<OnInit & OnDestroy>();

  constructor(readonly authService: AuthService) {
    this.todos = [];
    this.subject = new BehaviorSubject({ ready: false, todos: this.todos });
    this.state$ = this.subject.asObservable();
  }

  private updateTodos(todos: TodolistState["todos"]) {
    this.todos = todos;
    this.subject.next({ ready: true, todos });
  }

  addRequester(token: string, requester: OnInit & OnDestroy) {
    if (this.requesters.size === 0) {
      this.todoListenerHandle = Api.addTodoListener(
        token,
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
    this.requesters.add(requester);
  }

  removeRequester(requester: OnInit & OnDestroy) {
    if (!this.requesters.has(requester)) {
      return;
    }
    this.requesters.delete(requester);
    if (this.requesters.size === 0) {
      Api.removeTodoListener(this.todoListenerHandle);
      this.subject.next({ ready: false, todos: this.todos });
    }
  }
}
