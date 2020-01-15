import React from 'react';
// import {connect} from 'react-redux';
// import ArchiveActions from '../Archive/actions';
// import {Button} from 'primereact/button';

import './MyCheckbox.scss';
// import {Growl} from "primereact/growl";
// import {Checkbox} from "primereact/checkbox";
import {MultiSelect} from "primereact/multiselect";

class MyCheckbox extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         checked: false,
    //         options: []
    //     };
    //     this.onOptionChange = this.onOptionChange.bind(this);
    // }
    // onOptionChange(option) {
    //     let selectedOptions = [...this.state.options];
    //
    //     if(option.checked)
    //         selectedOptions.push(option.value);
    //     else
    //         selectedOptions.splice(selectedOptions.indexOf(option.value), 1);
    //     this.setState({options: selectedOptions});
    // }
    //
    // render() {
    //     return (
    //         <div className="Checkbox">
    //             <div className="p-col-12">
    //                 <Checkbox inputId="cb1" value="פעלים" onChange={this.onOptionChange} checked={this.state.options.indexOf('פעלים') !== -1}/>
    //                 <label htmlFor="cb1" className="p-checkbox-label" style={{color:"#2e81ff"}}>פעלים</label>
    //             </div>
    //             <div className="p-col-12">
    //                 <Checkbox inputId="cb2" value="שמות עצם" onChange={this.onOptionChange} checked={this.state.options.indexOf('שמות עצם') !== -1}/>
    //                 <label htmlFor="cb2" className="p-checkbox-label" style={{color:"#2e81ff"}}>שמות עצם</label>
    //             </div>
    //             <div className="p-col-12">
    //                 <Checkbox inputId="cb3" value="תארים" onChange={this.onOptionChange} checked={this.state.options.indexOf('תארים') !== -1}/>
    //                 <label htmlFor="cb3" className="p-checkbox-label" style={{color:"#2e81ff"}}>תארים</label>
    //             </div>
    //         </div>
    //     );
    // }
    constructor() {
        super();
        this.state = {
            words: []
        };
    }

    render() {
        const analysis = [
            {label: 'פעלים', value: 'פעלים'},
            {label: 'שמות עצם', value: 'שמות עצם'},
            {label: 'תארים', value: 'תארים'}
        ];
        return (
            <div>
                <div className="content-section implementation multiselect">
                    <MultiSelect value={this.state.words} options={analysis}
                                 onChange={(e) => this.setState({words: e.value})} style={{minWidth: '12em'}}
                                 filter={true} placeholder={"Choose"}/>
                </div>
            </div>
        )
    }
}

export default MyCheckbox;

// const mapStateToProps = (state, props) => {
//     return {
//         image: state['gallery'].getIn(['images', props.id]),
//         id: props.id,
//         size: state['app'].get('size'),
//         activeFilter: state['gallery'].getIn(['activeFilter', props.id]),
//         galleryWidth: state['gallery'].get('galleryWidth')
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onClickCloneEventHandler: (idx) => {
//             dispatch(ArchiveActions.cloneAction(idx))
//         },
//         onClickApplyFilterEventHandler: (idx) => {
//             dispatch(ArchiveActions.applyFilterAction(idx))
//         },
//         onClickDeleteEventHandler: (idx) => {
//             dispatch(ArchiveActions.deleteAction(idx))
//         },
//         onClickOpenLightBoxEventHandler: (idx) => {
//             dispatch(ArchiveActions.setActiveImage(idx))
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(File);
