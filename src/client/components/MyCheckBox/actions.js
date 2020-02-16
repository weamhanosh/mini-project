import { MyCheckBoxActionsConstants } from './constants';

function changeInput(option){
  return {
    type: MyCheckBoxActionsConstants.CHANGE_INPUT_ACTION,
    payload: option
  }
}


let MyCheckBoxActions = {
  changeInput
};

export default MyCheckBoxActions;
