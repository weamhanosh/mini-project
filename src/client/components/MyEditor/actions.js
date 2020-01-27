import { MyEditorActionsConstants } from './constants';

function editTextField(text){
  return {
    type: MyEditorActionsConstants.EDIT_TEXT_ACTION,
    payload: text
  }
}

function uploadAction(text) {
  return {
    type: MyEditorActionsConstants.UPLOAD_ACTION,
    uri: '/api/upload',
    payload: text
  }
}

function doneAction(output){
  return {
    type: MyEditorActionsConstants.DONE_ACTION,
    payload: output
  }
}

function showOverlay(){
  return {
    type: MyEditorActionsConstants.SHOW_OVERLAY_ACTION,
  }
}

let MyEditorActions = {
  editTextField,
  uploadAction,
  doneAction,
  showOverlay
};

export default MyEditorActions;
