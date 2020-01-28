import React from 'react';
// import {connect} from 'react-redux';
// import ArchiveActions from '../Archive/actions';
// import {Button} from 'primereact/button';
import MyEditorActions from "./actions";
import './MyEditor.scss';
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
// import {ScrollPanel} from "primereact/scrollpanel";
import {OverlayPanel} from "primereact/overlaypanel";
import {ProgressBar} from 'primereact/progressbar';

import { Popover } from 'antd';

import {connect} from 'react-redux';

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
                trigger="click"
                >
                <h5 style={{color: "#2e81ff"}}>{word}</h5>
            </Popover>
        );
    }

    words_renderer() {
        let words_analysis_array = [];
        for (let i = 0; i < this.props.answer.length; i++){
            let word = this.props.answer[i].word_in_text;
            let analysis = this.props.answer[i].analysis.toString();
            words_analysis_array[i] = this.one_word_renderer(word, analysis);
        }
        let div_to_return = <div className="wrapper_for_words"></div>
        for (let i = 0; i < this.props.answer.length; i += 10){

        }
        return words_analysis_array;
    }
        // if (n % 9 === 0 && n !== 0){
        //     return this.words_renderer(n + 1,
        //             <div className="1_words">
        //                 <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>{this.props.answer[this.props.answer.length - 1 - n].word_in_text}</h5>
        //                 <OverlayPanel ref={(el) => this.op = el}>
        //                     {this.props.answer[this.props.answer.length - 1 - n].analysis.toString()}
        //                 </OverlayPanel>
        //                 {so_far}
        //                 <div></div>
        //             </div>
        //     );
        // }
        // if (n ===  this.props.answer.length)
        //     return so_far;
        // return this.words_renderer(n + 1,
        //                     <div className="1_words">
        //                         <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>{this.props.answer[this.props.answer.length - 1 - n].word_in_text}</h5>
        //                         <OverlayPanel ref={(el) => this.op = el}>
        //                             {this.props.answer[this.props.answer.length - 1 - n].analysis.toString()}
        //                         </OverlayPanel>
        //                         {so_far}
        //                     </div>);
    // }

    render(){
        const header = this.renderHeader();
        return(
            <div className="content-section implementation">
                <Editor headerTemplate={header} style={{height:'320px', width:'650px'}} value={this.props.text}
                    onTextChange={(e) => this.props.EditTextEventHandler(e)}/>
                <p></p>
                {/* <div className="buttons"> */}
                    <Button label="Analyze" /*icon="pi pi-spin pi-spinner"*/
                        onClick={() => {this.props.UploadAndAnalyseTextEventHandler(this.props.text)}}/>
                    
                {/* </div> */}
                <p></p>
                {this.props.render_progress_bar && (!this.props.done) && <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>}
                
                {this.props.done &&
                    <div className="wrapper_for_words">
                        {this.words_renderer()[0]}
                        {this.words_renderer()[1]}
                        {this.words_renderer()[2]}
                        {this.words_renderer()[3]}
                        {this.words_renderer()[4]}
                        {this.words_renderer()[5]}
                        {this.words_renderer()[6]}
                        {this.words_renderer()[7]}
                        {this.words_renderer()[8]}
                        {this.words_renderer()[9]}
                        {/* <div className="ten_words">
                            <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>א</h5>
                            <OverlayPanel name={op+"1"} ref={(el) => this.op = el} showCloseIcon={true}>
                                א
                            </OverlayPanel>
                            <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>ב</h5>
                            <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true}>
                                ב
                            </OverlayPanel>
                            <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>ג</h5>
                            <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true}>
                                ג
                            </OverlayPanel>
                            <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>ד</h5>
                            <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true}>
                                ד
                            </OverlayPanel>
                            <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>ה</h5>
                            <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true}>
                                ה
                            </OverlayPanel>
                            <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>ו</h5>
                            <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true}>
                                ו
                            </OverlayPanel>
                            <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>ז</h5>
                            <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true}>
                                ז
                            </OverlayPanel>
                            <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>ח</h5>
                            <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true}>
                                ח
                            </OverlayPanel>
                            <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>ט</h5>
                            <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true}>
                                ט
                            </OverlayPanel>
                            <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op.toggle(e)}>י</h5>
                            <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true}>
                                י
                            </OverlayPanel>
                        </div> */}
                        {/* <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op0.toggle(e)}>{this.props.answer[this.props.answer.length - 1 - 0].word_in_text}</h5>
                        <OverlayPanel ref={(e) => this.op0 = e}>
                            {this.props.answer[this.props.answer.length - 1 - 0].analysis.toString()}
                        </OverlayPanel>
                        <h5 style={{color: "#2e81ff"}} onClick={(e) => this.op1.toggle(e)}>{this.props.answer[this.props.answer.length - 1 - 1].word_in_text}</h5>
                        <OverlayPanel ref={(e) => this.op1 = e}>
                            {this.props.answer[this.props.answer.length - 1 - 1].analysis.toString()}
                        </OverlayPanel> */}
                    </div>
                }
                
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
        output: state['myEditor'].get('output')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        EditTextEventHandler: (e) => {
            dispatch(MyEditorActions.editTextField(e.textValue.substring(0, e.textValue.length - 1)));
        },
        UploadAndAnalyseTextEventHandler: (text) => {
            dispatch(MyEditorActions.uploadAction(text));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyEditor);
