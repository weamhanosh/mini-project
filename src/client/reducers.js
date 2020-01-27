import { combineReducers } from 'redux';
// import AppReducer from './components/App/reducer';
// import ArchiveReducer from './components/Archive/reducer';
// import FileReducer from './components/File/reducer';
import MyEditorReducer from './components/MyEditor/reducer';


export default combineReducers({
  // app: AppReducer,
  // archive: ArchiveReducer,
  // file: FileReducer,
  myEditor: MyEditorReducer
});
