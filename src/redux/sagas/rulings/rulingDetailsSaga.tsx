import { takeLatest, put, call } from 'redux-saga/effects';

import { putRulingDetails } from '../../actions';
import { RULINGS } from '../../actions/types';
import { getRulingDetails } from '../../../services/api/rulingService';
import { handleHttpError } from '../../../services/httpUtils';
import { IRuling, TRulingEffect } from '@/types/rulings';
import { getRulingDetailsStore, setRulingDetailsStore } from '@/utils/localStorageUtils';

export function* fetchRulingDetails({ id }: { id: string }): Generator<TRulingEffect, void, IRuling> {
  const context = 'fetchRulingDetails saga';

  try {
    // const RulingDetailsStore = getRulingDetailsStore(id);
    // if (RulingDetailsStore) {
    //   data = RulingDetailsStore
    // } else {
      const response: IRuling = yield call(getRulingDetails, id);
      // setRulingDetailsStore(data)
    // }

    // Dispatches an action to get the node data to the state tree.
    yield put(putRulingDetails(response));
  } catch (error: unknown) {
    yield put(putRulingDetails(null));
    handleHttpError(error as IHttpError, context);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchRulingDetails() {
  // @ts-ignore
  yield takeLatest(RULINGS.FETCH_RULING_DETAILS, fetchRulingDetails);
}
