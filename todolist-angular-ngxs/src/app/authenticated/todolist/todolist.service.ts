import { Injectable, OnInit, OnDestroy } from '@angular/core';
import * as Api from '../../../api';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, Select } from '@ngxs/store';
import { AuthenticationState } from 'src/state/authentication/authentication.state';
import { TryLogout } from 'src/state/authentication/authentication.actions';
import {
  RefreshTodos,
  UpdateRefreshStatus
} from 'src/state/todolist/todolist.actions';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  @Select(AuthenticationState.token)
  token$: Observable<string>;

  private token = '';

  private todoListenerHandle: Api.TodoListenerHandle | null;
  private requesters = new Set<OnInit & OnDestroy>();

  constructor(readonly store: Store, readonly snackBar: MatSnackBar) {
    this.token$.subscribe(token => {
      this.token = token;
      if (this.requesters.size !== 0) {
        this.unregisterTodoListener();
        this.registerTodoListener();
      }
    });
  }

  private registerTodoListener() {
    this.store.dispatch(new UpdateRefreshStatus(true));
    this.todoListenerHandle = Api.addTodoListener(
      this.token,
      todos => {
        this.store.dispatch(new RefreshTodos(todos));
      },
      () => {
        this.snackBar.open('Revoked token, connection lost', '', {
          duration: 1000
        });
        this.store.dispatch(new TryLogout(true));
      }
    );
  }

  private unregisterTodoListener() {
    Api.removeTodoListener(this.todoListenerHandle);
    this.store.dispatch(new UpdateRefreshStatus(false));
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
