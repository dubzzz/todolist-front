import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../../api';

import {
  AUTHENTICATION_TRY_LOGIN_BY_CREDS,
  ActionTryLoginByCreds,
  loginOnGoingAction,
  loginSuccessAction,
  loginFailureAction,
  ActionTryLoginByToken,
  AUTHENTICATION_TRY_LOGIN_BY_TOKEN,
  ActionLogout,
  AUTHENTICATION_LOGOUT
} from '../actions/authentication';

function persistTokens(username: string, token: string) {
  Api.writeStorage('AuthentificationProvider', 'username', username);
  Api.writeStorage('AuthentificationProvider', 'token', token);
}

function* tryLoginByCreds(action: ActionTryLoginByCreds) {
  const { username, password } = action.payload;
  yield put(loginOnGoingAction());
  try {
    const tokens: Api.LoginSuccess = yield call(() => Api.login(username, password));
    persistTokens(tokens.username, tokens.token);
    yield put(loginSuccessAction(tokens.username, tokens.token));
  } catch (err) {
    yield put(loginFailureAction());
  }
}

function* tryLoginByToken(action: ActionTryLoginByToken) {
  const username = Api.readStorage('AuthentificationProvider', 'username');
  const token = Api.readStorage('AuthentificationProvider', 'token');
  if (token === '') return;

  yield put(loginOnGoingAction());

  const success: boolean = yield call(() => Api.checkToken(token));
  if (success) {
    persistTokens(username, token);
    yield put(loginSuccessAction(username, token));
  } else yield put(loginFailureAction());
}

function* logout(action: ActionLogout) {
  Api.clearStorage('AuthentificationProvider', 'username');
  Api.clearStorage('AuthentificationProvider', 'token');
  yield put(loginFailureAction());
}

export default function* rootAuthenticationSaga(): SagaIterator {
  yield takeEvery(AUTHENTICATION_TRY_LOGIN_BY_CREDS, tryLoginByCreds);
  yield takeEvery(AUTHENTICATION_TRY_LOGIN_BY_TOKEN, tryLoginByToken);
  yield takeEvery(AUTHENTICATION_LOGOUT, logout);
}
