import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from "@angular/core";
import { AuthService, AuthStatus } from "../auth/auth.service";
import { Observable, Subscription } from "rxjs";
import { map, filter, take } from "rxjs/operators";
import { TodolistService } from "./todolist/todolist.service";

@Component({
  selector: "app-authenticated-header",
  templateUrl: "./authenticated-header.component.html",
  styleUrls: ["./authenticated-header.component.css"]
})
export class AuthenticatedHeaderComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  @Input() expandedMenu: boolean;
  @Output() toggleMenu = new EventEmitter<void>();

  username$: Observable<string>;
  numTodos$: Observable<number>;

  constructor(
    readonly authService: AuthService,
    readonly todolistService: TodolistService
  ) {}

  ngOnInit() {
    this.username$ = this.authService.state$.pipe(map(s => s.username));
    this.numTodos$ = this.todolistService.state$.pipe(map(s => s.todos.length));

    this.subscription.add(
      this.authService.state$
        .pipe(
          filter(s => s.status === AuthStatus.Authenticated),
          map(s => s.token),
          take(1)
        )
        .subscribe(token => this.todolistService.addRequester(token, this))
    );
  }

  ngOnDestroy() {
    this.todolistService.removeRequester(this);
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
