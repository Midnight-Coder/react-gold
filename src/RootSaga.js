import { all, fork } from 'redux-saga/effects';
import SampleSaga from 'redux/saga/SampleSaga';


const sagas = {
  SampleSaga
};

export default function* RootSaga() {
  yield all(Object.values(sagas).map((saga) => fork(saga)));
}
