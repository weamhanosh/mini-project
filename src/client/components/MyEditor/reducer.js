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
            state = state.set('answer', action.payload);
            let answer = action.payload;
            let output = [];
            for (let i = 0; i < answer.length; i++){
                let word_in_text = answer[i].word_in_text;
                let analysis = answer[i].analysis;
                let tmp = analysis.reduce((acc, curr)=> {if(curr === 'unspecified') return acc; return acc + ` ` + curr;}, "");
output[i] =
`Word in text: ${word_in_text}
    Analysis: ${tmp}
`;
            }
            let output_string = output.reduce((acc, curr)=> acc + "\n" + curr, "");
            state = state.set('output', output_string);
            console.log('NEW STATE=', state);
            return state;
        }

        case MyEditorActionsConstants.SHOW_OVERLAY_ACTION:{
            console.log('RECEIVED: MyEditorActionsConstants.SHOW_OVERLAY_ACTION');
            console.log('ACTION:', action);
            state = state.set('overlay', true);
            console.log('NEW STATE=', state);
            return state;
        }

        default: //otherwise state is lost!
            return state;
    }
};

export default MyEditorReducer;
