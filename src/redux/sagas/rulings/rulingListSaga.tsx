import { takeLatest, put, call } from 'redux-saga/effects';

import { putRulingList } from '../../actions';
import { RULINGS } from '../../actions/types';
import { getRulingList } from '../../../services/api/rulingService';
import { handleHttpError } from '../../../services/httpUtils';
import { IRuling, TRulingEffect } from '@/types/rulings';
import { getRulingListStore, setRulingListStore } from '@/utils/localStorageUtils';

export function* fetchRulingList(): Generator<TRulingEffect, void, IRuling[]> {
  const context = 'fetchRulingList saga';

  try {
    let data: IRuling[];
    // const rulingListStore = getRulingListStore()
    // if (rulingListStore) {
    //   data = rulingListStore
    // } else {
      const response: IRuling[] = yield call(getRulingList);
      data = response;
      setRulingListStore(data)
    // }

    // Dispatches an action to get the node data to the state tree.
    yield put(putRulingList(data));
  } catch (error: unknown) {
    yield put(putRulingList([]));
    handleHttpError(error as IHttpError, context);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchRulingList() {
  yield takeLatest(RULINGS.FETCH_RULING_LIST, fetchRulingList);
}
