import { SagaIterator } from 'redux-saga';
import rootAuthenticationSaga from './authentication';

export default function* rootSaga(): SagaIterator {
  yield* rootAuthenticationSaga();
}
