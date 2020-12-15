import React, { Component, Fragment} from 'react';


export default class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: ""
        }
    }

    writing(e) {    
        this.setState({summary: e.target.value});
    }

 
    render() {
        return(
        <div id={"add"} className={"addIng"}>
            <textarea id={"ingText"} cols="30" rows="10" value={this.state.summary} onChange={this.writing.bind(this)}></textarea>
            <button type="button" name="submit" id="save">Save it</button>
        </div>
        )
    }
};