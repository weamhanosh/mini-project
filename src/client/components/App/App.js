import React from 'react';
// import logo from 'src/logo.svg';
import './App.css';
import File from "../File/index";
// import {Button} from "primereact/button";
// import {FileUpload} from "primereact/fileupload";
// import {Growl} from "primereact/growl";
import {ScrollPanel} from "primereact/scrollpanel";
import MyCheckbox from "../Checkbox";
// import {Button} from "primereact/button";

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.onClickResetOptionsEventHandler = this.onClickResetOptionsEventHandler.bind(this);
    // }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <a className="App-link" href="https://www.lit-lab.bgu.ac.il/" target="_blank"
                       rel="noopener noreferrer">
                        <h1 style={{color: "#2e81ff"}}>יותר מדי מילים</h1>
                        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    </a>
                </div>
                <File/>
                <MyCheckbox/>
                {/*<Button*/}
                {/*    icon="pi pi-replay"*/}
                {/*    onClick={() => this.props.onClickResetOptionsEventHandler}*/}
                {/*/>*/}
                <div className="output">
                    <ScrollPanel style={{width: '100%', height: '300px'}} className="custombar">
                        <div style={{padding: '1em', lineHeight: '1.5', width: '600px', color: "#2e81ff"}}>
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                            son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                            Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                            against the good of the family.
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                            son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                            life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                            and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                            family.
                        </div>
                    </ScrollPanel>
                </div>
            </div>
        );
    }
}

export default App;
