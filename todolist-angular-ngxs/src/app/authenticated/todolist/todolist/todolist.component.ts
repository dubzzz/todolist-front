import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodolistService, TodolistState } from '../todolist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit, OnDestroy {
  todoState$: Observable<TodolistState>;

  constructor(readonly todolistService: TodolistService) {}

  ngOnInit() {
    this.todoState$ = this.todolistService.state$;
    this.todolistService.addRequester(this);
  }

  ngOnDestroy() {
    this.todolistService.removeRequester(this);
  }

  addTodo(taskName: string) {
    this.todolistService.addTodo(taskName);
  }

  toggleTodo(guid: string) {
    this.todolistService.toggleTodo(guid);
  }

  removeTodo(guid: string) {
    this.todolistService.removeTodo(guid);
  }
}
