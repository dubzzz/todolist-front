import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import {
  AuthenticationStateModel,
  AuthenticationStatus
} from "./authentication.model";
import * as Api from "../../api";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  TryLoginByCreds,
  TryLoginByToken,
  TryLogout
} from "./authentication.actions";

@Injectable()
@State<AuthenticationStateModel>({
  name: "authenticationState",
  defaults: {
    username: Api.readStorage("AuthenticationProvider", "username"),
    token: Api.readStorage("AuthenticationProvider", "token"),
    status: AuthenticationStatus.NonAuthenticated
  }
})
export class AuthenticationState {
  @Selector()
  static isAuthenticated(state: AuthenticationStateModel) {
    return state.status === AuthenticationStatus.Authenticated;
  }

  @Selector()
  static username(state: AuthenticationStateModel) {
    return state.username;
  }

  @Selector()
  static token(state: AuthenticationStateModel) {
    return state.token;
  }

  @Selector()
  static status(state: AuthenticationStateModel) {
    return state.status;
  }

  constructor(readonly router: Router, readonly snackBar: MatSnackBar) {}

  @Action(TryLoginByCreds)
  async tryLoginByCreds(
    { getState, patchState }: StateContext<AuthenticationStateModel>,
    { username, password }: TryLoginByCreds
  ) {
    patchState({
      token: "",
      username,
      status: AuthenticationStatus.OnGoingAuthentication
    });
    try {
      const tokens = await Api.login(username, password);
      patchState({
        token: tokens.token,
        username: tokens.username,
        status: AuthenticationStatus.Authenticated
      });
      Api.writeStorage("AuthenticationProvider", "username", tokens.username);
      Api.writeStorage("AuthenticationProvider", "token", tokens.token);
      this.snackBar.open("Login successful", "", {
        duration: 1000
      });
    } catch (err) {
      patchState({
        token: "",
        username,
        status: AuthenticationStatus.NonAuthenticated
      });
      this.snackBar.open("Login failure", "", {
        duration: 1000
      });
    }
  }

  @Action(TryLoginByToken)
  async tryLoginByToken(
    { getState, patchState }: StateContext<AuthenticationStateModel>,
    {}: TryLoginByToken
  ) {
    const { token, username } = getState();
    if (token === "") {
      return;
    }

    patchState({
      token,
      username,
      status: AuthenticationStatus.OnGoingAuthentication
    });
    try {
      const valid = await Api.checkToken(token);
      if (valid) {
        patchState({
          token,
          username,
          status: AuthenticationStatus.Authenticated
        });
        this.snackBar.open("Login successful", "", {
          duration: 1000
        });
        return;
      }
    } catch (err) {}
    patchState({
      token,
      username,
      status: AuthenticationStatus.NonAuthenticated
    });
  }

  @Action(TryLogout)
  async tryLogout(
    { getState, patchState }: StateContext<AuthenticationStateModel>,
    { silent }: TryLogout
  ) {
    patchState({
      token: "",
      username: "",
      status: AuthenticationStatus.NonAuthenticated
    });
    Api.clearStorage("AuthenticationProvider", "username");
    Api.clearStorage("AuthenticationProvider", "token");
    if (!silent) {
      this.snackBar.open("Logout successful", "", {
        duration: 1000
      });
    }
    this.router.navigate(["/login"], {
      queryParams: {
        redirect: this.router.routerState.snapshot.url
      }
    });
  }
}
