import {FileActionsConstants} from './constants'
import initialState from '../../initialState'
// import { List } from 'immutable'

const FileReducer = (state = initialState.file, action) => {
    console.log('FileReducerState=', state);
    switch (action.type) {
        // case FileActionsConstants.UPLOAD_ACTION:
        //     console.log('RECEIVED: FileActionsConstants.UPLOAD_ACTION');
        //     console.log('ACTION:', action);
        //     state = state.set('uploaded', action.payload);
        //     // Add progress bar
        //     /////////////////////////////////////////// START RUNNING THE TAGGER ///////////////////////////////////////////
        //     console.log('NEW STATE=', state);
        //     return state;
        case FileActionsConstants.DONE_ACTION:
            console.log('RECEIVED: FileActionsConstants.DONE_ACTION');
            console.log('ACTION:', action);
            state = state.set('done', action.payload);
            // PRINT OUTPUT
            // Add overlay on words
            console.log('NEW STATE=', state);
            return state;
        default: //otherwise state is lost!
            return state;
    }
};

export default FileReducer
