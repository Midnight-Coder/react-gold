import { SampleReducer } from 'pages/SampleApp/SamplePage.redux';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
  sample: SampleReducer
});

export default RootReducer;
