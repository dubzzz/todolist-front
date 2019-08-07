import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthenticatedComponent } from "./authenticated/authenticated.component";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AuthenticatedHeaderComponent } from "./authenticated-header/authenticated-header.component";
import { AuthenticatedMenuComponent } from "./authenticated-menu/authenticated-menu.component";
import { LearnMoreModule } from "./learn-more/learn-more.module";
import { NotFoundModule } from "./not-found/not-found.module";
import { TodolistModule } from "./todolist/todolist.module";
import { AuthenticatedRoutingModule } from "./authenticated-routing.module";
@NgModule({
  declarations: [
    AuthenticatedComponent,
    AuthenticatedHeaderComponent,
    AuthenticatedMenuComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    LearnMoreModule,
    NotFoundModule,
    TodolistModule
  ]
})
export class AuthenticatedModule {}
