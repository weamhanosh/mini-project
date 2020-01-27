import React from 'react';
// import {connect} from 'react-redux';
// import ArchiveActions from '../Archive/actions';
// import {Button} from 'primereact/button';
import MyEditorActions from "./actions";
import './MyEditor.scss';
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
import {ScrollPanel} from "primereact/scrollpanel";
import {OverlayPanel} from "primereact/overlaypanel";
import {ProgressBar} from 'primereact/progressbar';
import {connect} from 'react-redux';

class MyEditor extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         text : ''
    //     };
    // }
    
    renderHeader() {
        return (
            <span className="ql-formats">
                <button icon="pi pi-align-right" className="ql-align" aria-label="Alignment" value="right"></button>
            </span>
        );
    }

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
                    <ScrollPanel style={{width: '100%', height: '300px'}} className="custombar">
                        <div style={{padding: '1em', lineHeight: '1.5', width: '600px', color: "#2e81ff"}}>
                                {/* <Button style={{color: "#2e81ff"}} onClick={() => this.props.ShowOverlay} label ="יותר מדי מילים"/> */}
                                {this.props.output}
                        </div>
                    </ScrollPanel>
                }
                {/* {this.props.overlay &&
                    <OverlayPanel ref={(el) => this.op = el} id="overlay_panel">
                        {this.props.output}
                    </OverlayPanel>
                } */}
            </div>
        );
    }
}

// export default File;

const mapStateToProps = (state) => {
    return {
        render_progress_bar: state['myEditor'].get('render_progress_bar'),
        text: state['myEditor'].get('text'),
        done: state['myEditor'].get('done'),
        output: state['myEditor'].get('output'),
        overlay: state['myEditor'].get('overlay')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        EditTextEventHandler: (e) => {
            dispatch(MyEditorActions.editTextField(e.textValue.substring(0, e.textValue.length - 1)));
        },
        UploadAndAnalyseTextEventHandler: (text) => {
            dispatch(MyEditorActions.uploadAction(text));
        },
        ShowOverlay: () => {
            dispatch(MyEditorActions.showOverlay());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyEditor);
