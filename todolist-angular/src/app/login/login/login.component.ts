import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AuthService, AuthStatus } from '../../auth/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  redirect?: string;

  authStatus$: Observable<AuthStatus>;
  username = '';
  password = '';
  hide = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authStatus$ = this.authService.state$.pipe(map(s => s.status));
    this.subscription.add(
      this.route.queryParams.subscribe(
        params => (this.redirect = params.redirect)
      )
    );
    this.subscription.add(
      this.authService.state$.subscribe(s => {
        if (s.status !== AuthStatus.Authenticated) {
          return;
        }
        this.router.navigate([this.redirect || '/']);
      })
    );
  }

  canLogin(authStatus: AuthStatus) {
    return (
      authStatus === AuthStatus.NonAuthenticated &&
      this.username.length > 0 &&
      this.password.length > 0
    );
  }

  onGoingLogin(authStatus: AuthStatus) {
    return authStatus === AuthStatus.OnGoingAuthentication;
  }

  login(authStatus: AuthStatus) {
    if (!this.canLogin(authStatus)) {
      return;
    }
    this.authService.login(this.username, this.password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
