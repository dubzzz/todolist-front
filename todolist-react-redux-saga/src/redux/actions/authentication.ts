// types
export const AUTHENTICATION_TRY_LOGIN_BY_TOKEN = 'AUTHENTICATION_TRY_LOGIN_BY_TOKEN';
export const AUTHENTICATION_TRY_LOGIN_BY_CREDS = 'AUTHENTICATION_TRY_LOGIN_BY_CREDS';
export const AUTHENTICATION_LOGIN_SUCCESS = 'AUTHENTICATION_LOGIN_SUCCESS';
export const AUTHENTICATION_LOGIN_FAILURE = 'AUTHENTICATION_LOGIN_FAILURE';
export const AUTHENTICATION_LOGIN_ON_GOING = 'AUTHENTICATION_LOGIN_ON_GOING';
export const AUTHENTICATION_LOGOUT = 'AUTHENTICATION_LOGOUT';

// actions
export const tryLoginByTokenAction = () =>
  ({
    type: AUTHENTICATION_TRY_LOGIN_BY_TOKEN,
    payload: {}
  } as const);
export const tryLoginByCredsAction = (username: string, password: string) =>
  ({
    type: AUTHENTICATION_TRY_LOGIN_BY_CREDS,
    payload: { username, password }
  } as const);
export const tryLogoutAction = (silent?: boolean) =>
  ({
    type: AUTHENTICATION_LOGOUT,
    payload: { silent }
  } as const);
export const loginSuccessAction = (username: string, token: string) =>
  ({
    type: AUTHENTICATION_LOGIN_SUCCESS,
    payload: { username, token }
  } as const);
export const loginFailureAction = () =>
  ({
    type: AUTHENTICATION_LOGIN_FAILURE,
    payload: {}
  } as const);
export const loginOnGoingAction = () =>
  ({
    type: AUTHENTICATION_LOGIN_ON_GOING,
    payload: {}
  } as const);

export type ActionTryLoginByToken = ReturnType<typeof tryLoginByTokenAction>;
export type ActionTryLoginByCreds = ReturnType<typeof tryLoginByCredsAction>;
export type ActionLoginSuccess = ReturnType<typeof loginSuccessAction>;
export type ActionLoginFailure = ReturnType<typeof loginFailureAction>;
export type ActionLoginOnGoing = ReturnType<typeof loginOnGoingAction>;
export type ActionLogout = ReturnType<typeof tryLogoutAction>;
export type Actions =
  | ActionTryLoginByToken
  | ActionTryLoginByCreds
  | ActionLoginSuccess
  | ActionLoginFailure
  | ActionLoginOnGoing
  | ActionLogout;
