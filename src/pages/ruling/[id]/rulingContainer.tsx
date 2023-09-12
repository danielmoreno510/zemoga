import Ruling from './ruling';
import { StoreService } from '@/redux/StoreService';
import { fetchRulingDetails } from '@/redux/actions';
import {
  IRulingReducer,
  IRulingListDispatchProps,
  IRulingListStateProps,
  IRulingInitialState,
} from '@/types/rulings';

export const mapStateToProps = (state: IRulingListStateProps): IRulingInitialState => ({
  isFetchingRulingDetails: state.rulings.isFetchingRulingDetails,
  rulingDetails: state.rulings.rulingDetails,
});

export const mapDispatchToProps = (dispatch: (T: IRulingReducer) => void): IRulingListDispatchProps => ({
  getRulingDetails: (id: string) => {
    dispatch(fetchRulingDetails(id));
  },
});

const RulingListContainer = StoreService.connect(mapStateToProps, mapDispatchToProps)(Ruling);

export default RulingListContainer;
