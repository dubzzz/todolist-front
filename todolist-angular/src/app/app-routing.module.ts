import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./auth/auth-guard.service";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    loadChildren: () =>
      import("./authenticated/authenticated.module").then(
        mod => mod.AuthenticatedModule
      ),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
