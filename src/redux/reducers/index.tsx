import { combineReducers } from 'redux';
import rulings from './rulingsReducer';

const rootReducer = combineReducers({
  rulings,
});

export default rootReducer;
