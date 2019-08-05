import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./auth/auth-guard.service";
import { LoginComponent } from "./login/login.component";
import { AuthenticatedComponent } from "./authenticated/authenticated.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    component: AuthenticatedComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
