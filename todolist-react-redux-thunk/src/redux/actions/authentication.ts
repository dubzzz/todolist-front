import * as Api from '../../api';
import { Dispatch } from 'redux';
import { notifyAction } from './notification';
import { NotificationLevel } from '../reducers/notification';

// types

export const AUTHENTICATION_LOGIN_SUCCESS = 'AUTHENTICATION_LOGIN_SUCCESS';
export const AUTHENTICATION_LOGIN_FAILURE = 'AUTHENTICATION_LOGIN_FAILURE';
export const AUTHENTICATION_LOGIN_ON_GOING = 'AUTHENTICATION_LOGIN_ON_GOING';
export const AUTHENTICATION_LOGOUT = 'AUTHENTICATION_LOGOUT';

// actions

const loginSuccessAction = (username: string, token: string) =>
  ({
    type: AUTHENTICATION_LOGIN_SUCCESS,
    payload: { username, token }
  } as const);

const loginFailureAction = () =>
  ({
    type: AUTHENTICATION_LOGIN_FAILURE,
    payload: {}
  } as const);

const loginOnGoingAction = () =>
  ({
    type: AUTHENTICATION_LOGIN_ON_GOING,
    payload: {}
  } as const);

export type ActionLoginSuccess = ReturnType<typeof loginSuccessAction>;
export type ActionLoginFailure = ReturnType<typeof loginFailureAction>;
export type ActionLoginOnGoing = ReturnType<typeof loginOnGoingAction>;
export type Actions = ActionLoginSuccess | ActionLoginFailure | ActionLoginOnGoing;

// thunks

const persistTokens = (username: string, token: string) => {
  Api.writeStorage('AuthenticationProvider', 'username', username);
  Api.writeStorage('AuthenticationProvider', 'token', token);
};

export const tryLoginByCredsAction = (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loginOnGoingAction());
    try {
      const tokens = await Api.login(username, password);
      persistTokens(tokens.username, tokens.token);
      dispatch(loginSuccessAction(tokens.username, tokens.token));
      dispatch(notifyAction('Login successful', NotificationLevel.Success));
    } catch (err) {
      dispatch(loginFailureAction());
      dispatch(notifyAction('Login failure', NotificationLevel.Error));
    }
  };
};

export const tryLoginByTokenAction = () => {
  return async (dispatch: Dispatch) => {
    const username = Api.readStorage('AuthenticationProvider', 'username');
    const token = Api.readStorage('AuthenticationProvider', 'token');
    if (token === '') return;

    dispatch(loginOnGoingAction());

    const success = await Api.checkToken(token);
    if (success) {
      persistTokens(username, token);
      dispatch(loginSuccessAction(username, token));
      dispatch(notifyAction('Login successful', NotificationLevel.Success));
    } else dispatch(loginFailureAction());
  };
};

export const tryLogoutAction = (silent?: boolean) => {
  return async (dispatch: Dispatch) => {
    Api.clearStorage('AuthenticationProvider', 'username');
    Api.clearStorage('AuthenticationProvider', 'token');
    dispatch(loginFailureAction());
    if (!silent) dispatch(notifyAction('Logout successful', NotificationLevel.Success));
  };
};
