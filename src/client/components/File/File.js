import React from 'react';
// import {connect} from 'react-redux';
// import ArchiveActions from '../Archive/actions';
// import {Button} from 'primereact/button';
import FileActions from "./actions";
import './File.scss';
import {FileUpload} from "primereact/fileupload";
import {Growl} from "primereact/growl";
import {connect} from 'react-redux';

class File extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.onUpload = this.onUpload.bind(this);
    // }
    // onUpload() {
    //     this.growl.show({severity: 'info', summary: 'File Uploaded', detail: 'Starting analysis'});
    //
    // }

    render() {
        return (
            <div className="File-Upload">
                <FileUpload name="files[]" customUpload={true}
                            uploadHandler={this.props.uploadEventHandler}
                            multiple={false} accept=".txt" maxFileSize={1000000}
                            chooseLabel={"בחר קבצים"} uploadLabel={"העלה"} cancelLabel={"ביטול"}/>
                <Growl ref={el => this.growl = el}/>
            </div>
        );
    }
}

// export default File;

const mapStateToProps = (state) => {
    return {
        // image: state['gallery'].getIn(['images', props.id]),
        // id: props.id,
        // size: state['app'].get('size'),
        // activeFilter: state['gallery'].getIn(['activeFilter', props.id]),
        // galleryWidth: state['gallery'].get('galleryWidth')
        upload: state['file'].get('uploaded'),
        done: state['file'].get('done')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        uploadEventHandler: () => {
            dispatch(FileActions.updateUploadedField(true /* ADD INPUT FILE OR TEXT */))
        },
        // onClickApplyFilterEventHandler: (idx) => {
        //     dispatch(ArchiveActions.applyFilterAction(idx))
        // },
        // onClickDeleteEventHandler: (idx) => {
        //     dispatch(ArchiveActions.deleteAction(idx))
        // },
        // onClickOpenLightBoxEventHandler: (idx) => {
        //     dispatch(ArchiveActions.setActiveImage(idx))
        // }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(File);
