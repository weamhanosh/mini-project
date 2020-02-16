import {MyCheckBoxActionsConstants} from './constants'
import initialState from '../../initialState'

const MyCheckBoxReducer = (state = initialState.myCheckBox, action) => {
    console.log('MyCheckBoxReducerState=', state);
    switch (action.type) {

        case MyCheckBoxActionsConstants.CHANGE_INPUT_ACTION:{
            console.log('RECEIVED: MyCheckBoxActionsConstants.CHANGE_INPUT_ACTION');
            console.log('ACTION:', action);
            state = state.set('render_text_box', action.payload);
            console.log('NEW STATE=', state);
            return state;
        }

        default: //otherwise state is lost!
            return state;
    }
};

export default MyCheckBoxReducer;
