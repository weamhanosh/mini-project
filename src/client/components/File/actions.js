import { FileActionsConstants } from './constants';

function updateUploadedField(upload) {
  return {
    type: FileActionsConstants.UPLOAD_ACTION,
    uri: '/api/upload',
    payload: {
      upload
    }
  }
}

function updateDoneField(done){
  return {
    type: FileActionsConstants.DONE_ACTION,
    payload: done
  }
}


let FileActions = {
  updateUploadedField,
  updateDoneField
};

export default FileActions;

