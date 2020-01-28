import React from 'react';
import logo from '../../../../public/TestTube.ico';
import './App.css';
// import File from "../File/index";
// import {Button} from "primereact/button";
// import {FileUpload} from "primereact/fileupload";
// import {Growl} from "primereact/growl";
import {ScrollPanel} from "primereact/scrollpanel";
import MyCheckbox from "../Checkbox";
import MyEditor from "../MyEditor";
// import {Button} from "primereact/button";
import { Popover, Button } from 'antd';


class App extends React.Component {   

    render() {
        const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );
        return (
          
            <div>
              <Popover content={content} title="Title" trigger="hover">
                <Button>Hover me</Button>
              </Popover>
              <Popover content={content} title="Title" trigger="focus">
                <Button>Focus me</Button>
              </Popover>
              <Popover content={content} title="Title" trigger="click">
                <Button>Click me</Button>
              </Popover>
            </div>)
    }
}

export default App;
