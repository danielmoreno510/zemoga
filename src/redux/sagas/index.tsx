import {all} from 'redux-saga/effects';
import RulingSagas from './rulings';

export default function* rootSaga() {
  yield all([RulingSagas()]);
}