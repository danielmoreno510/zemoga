import { StoreService } from '../../redux/StoreService';
import { IRulingInitialState, IRulingListStateProps } from '../../types/rulings';
import Navbar from './Navbar';

export const mapStateToProps = (state: IRulingListStateProps): IRulingInitialState => ({
  isFetchingRulingList: state.rulings.isFetchingRulingList,
  isFetchingRulingDetails: state.rulings.isFetchingRulingDetails,
});


const RulingListContainer = StoreService.connect(mapStateToProps, null)(Navbar);

export default RulingListContainer;
