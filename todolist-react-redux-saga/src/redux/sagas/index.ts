import { SagaIterator } from 'redux-saga';
import rootAuthenticationSaga from './authentication';
import rootTodoListSaga from './todolist';

export default function* rootSaga(): SagaIterator {
  yield* rootAuthenticationSaga();
  yield* rootTodoListSaga();
}
