import { combineReducers } from 'redux';
import SampleReducer from 'redux/reducer/SampleReduer';


const RootReducer = combineReducers({
  sample: SampleReducer
});

export default RootReducer;
