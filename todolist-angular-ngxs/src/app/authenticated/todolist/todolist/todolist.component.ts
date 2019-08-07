import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodolistService } from '../todolist.service';
import { Observable } from 'rxjs';
import { TodolistState } from 'src/state/todolist/todolist.state';
import { Select, Store } from '@ngxs/store';
import {
  TryAddTodo,
  TryRemoveTodo,
  TryToggleTodo
} from 'src/state/todolist/todolist.actions';
import { AuthenticationState } from 'src/state/authentication/authentication.state';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit, OnDestroy {
  @Select(AuthenticationState.token)
  token$: Observable<string>;

  @Select(TodolistState)
  todoState$: Observable<TodolistState>;

  constructor(
    readonly store: Store,
    readonly todolistService: TodolistService
  ) {}

  ngOnInit() {
    this.todolistService.addRequester(this);
  }

  ngOnDestroy() {
    this.todolistService.removeRequester(this);
  }

  addTodo(taskName: string) {
    this.store.dispatch(
      new TryAddTodo(
        this.store.selectSnapshot(AuthenticationState.token),
        taskName
      )
    );
  }

  toggleTodo(guid: string) {
    this.store.dispatch(
      new TryToggleTodo(
        this.store.selectSnapshot(AuthenticationState.token),
        guid
      )
    );
  }

  removeTodo(guid: string) {
    this.store.dispatch(
      new TryRemoveTodo(
        this.store.selectSnapshot(AuthenticationState.token),
        guid
      )
    );
  }
}
