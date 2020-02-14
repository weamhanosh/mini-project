import React from 'react';
import logo from '../../../../public/TestTube.ico';
import './App.css';
import MyEditor from "../MyEditor";

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
                <MyEditor/>
            </div>
        );
    }
}

export default App;
