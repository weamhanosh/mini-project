import React from 'react';
import MyFileUploadActions from "./actions";
import {connect} from 'react-redux';

import {FileUpload} from 'primereact/fileupload'

import './MyFileUpload.scss';

// import { Upload, Icon, message } from 'antd';
// const { Dragger } = Upload;

class MyFileUpload extends React.Component {
    
    render(){
        // function beforeUpload(file) {
        //     const isTxt = file.type === 'text/plain';
        //     if (!isTxt) {
        //       message.error('You can only upload .txt file!');
        //     }
        //     return isTxt;
        // }

        // const properties = {
        //     name: 'file',
        //     accept: ".txt",
        //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        //     beforeUpload: beforeUpload,
        //     onChange(info) {
        //         console.log(info)
        //         const { status } = info.file;
        //         if (status !== 'uploading') {
        //             // console.log(info.file, info.fileList);
        //         }
        //         if (status === 'done') {
        //             message.success(`${info.file.name} file uploaded successfully.`);
        //         } else if (status === 'error') {
        //             message.error(`${info.file.name} file upload failed.`);
        //         }
        //     }
        // };

        

        return(
            <div className="content-section implementation" style={{direction: 'rtl'}}>
                <div className="file_upload"  style={{direction: 'ltr'}}>
                    {/* <Dragger {...properties}>
                        <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger> */}
                    {/* <input type="file" name="file" onChange={(e) => this.props.UploadFileEventHandler(e)} /> */}
                    <p></p>
                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept=".txt" maxFileSize={1000000} auto={true} onUpload={(e) => this.props.onUpload(e)} />
                </div>
                <p></p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        text_file: state['myFileUpload'].get('text_file')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpload(event) {
            console.log("this is the event:")
            console.log(event)
            console.log("end")
            // this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
        },
        // UploadFileEventHandler: (e) => {
            // e.preventDefault();
            // let files = e.target.files;
            // let reader = new FileReader();
            // // reader.readAsDataURL(files[0]);
            // // reader.onload = (e) => {
            //     //     const text = e.target.result;
            //     //     console.log(text);
            //     // };
            // reader.readAsText(e.target.files[0]);

            // console.log(e.target.files[0])
            // e.persist();
            // dispatch(MyFileUploadActions.editTextField(e.target.value));
        // }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyFileUpload);
