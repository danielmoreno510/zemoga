import { all } from 'redux-saga/effects';

import RulingListSaga from './rulingListSaga';
import RulingDetailsSaga from './rulingDetailsSaga';
import RulingOperationSaga from './rulingOperationSaga';

export default function* rootSaga() {
  yield all([RulingListSaga(), RulingDetailsSaga(), RulingOperationSaga()]);
}
