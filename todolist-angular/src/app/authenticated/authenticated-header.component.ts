import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TodolistService } from "./todolist/todolist.service";

@Component({
  selector: "app-authenticated-header",
  templateUrl: "./authenticated-header.component.html",
  styleUrls: ["./authenticated-header.component.css"]
})
export class AuthenticatedHeaderComponent implements OnInit, OnDestroy {
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
    this.todolistService.addRequester(this);
  }

  ngOnDestroy() {
    this.todolistService.removeRequester(this);
  }

  logout() {
    this.authService.logout();
  }
}
