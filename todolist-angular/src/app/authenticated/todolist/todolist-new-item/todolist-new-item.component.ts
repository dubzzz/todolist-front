import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-todolist-new-item",
  templateUrl: "./todolist-new-item.component.html",
  styleUrls: ["./todolist-new-item.component.css"]
})
export class TodolistNewItemComponent {
  @Input()
  ready: boolean;

  @Output()
  addTodo = new EventEmitter<string>();

  taskName = "";

  add() {
    this.addTodo.emit(this.taskName);
    this.taskName = "";
  }
}
