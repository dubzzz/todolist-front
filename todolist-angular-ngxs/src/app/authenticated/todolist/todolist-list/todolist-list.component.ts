import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodolistStateModel } from 'src/state/todolist/todolist.model';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.css']
})
export class TodolistListComponent {
  @Input()
  todos: TodolistStateModel['todos'];

  @Output()
  toggleTodo = new EventEmitter<string>();

  @Output()
  removeTodo = new EventEmitter<string>();
}
