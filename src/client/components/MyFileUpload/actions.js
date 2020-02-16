import { MyFileUploadActionsConstants } from './constants';

function editTextField(text){
  return {
    type: MyFileUploadActionsConstants.EDIT_TEXT_ACTION,
    payload: text
  }
}

let MyFileUploadActions = {
  editTextField
};

export default MyFileUploadActions;
