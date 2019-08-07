import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodolistService } from '../todolist/todolist.service';
import { AuthenticationState } from 'src/state/authentication/authentication.state';
import { Select, Store } from '@ngxs/store';
import { TryLogout } from 'src/state/authentication/authentication.actions';

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

  numTodos$: Observable<number>;

  constructor(
    readonly store: Store,
    readonly todolistService: TodolistService
  ) {}

  ngOnInit() {
    this.numTodos$ = this.todolistService.state$.pipe(map(s => s.todos.length));
    this.todolistService.addRequester(this);
  }

  ngOnDestroy() {
    this.todolistService.removeRequester(this);
  }

  logout() {
    this.store.dispatch(TryLogout);
  }
}
