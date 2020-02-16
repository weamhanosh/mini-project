import React from 'react';
import MyFileUploadActions from "./actions";
import {connect} from 'react-redux';

import './MyFileUpload.scss';

import { Upload, Icon, message } from 'antd';
const { Dragger } = Upload;

class MyFileUpload extends React.Component {
    
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
                <div className="file_upload"  style={{direction: 'ltr'}}>
                    <Dragger {...properties}>
                        <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger>
                </div>
                <p></p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // text: state['MyFileUpload'].get('text')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        EditTextEventHandler: (e) => {
            e.persist();
            dispatch(MyFileUploadActions.editTextField(e.target.value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyFileUpload);
