import Home from './home';
import { StoreService } from '@/redux/StoreService';
import { fetchRulingOperation } from '@/redux/actions';
import { IRulingReducer, IRulingListDispatchProps, IRulingListStateProps, IRulingInitialState, IRuling } from '@/types/rulings';
import { getRulingList } from '../../redux/selectors/rulingsSelectors';
import { OPERATION } from '@/types/inputs';

export const mapStateToProps = (state: IRulingListStateProps): IRulingInitialState => ({
  rulingList: getRulingList(state),
});

export const mapDispatchToProps = (dispatch: (T: IRulingReducer) => void): IRulingListDispatchProps => ({
  fetchVote: (operation: OPERATION, ruling: IRuling) => {
    dispatch(fetchRulingOperation(operation, ruling));
  },
});

const HomeContainer = StoreService.connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
