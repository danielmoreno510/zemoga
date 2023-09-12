import RulingList from './rulingList';
import { StoreService } from '@/redux/StoreService';
import { fetchRulingList, putOptionRulingList, fetchRulingOperation } from '@/redux/actions';
import { IRulingReducer, IRulingListDispatchProps, IRulingListStateProps, IRulingInitialState, IRuling } from '@/types/rulings';
import { getRulingList } from '../../redux/selectors/rulingsSelectors';
import { OPERATION, OPTIONS } from '@/types/inputs';

export const mapStateToProps = (state: IRulingListStateProps): IRulingInitialState => ({
  isFetchingRulingList: state.rulings.isFetchingRulingList,
  rulingList: getRulingList(state),
  option: state.rulings.option,
});

export const mapDispatchToProps = (dispatch: (T: IRulingReducer) => void): IRulingListDispatchProps => ({
  getRulings: () => {
    dispatch(fetchRulingList());
  },
  changeOption: (option: OPTIONS) => {
    dispatch(putOptionRulingList(option));
  },
  fetchVote: (operation: OPERATION, ruling: IRuling) => {
    dispatch(fetchRulingOperation(operation, ruling));
  },
});

const RulingListContainer = StoreService.connect(mapStateToProps, mapDispatchToProps)(RulingList);

export default RulingListContainer;
