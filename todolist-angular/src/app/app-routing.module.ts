import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./auth/auth-guard.service";
import { LoginComponent } from "./login/login/login.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    loadChildren: () =>
      import("./authenticated/authenticated.module").then(
        mod => mod.AuthenticatedModule
      ),
    canActivate: [AuthGuardService],
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
