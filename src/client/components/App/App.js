import React from 'react';
import {connect} from 'react-redux';
import logo from '../../../../public/TestTube.ico';
import './App.css';
import MyEditor from "../MyEditor";
import MyCheckBox from "../MyCheckBox";
import MyAnalyzeButton from "../MyAnalyzeButton";
import MyPopover from "../MyPopover";
import MyFilter from "../MyFilter";
import MyFileUpload from '../MyFileUpload';
import MyDownloadFile from '../MyDownloadFile';
import { Button, Result } from 'antd';

class App extends React.Component {

    render() {
                
        return (
            <div className="App">
                <div className="App-header">
                    <a className="App-link" href="https://www.lit-lab.bgu.ac.il/" target="_blank" rel="noopener noreferrer">
                        <h1 style={{color: "#2e81ff"}}>יותר מדי מילים</h1>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </a>
                </div>
                <MyCheckBox/>
                {this.props.render_text_box &&
                    <MyEditor/>
                }
                {(!this.props.render_text_box) &&
                    <MyFileUpload/>
                }
                <MyFilter/>
                <MyAnalyzeButton/>
                {this.props.done &&
                    <MyDownloadFile/>
                }
                <MyPopover/>
                {this.props.failed &&
                    <Result
                        status="error"
                        title="פעולה נכשלה"
                        extra={[
                            <Button type="primary" onClick={() => window.location.reload(false)}>
                                רענן דף
                            </Button>
                        ]}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        failed: state['myAnalyzeButton'].get('failed'),
        done: state['myAnalyzeButton'].get('done'),
        render_text_box: state['myCheckBox'].get('render_text_box')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

