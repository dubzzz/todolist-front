import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthStatus, AuthService } from "src/app/auth/auth.service";
import { TodolistService, TodolistState } from "./todolist.service";
import { filter, map, take } from "rxjs/operators";
import { Subscription, Observable } from "rxjs";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  token$: Observable<string>;
  todoState$: Observable<TodolistState>;
  taskName = "";

  constructor(
    readonly authService: AuthService,
    readonly todolistService: TodolistService
  ) {}

  ngOnInit() {
    this.token$ = this.authService.state$.pipe(map(s => s.token));
    this.todoState$ = this.todolistService.state$;

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

  addTodo(token: string) {
    this.todolistService.addTodo(token, this.taskName);
    this.taskName = "";
  }
}
