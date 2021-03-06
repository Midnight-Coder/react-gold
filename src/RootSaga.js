import { SampleSaga } from 'pages/SampleApp/SamplePage.redux';
import { all, fork } from 'redux-saga/effects';


const sagas = {
  SampleSaga
};

export default function* RootSaga() {
  yield all(Object.values(sagas).map((saga) => fork(saga)));
}
