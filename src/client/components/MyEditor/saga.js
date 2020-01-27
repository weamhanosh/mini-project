import {MyEditorActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import MyEditorActions from './actions'

function* upload(action){
  console.log('UploadSaga=', action);
  try {
    const res = yield call(fetch, action.uri,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"text": action.payload})
      });
    const json = yield call([res, 'json']); //retrieve body of response
    yield put(MyEditorActions.doneAction(json));
  } catch (e) {
    console.log("received error:");
    console.log(e);
    // yield put(FileActions.loadImagesFailureAction(e.message));
  }
}

function* MyEditorSaga() {
  //using takeEvery, you take the action away from reducer to saga
  yield takeEvery(MyEditorActionsConstants.UPLOAD_ACTION, upload);
}

export default MyEditorSaga;
