import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodolistComponent } from "./todolist/todolist.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { TodolistNewItemComponent } from './todolist-new-item/todolist-new-item.component';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { TodolistListItemComponent } from './todolist-list-item/todolist-list-item.component';

@NgModule({
  declarations: [TodolistComponent, TodolistNewItemComponent, TodolistListComponent, TodolistListItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule
  ]
})
export class TodolistModule {}
