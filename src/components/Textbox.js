import React, { Component, Fragment} from 'react';
import { render } from 'react-dom';



export default class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: null
        }
    }
    
    
    render() {
        
        <div id={"add"} className={"addIng"}>
        <textarea id={"ingText"} cols="30" rows="10" value={this.state.summary}>
            Please write in here
        </textarea>
    </div>
}
};