import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodolistComponent } from "./todolist.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [TodolistComponent],
  imports: [CommonModule, MatButtonModule, MatInputModule]
})
export class TodolistModule {}
