import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { AuthService } from "./auth.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(readonly auth: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.isAuthenticated$.pipe(
      map(isAuth => {
        if (!isAuth) {
          this.auth.redirectToLogin(state);
          return false;
        }
        return true;
      })
    );
  }
}
