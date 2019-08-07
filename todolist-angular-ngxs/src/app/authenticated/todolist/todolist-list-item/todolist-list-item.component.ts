import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoSyncState } from 'src/state/todolist/todolist.model';
import * as Api from '../../../../api';

@Component({
  selector: 'app-todolist-list-item',
  templateUrl: './todolist-list-item.component.html',
  styleUrls: ['./todolist-list-item.component.css']
})
export class TodolistListItemComponent {
  @Input()
  state: TodoSyncState;

  @Input()
  content: Api.Todo;

  @Output()
  toggleTodo = new EventEmitter<void>();

  @Output()
  removeTodo = new EventEmitter<void>();
}
