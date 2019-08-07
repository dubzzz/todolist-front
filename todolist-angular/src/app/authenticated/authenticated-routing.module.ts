import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../auth/auth-guard.service";
import { AuthenticatedComponent } from "./authenticated/authenticated.component";
import { TodolistComponent } from "./todolist/todolist/todolist.component";
import { LearnMoreComponent } from "./learn-more/learn-more/learn-more.component";
import { NotFoundComponent } from "./not-found/not-found/not-found.component";

const authenticatedRoutes: Routes = [
  {
    path: "",
    component: AuthenticatedComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "",
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: "",
            component: TodolistComponent
          },
          {
            path: "learn-more",
            component: LearnMoreComponent
          },
          {
            path: "**",
            component: NotFoundComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authenticatedRoutes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule {}
