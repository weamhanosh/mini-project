import { combineReducers } from 'redux';
import MyEditorReducer from './components/MyEditor/reducer';
import MyCheckBoxReducer from './components/MyCheckBox/reducer';
import MyAnalyzeButtonReducer from './components/MyAnalyzeButton/reducer';
import MyPopoverReducer from './components/MyPopover/reducer';
import MyFilterReducer from './components/MyFilter/reducer';


export default combineReducers({
  myEditor: MyEditorReducer,
  myCheckBox: MyCheckBoxReducer,
  myAnalyzeButton: MyAnalyzeButtonReducer,
  myPopover: MyPopoverReducer,
  myFilter: MyFilterReducer
});
