import { produce } from 'immer';

import { RULINGS } from '../actions/types';
import { IRulingInitialState, IRulingReducer } from '@/types/rulings';
import { OPTIONS } from '@/types/inputs';

export const initialState: IRulingInitialState = {
  isFetchingRulingList: false,
  rulingList: [],
  option: OPTIONS.LIST,
  isFetchingRulingDetails: false,
  rulingDetails: null,
};

export default (state = initialState, action: IRulingReducer) =>
  produce(state, (draft: IRulingInitialState) => {
    switch (action.type) {
      case RULINGS.FETCH_RULING_LIST:
        draft.isFetchingRulingList = true;
        draft.isFetchingRulingDetails = false;
        break;
      case RULINGS.PUT_RULING_LIST:
        draft.rulingList = action.rulingList;
        draft.isFetchingRulingList = false;
        break;
      case RULINGS.PUT_OPTION_RULING_LIST:
        draft.option = action.option;
        break;
      case RULINGS.FETCH_RULING_DETAILS:
        draft.isFetchingRulingDetails = true;
        draft.isFetchingRulingList = false;
        break;
      case RULINGS.PUT_RULING_DETAILS:
        draft.rulingDetails = action.rulingDetails;
        draft.isFetchingRulingDetails = false;
        break;
      case RULINGS.PUT_RULING_OPERATION:
        draft.rulingList = draft.rulingList!.map(ruling => ruling.id === action.ruling!.id ? action.ruling! : ruling)
        break;
      default:
        break;
    }
  });
