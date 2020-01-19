import {FileActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import FileActions from './actions'

function* uploadFile(action){
  console.log('UploadSaga=', action);
  try {
    const res = yield call(fetch, action.uri,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.payload)
      });
      console.log("ABC");
    const json = yield call([res, 'json']); //retrieve body of response
      console.log("ABC2");
    yield put(FileActions.loadImagesSuccessAction(json));
  } catch (e) {
    // yield put(FileActions.loadImagesFailureAction(e.message));
  }
}

function* FileSaga() {
  //using takeEvery, you take the action away from reducer to saga
  yield takeEvery(FileActionsConstants.UPLOAD_ACTION, uploadFile);
}

export default FileSaga;
