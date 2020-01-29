import React from 'react';
import MyEditorActions from "./actions";
import {connect} from 'react-redux';

import './MyEditor.scss';

// import {Editor} from "primereact/editor";
import {ProgressBar} from 'primereact/progressbar';

import { Popover, Button, Input } from 'antd';
const { TextArea } = Input;

class MyEditor extends React.Component {
    
    renderHeader() {
        return (
            <span className="ql-formats">
                <button icon="pi pi-align-right" className="ql-align" aria-label="Alignment" value="right"></button>
            </span>
        );
    }

    one_word_renderer(word, analysis){
        return(
        <Popover
            title={word}
            content={
                <div>
                <p>{analysis}</p>
                </div>
            }
            // trigger="click"
            // trigger="hover"
            >
            <h6 style={{color: "#2e81ff"}}>{word}</h6>
        </Popover>
        );
    }

    words_renderer() {
        let words_analysis_array = [];
        let length = this.props.answer.length;
        let counter_index = Array(this.props.answer[(this.props.answer.length - 1)].line_index + 1);
        let m = 0;
        let n = 0;
        for (let i  = 0; i < counter_index.length; i++){
            for (let j = n; j < length; j++){
                if (this.props.answer[j].line_index > i || j === length - 1){
                    counter_index[i] = Array(j - n).fill(0);
                    n = j;
                    break;
                }
            }
            for (let j = m; j < length; j++){
                if (this.props.answer[j].line_index > i){
                    m = j;
                    break;
                }
                counter_index[i][this.props.answer[j].index]++;
            }
        }
        


        for (let i = 0; i < length; i++){
            let word = this.props.answer[i].word_in_text;
            let analysis = this.props.answer[i].analysis.toString();
            words_analysis_array[i] = this.one_word_renderer(word, analysis);
        }
        let divs = [];
        let k = 0;
        console.log(counter_index)
        for (let i = 0; i < counter_index.length; i++){
            let a = counter_index[i].length;
            divs[i] = 
            <div className="lines">
                {words_analysis_array.slice(k, k + a)}
            </div>
            k +=  counter_index[i].length;
        }
        return divs;
    }
     
    render(){
        // const header = this.renderHeader();
        return(
            <div className="content-section implementation" style={{direction: 'rtl'}}>
                {/* <Editor headerTemplate={header} style={{height:'320px', width:'650px'}} value={this.props.text}
                    onTextChange={(e) => this.props.EditTextEventHandler(e)}/> */}
                <div className="text_area">
                    <TextArea
                        value={this.props.text}
                        onChange={this.props.EditTextEventHandler}
                        placeholder="טקסט לניתוח"
                        autoSize
                        // size="default"
                    />
                </div>
                <p></p>
                {this.props.render_progress_bar && (!this.props.done) && <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>}
                <p></p>
                <Button type="primary" icon="experiment"
                    onClick={() => {this.props.UploadAndAnalyseTextEventHandler(this.props.text)}}>
                        נתח
                </Button>
                <p></p>
                {this.props.done && this.words_renderer()}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        render_progress_bar: state['myEditor'].get('render_progress_bar'),
        text: state['myEditor'].get('text'),
        done: state['myEditor'].get('done'),
        answer: state['myEditor'].get('answer'),
        newline_counter: state['myEditor'].get('newline_counter'),
        line_length_arr: state['myEditor'].get('line_length_arr')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // EditTextEventHandler: (e) => {
        //     dispatch(MyEditorActions.editTextField(e.textValue.substring(0, e.textValue.length - 1)));
        // },
        EditTextEventHandler: (e) => {
            e.persist();
            dispatch(MyEditorActions.editTextField(e.target.value));
        },
        UploadAndAnalyseTextEventHandler: (text) => {
            dispatch(MyEditorActions.uploadAction(text));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyEditor);
