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

function changeOptions(option){
  return {
    type: MyEditorActionsConstants.CHANGE_OPTIONS_ACTION,
    payload: option
  }
}

function failureAction(){
  return {
    type: MyEditorActionsConstants.FAILURE_ACTION
  }
}

function changeInput(option){
  return {
    type: MyEditorActionsConstants.CHANGE_INPUT_ACTION,
    payload: option
  }
}


let MyEditorActions = {
  editTextField,
  uploadAction,
  doneAction,
  changeOptions,
  failureAction,
  changeInput
};

export default MyEditorActions;
