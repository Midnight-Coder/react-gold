import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { SAMPLE } from 'redux/Types';
import { SyntheticRedux } from 'synthetic-redux';
import sample from 'utils/apiUrls';


const fetchSampleStatus = new SyntheticRedux({
  type: SAMPLE.FETCH_STATUS,
  url: sample.status
}, 'response');

export {
  fetchSampleStatus
};

export const SampleReducer = combineReducers({
  status: fetchSampleStatus.reducer
});

export function* SampleSaga() {
  yield all([
    fetchSampleStatus.sagaEffect
  ]);
}
