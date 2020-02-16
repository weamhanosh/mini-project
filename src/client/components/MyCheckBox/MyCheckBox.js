import React from 'react';
import MyCheckBoxActions from "./actions";
import {connect} from 'react-redux';

import './MyCheckBox.scss';

import { Radio } from 'antd';

class MyCheckBox extends React.Component {
     
    render(){
        return(
            <div className="content-section implementation" style={{direction: 'rtl'}}>
                <Radio.Group onChange={(e) => this.props.InputEventHandler(e)} value={this.props.render_text_box}>
                    <Radio style={{display: 'block', height: '30px', lineHeight: '30px'}} value={true}>
                        הזנת טקסט
                    </Radio>
                    <Radio style={{display: 'block', height: '30px', lineHeight: '30px'}} value={false}>
                        העלאת קובץ טקסט
                    </Radio>
                </Radio.Group>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        render_text_box: state['myCheckBox'].get('render_text_box')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        InputEventHandler: (e) => {
            dispatch(MyCheckBoxActions.changeInput(e.target.value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCheckBox);
