import { takeLatest, put, call } from 'redux-saga/effects';

import { putRulingOperation } from '../../actions';
import { RULINGS } from '../../actions/types';
import { saveVote } from '../../../services/api/rulingService';
import { handleHttpError } from '../../../services/httpUtils';
import { IRuling, TRulingEffect } from '@/types/rulings';
import { OPERATION } from '@/types/inputs';

export function* fetchRulingOperation(data: {operation: OPERATION, ruling: IRuling, type: any}): Generator<TRulingEffect, void, IRuling[]> {
  const context = 'fetchRulingOperation saga';

  try {
    let {percent, ...ruling} = {...data.ruling};
    if(data.operation === OPERATION.ADD) {
      ruling = {...ruling, votes: {...ruling.votes, positive: ruling.votes.positive + 1} }
    }
    if(data.operation === OPERATION.SUBS) {
      ruling = {...ruling, votes: {...ruling.votes, negative: ruling.votes.negative + 1} }
    }
    yield call(saveVote, ruling);
    // Dispatches an action to get the node data to the state tree.
    yield put(putRulingOperation(data.operation, ruling));
  } catch (error: unknown) {
    handleHttpError(error as IHttpError, context);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchRulingOperation() {
  yield takeLatest(RULINGS.FETCH_RULING_OPERATION, fetchRulingOperation);
}
