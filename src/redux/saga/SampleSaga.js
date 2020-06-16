import { all, put, takeLatest } from 'redux-saga/effects';
import * as sampleActions from 'redux/actions/SampleActions';
import { SAMPLE } from 'redux/actions/Types';
import http from 'utils/http';


function* fetchStatus(action) {
  const { status, error } = yield http.get(action.url);
  if (error) { yield put(sampleActions.fetchStatusError(error)); }
  else { yield put(sampleActions.fetchStatusSuccess(status)); }
}

export default function* root() {
  yield all([
    takeLatest(SAMPLE.FETCH_STATUS, fetchStatus)
  ]);
}
