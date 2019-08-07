import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodolistState } from '../todolist.service';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.css']
})
export class TodolistListComponent {
  @Input()
  todos: TodolistState['todos'];

  @Output()
  toggleTodo = new EventEmitter<string>();

  @Output()
  removeTodo = new EventEmitter<string>();
}
