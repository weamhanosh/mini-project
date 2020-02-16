import {MyFileUploadActionsConstants} from './constants'
import initialState from '../../initialState'

const MyFileUploadReducer = (state = initialState.myFileUpload, action) => {
    console.log('MyFileUploadReducerState=', state);
    switch (action.type) {

        case MyFileUploadActionsConstants.EDIT_TEXT_ACTION:{
            console.log('RECEIVED: MyFileUploadActionsConstants.EDIT_TEXT_ACTION');
            console.log('ACTION:', action);
            state = state.set('text', action.payload); 
            console.log('NEW STATE=', state);
            return state;
        }

        default: //otherwise state is lost!
            return state;
    }
};

export default MyFileUploadReducer;
