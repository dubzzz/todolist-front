import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs';
import { TodolistService } from '../todolist/todolist.service';
import { AuthenticationState } from 'src/state/authentication/authentication.state';
import { Select, Store } from '@ngxs/store';
import { TryLogout } from 'src/state/authentication/authentication.actions';
import { TodolistState } from 'src/state/todolist/todolist.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-authenticated-header',
  templateUrl: './authenticated-header.component.html',
  styleUrls: ['./authenticated-header.component.css']
})
export class AuthenticatedHeaderComponent implements OnInit, OnDestroy {
  @Input() expandedMenu: boolean;
  @Output() toggleMenu = new EventEmitter<void>();

  @Select(AuthenticationState.username)
  username$: Observable<string>;

  @Select(TodolistState.numTodos)
  numTodos$: Observable<number>;
  numTodosString$: Observable<string>;

  constructor(
    readonly store: Store,
    readonly todolistService: TodolistService
  ) {
    this.numTodosString$ = this.numTodos$.pipe(map(n => String(n)));
  }

  ngOnInit() {
    this.todolistService.addRequester(this);
  }

  ngOnDestroy() {
    this.todolistService.removeRequester(this);
  }

  logout() {
    this.store.dispatch(TryLogout);
  }
}
