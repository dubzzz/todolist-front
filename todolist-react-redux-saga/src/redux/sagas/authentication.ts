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
import { NotificationLevel } from '../reducers/notification';
import { notifyAction } from '../actions/notification';

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
    yield put(notifyAction('Login successful', NotificationLevel.Success));
  } catch (err) {
    yield put(loginFailureAction());
    yield put(notifyAction('Login failure', NotificationLevel.Error));
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
    yield put(notifyAction('Login successful', NotificationLevel.Success));
  } else yield put(loginFailureAction());
}

function* logout(action: ActionLogout) {
  const { silent } = action.payload;
  Api.clearStorage('AuthentificationProvider', 'username');
  Api.clearStorage('AuthentificationProvider', 'token');
  yield put(loginFailureAction());
  if (!silent) yield put(notifyAction('Logout successful', NotificationLevel.Success));
}

export default function* rootAuthenticationSaga(): SagaIterator {
  yield takeEvery(AUTHENTICATION_TRY_LOGIN_BY_CREDS, tryLoginByCreds);
  yield takeEvery(AUTHENTICATION_TRY_LOGIN_BY_TOKEN, tryLoginByToken);
  yield takeEvery(AUTHENTICATION_LOGOUT, logout);
}
