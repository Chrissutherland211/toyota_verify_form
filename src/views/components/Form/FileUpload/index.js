import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
 
class DropzoneAreaExample extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
      <DropzoneArea 
        onChange={this.handleChange.bind(this)}
        dropzoneText = "Drag and Drop an file here or click"
        maxFileSize={1300000}
        />
    )  
  }
} 
 
export default DropzoneAreaExample;