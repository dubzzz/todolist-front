import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router
} from '@angular/router';
import { map } from 'rxjs/operators';
import { Select } from '@ngxs/store';
import { AuthenticationState } from 'src/state/authentication/authentication.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  @Select(AuthenticationState.isAuthenticated)
  isAuthenticated$: Observable<boolean>;

  constructor(readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAuthenticated$.pipe(
      map(isAuth => {
        if (!isAuth) {
          this.router.navigate(['/login'], {
            queryParams: {
              redirect: state.url
            }
          });
          return false;
        }
        return true;
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
