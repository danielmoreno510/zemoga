import { IRuling, IRulingReducer } from '@/types/rulings';
import { RULINGS } from './types';
import { OPERATION, OPTIONS } from '@/types/inputs';

export const fetchRulingList = (): IRulingReducer => ({
  type: RULINGS.FETCH_RULING_LIST,
});

export const putRulingList = (rulingList: IRuling[]): IRulingReducer => ({
  type: RULINGS.PUT_RULING_LIST,
  rulingList,
});

export const putOptionRulingList = (option: OPTIONS): IRulingReducer => ({
  type: RULINGS.PUT_OPTION_RULING_LIST,
  option,
});

export const fetchRulingDetails = (id: string): IRulingReducer => ({
  type: RULINGS.FETCH_RULING_DETAILS,
  id,
});

export const putRulingDetails = (rulingDetails: IRuling | null): IRulingReducer => ({
  type: RULINGS.PUT_RULING_DETAILS,
  rulingDetails,
});

export const fetchRulingOperation = (operation: OPERATION, ruling: IRuling): IRulingReducer => ({
  type: RULINGS.FETCH_RULING_OPERATION,
  operation,
  ruling
});

export const putRulingOperation = (operation: OPERATION, ruling: IRuling): IRulingReducer => ({
  type: RULINGS.PUT_RULING_OPERATION,
  operation,
  ruling
});

const actions = { fetchRulingList, putRulingList }

export default actions;
