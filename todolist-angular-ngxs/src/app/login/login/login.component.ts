import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AuthenticationStatus } from 'src/state/authentication/authentication.model';
import { AuthenticationState } from 'src/state/authentication/authentication.state';
import { Select, Store } from '@ngxs/store';
import { TryLoginByCreds } from 'src/state/authentication/authentication.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  @Select(AuthenticationState.status)
  authStatus$: Observable<AuthenticationStatus>;

  subscription: Subscription = new Subscription();
  redirect?: string;

  username = '';
  password = '';
  hide = true;

  constructor(
    readonly store: Store,
    readonly router: Router,
    readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.route.queryParams.subscribe(
        params => (this.redirect = params.redirect)
      )
    );
    this.subscription.add(
      this.authStatus$.subscribe(s => {
        if (s !== AuthenticationStatus.Authenticated) {
          return;
        }
        this.router.navigate([this.redirect || '/']);
      })
    );
  }

  canLogin(authStatus: AuthenticationStatus) {
    return (
      authStatus === AuthenticationStatus.NonAuthenticated &&
      this.username.length > 0 &&
      this.password.length > 0
    );
  }

  onGoingLogin(authStatus: AuthenticationStatus) {
    return authStatus === AuthenticationStatus.OnGoingAuthentication;
  }

  login(authStatus: AuthenticationStatus) {
    if (!this.canLogin(authStatus)) {
      return;
    }
    this.store.dispatch(new TryLoginByCreds(this.username, this.password));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
