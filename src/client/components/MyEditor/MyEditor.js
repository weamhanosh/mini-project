import React from 'react';
import MyEditorActions from "./actions";
import {connect} from 'react-redux';

import './MyEditor.scss';

import {ProgressBar} from 'primereact/progressbar';
import {MultiSelect} from 'primereact/multiselect';

import { Popover, Button, Input, Result, Upload, Icon, message, Radio } from 'antd';
const { TextArea } = Input;
const { Dragger } = Upload;

class MyEditor extends React.Component {
    
    one_word_renderer(word, word_without_starts, analysis, word_root){
        return(
        <Popover
            title={<p style={{color: "#2e81ff", direction: 'rtl'}}>{word}</p>}
            content={
                <div>
                <p style={{color: "#2e81ff", direction: 'rtl'}}>לקסמה: {word_root}</p>
                <p style={{color: "#2e81ff", direction: 'rtl'}}>ניתוח: {analysis}</p>
                </div>
            }
            // trigger="click"
            // trigger="hover"
            >
            <p style={{color: "#2e81ff", direction: 'rtl'}}>{word_without_starts}</p>
        </Popover>
        );
    }

    long_line(words, wanted_line_length){
        let arr_to_ret = [];
        let m = 0;
        if (words.length % wanted_line_length === 0){
            for (let i = 0; i < (words.length) / wanted_line_length; i++){
                arr_to_ret[i] = Array(wanted_line_length);
                for (let j = 0; j < arr_to_ret[i].length; j++){
                    arr_to_ret[i][j] = words[m];
                    m++;
                }
            }
        } else {
            for (let i = 0; i < ((words.length) / wanted_line_length) + 1; i++){
                if (i !== ((words.length) / wanted_line_length)){
                    arr_to_ret[i] = Array(wanted_line_length);
                    for (let j = 0; j < arr_to_ret[i].length; j++){
                        arr_to_ret[i][j] = words[m];
                        m++;
                    }
                } else {
                    arr_to_ret[i] = Array(words.length % wanted_line_length);
                    for (let j = 0; j < arr_to_ret[i].length; j++){
                        arr_to_ret[i][j] = words[m];
                        m++;
                    }
                }
            }
            
        }
        return arr_to_ret;
    }

    words_renderer() {
        let words_analysis_array = [];
        let length = this.props.answer.length;
        if (this.props.answer.length === 0){
            return
        }
        let counter_index = Array(this.props.answer[(this.props.answer.length - 1)].line_index + 1);
        let m = -1;
        let n = -1;
        for (let i  = 0; i < counter_index.length; i++){
            for (let j = n + 1; j < length; j++){
                if (j === length - 1){
                    counter_index[i] = Array(j - n).fill(0);
                    n = j;
                    break;
                } else if (j + 1 < this.props.answer.length && (this.props.answer[j + 1].line_index > i)){
                    counter_index[i] = Array(j - n).fill(0);
                    n = j;
                    break;
                }
            }
        }

        for (let i  = 0; i < counter_index.length; i++){
            for (let j = m + 1; j < length; j++){
                if (j === length - 1){
                    counter_index[i][this.props.answer[j].index]++;
                    break;
                } else if (j + 1 < this.props.answer.length && (this.props.answer[j + 1].line_index > i)){
                    counter_index[i][this.props.answer[j].index]++;
                    m = j;
                    break;
                }
                counter_index[i][this.props.answer[j].index]++;
            }
        }
        
        for (let i = 0; i < length; i++){
            let word = this.props.answer[i].word_in_text;
            let word_without_starts = this.props.answer[i].word_without_starts;
            let word_root = this.props.answer[i].root;
            let analysis = this.props.answer[i].analysis;
            if (this.props.selected_options.length === 0){
                words_analysis_array[i] = this.one_word_renderer(word, word_without_starts, analysis.toString(), word_root);
            } else {
                for (let j = 0; j < this.props.selected_options.length; j++){
                    if (analysis.includes(this.props.selected_options[j])){
                        words_analysis_array[i] = this.one_word_renderer(word, word_without_starts, analysis.toString(), word_root);
                        break;
                    }
                }
            }
        }
        
        let divs = [];
        let k = 0;
        let x = 0;
        for (let i = 0; i < counter_index.length; i++){
            let a = (counter_index[i]).reduce((acc, curr) => acc + curr, 0);
            let wanted_line_length = 20;
            if (a > wanted_line_length){
                let returned_arr = this.long_line(words_analysis_array.slice(k, k + a), wanted_line_length);
                for (let j = 0; j < returned_arr.length; j++){
                    divs[x + j] =
                    <div className="lines">
                        {returned_arr[j]}
                    </div>
                }
                x += returned_arr.length + 1;
                k += a;
            } else {
                divs[x] = 
                <div className="lines">
                    {words_analysis_array.slice(k, k + a)}
                </div>;
                k += a;
                x++;
            }
        }
        return divs;
    }
     
    render(){

        function beforeUpload(file) {
            const isTxt = file.type === 'text/plain';
            if (!isTxt) {
              message.error('You can only upload .txt file!');
            }
            return isTxt;
        }

        const properties = {
            name: 'file',
            accept: ".txt",
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            beforeUpload: beforeUpload,
            onChange(info) {
                console.log(info)
                const { status } = info.file;
                if (status !== 'uploading') {
                    // console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            }
        };

        return(
            <div className="content-section implementation" style={{direction: 'rtl'}}>
                <div className="text_area">
                <Radio.Group onChange={(e) => this.props.InputEventHandler(e)} value={this.props.render_text_box}>
                    <Radio style={{display: 'block', height: '30px', lineHeight: '30px'}} value={true}>
                        הזנת טקסט
                    </Radio>
                    <Radio style={{display: 'block', height: '30px', lineHeight: '30px'}} value={false}>
                        העלאת קובץ טקסט
                    </Radio>
                </Radio.Group>
                <p></p>
                    {this.props.render_text_box && 
                        <TextArea
                            value={this.props.text}
                            onChange={this.props.EditTextEventHandler}
                            placeholder="טקסט לניתוח"
                            autoSize
                        />
                    }
                    {(!this.props.render_text_box) && 
                        <div className="file_upload"  style={{direction: 'ltr'}}>
                            <Dragger {...properties}>
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            </Dragger>
                        </div>
                    }
                </div>
                <p></p>
                {this.props.render_progress_bar && (!this.props.done) && <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>}
                <p></p>
                <div className="content-section implementation multiselect" style={{direction: 'ltr'}}>
                    <MultiSelect
                        value={this.props.selected_options}
                        options={this.props.options}
                        onChange={(e) => this.props.ChangeOptionsEventHandler(e.value, this.props.options)}
                        style={{minWidth: '12em'}}
                        filter={true}
                        placeholder={"אפשרויות חיפוש"}>
                    </MultiSelect>
                </div>
                <p></p>
                <Button type="primary" icon="experiment"
                    disabled={(this.props.render_progress_bar && (!this.props.done)) || (this.props.failed)}
                    onClick={() => {this.props.UploadAndAnalyseTextEventHandler(this.props.text)}}  style={{direction: 'ltr'}}>
                        נתח
                </Button>
                <p></p>
                {this.props.done && this.words_renderer()}
                {this.props.failed &&
                    <Result
                        status="error"
                        title="פעולה נכשלה"
                        extra={[
                            <Button type="primary" onClick={() => window.location.reload(false)}>
                                רענן דף
                            </Button>
                        ]}
                    />}
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
        line_length_arr: state['myEditor'].get('line_length_arr'),
        options: state['myEditor'].get('options'),
        selected_options: state['myEditor'].get('selected_options'),
        failed: state['myEditor'].get('failed'),
        render_text_box: state['myEditor'].get('render_text_box')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        EditTextEventHandler: (e) => {
            e.persist();
            dispatch(MyEditorActions.editTextField(e.target.value));
        },
        UploadAndAnalyseTextEventHandler: (text) => {
            dispatch(MyEditorActions.uploadAction(text));
        },
        ChangeOptionsEventHandler: (e) => {
            dispatch(MyEditorActions.changeOptions(e));
        },
        InputEventHandler: (e) => {
            dispatch(MyEditorActions.changeInput(e.target.value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyEditor);
