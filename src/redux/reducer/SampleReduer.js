import { SAMPLE } from 'redux/actions/Types';


const initialState = {};

const SampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE.FETCH_STATUS_SUCCESS:
      return { ...state, status: action.payload };
    case SAMPLE.FETCH_STATUS_ERROR:
      return { ...state, error: 'Missing API Configuration' };
    default:
      return state;
  }
};

export default SampleReducer;
