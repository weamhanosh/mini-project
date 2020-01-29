import {MyEditorActionsConstants} from './constants'
import initialState from '../../initialState'
// import { List } from 'immutable'

const MyEditorReducer = (state = initialState.myEditor, action) => {
    console.log('MyEditorReducerState=', state);
    switch (action.type) {
        // case MyEditorActionsConstants.CLEAR_ACTION:{
        //     console.log('RECEIVED: MyEditorActionsConstants.CLEAR_ACTION');
        //     console.log('ACTION:', action);
        //     state = state.set('text', ""); 
        //     state = state.set('render_progress_bar', false); 
        //     state = state.set('upload', false); 
        //     state = state.set('done', false); 
        //     console.log('NEW STATE=', state);
        //     return state;
        // }
        case MyEditorActionsConstants.EDIT_TEXT_ACTION:{
            console.log('RECEIVED: MyEditorActionsConstants.EDIT_TEXT_ACTION');
            console.log('ACTION:', action);
            state = state.set('text', action.payload); 
            console.log('NEW STATE=', state);
            return state;
        }

        case MyEditorActionsConstants.UPLOAD_ACTION:{
            console.log('RECEIVED: MyEditorActionsConstants.UPLOAD_ACTION');
            console.log('ACTION:', action);
            state = state.set('render_progress_bar', true);
            state = state.set('done', false);
            console.log('NEW STATE=', state);
            return state;
        }

        case MyEditorActionsConstants.DONE_ACTION:{
            console.log('RECEIVED: MyEditorActionsConstants.DONE_ACTION');
            console.log('ACTION:', action);
            // PRINT OUTPUT
            console.log(action.payload);
            // Add overlay on words
            state = state.set('render_progress_bar', false);
            state = state.set('done', true);
            state = state.set('answer', action.payload.analysed_text_arr);
            state = state.set('newline_counter', action.payload.newline_counter);
            state = state.set('line_length_arr', action.payload.line_length_arr);
            console.log('NEW STATE=', state);
            return state;
        }

        default: //otherwise state is lost!
            return state;
    }
};

export default MyEditorReducer;
