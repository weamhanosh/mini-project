import { all } from 'redux-saga/effects'
// import FileSaga from './components/File/saga'
import AppSaga from './components/App/saga'
import MyEditorSaga from './components/MyEditor/saga'

export default function* Sagas() {
    yield all([
        AppSaga(),
        // FileSaga(),
        MyEditorSaga()
    ])
}
