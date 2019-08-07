import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Api from '../../api';
import { Router, RouterStateSnapshot } from '@angular/router';

export enum AuthStatus {
  NonAuthenticated = 'NonAuthenticated',
  OnGoingAuthentication = 'OnGoingAuthentication',
  Authenticated = 'Authenticated'
}

export interface AuthState {
  token: string;
  username: string;
  status: AuthStatus;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject: Subject<AuthState>;
  readonly state$: Observable<AuthState>;
  readonly isAuthenticated$: Observable<boolean>;

  constructor(readonly router: Router) {
    const username = Api.readStorage('AuthenticationProvider', 'username');
    const token = Api.readStorage('AuthenticationProvider', 'token');

    this.subject = new BehaviorSubject({
      token,
      username,
      status: AuthStatus.NonAuthenticated
    });
    this.state$ = this.subject.asObservable();
    this.isAuthenticated$ = this.subject.pipe(
      map(s => s.status === AuthStatus.Authenticated)
    );

    if (token.length > 0) {
      this.subject.next({
        token,
        username,
        status: AuthStatus.OnGoingAuthentication
      });
      Api.checkToken(token).then(valid => {
        if (valid) {
          this.subject.next({
            token,
            username,
            status: AuthStatus.Authenticated
          });
        } else {
          this.subject.next({
            token,
            username,
            status: AuthStatus.NonAuthenticated
          });
        }
      });
    }
  }

  async login(username: string, password: string) {
    this.subject.next({
      token: '',
      username,
      status: AuthStatus.OnGoingAuthentication
    });
    try {
      const tokens = await Api.login(username, password);
      this.subject.next({
        token: tokens.token,
        username: tokens.username,
        status: AuthStatus.Authenticated
      });
      Api.writeStorage('AuthenticationProvider', 'username', tokens.username);
      Api.writeStorage('AuthenticationProvider', 'token', tokens.token);
    } catch (err) {
      this.subject.next({
        token: '',
        username,
        status: AuthStatus.NonAuthenticated
      });
    }
  }

  logout() {
    this.subject.next({
      token: '',
      username: '',
      status: AuthStatus.NonAuthenticated
    });
    Api.clearStorage('AuthenticationProvider', 'username');
    Api.clearStorage('AuthenticationProvider', 'token');
    this.redirectToLogin(this.router.routerState.snapshot);
  }

  redirectToLogin(state: RouterStateSnapshot) {
    this.router.navigate(['/login'], {
      queryParams: {
        redirect: state.url
      }
    });
  }
}
