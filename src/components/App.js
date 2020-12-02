import React, { Component } from "react";

export default class login_register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value2: ''
    };
    this.handleChange= this.handleChange.bind(this);
    this.handleChange2= this.handleChange2.bind(this);
    // this.handleSubmitL = this.handleSubmitL.bind(this);
    // this.handleSubmitS = this.handleSubmitS.bind(this);
  }

  handleChange(event) {

    this.setState({value: event.target.value});

  }
  handleChange2(event) {

    this.setState({value2: event.target.value2});

  }

  handleSubmitL(event) {

    alert('Logging In ' + this.state.value);
    event.preventDefault();

  }

  handleSubmitS(event) {

    alert('Thank you for signing Up ' + this.state.value);
    event.preventDefault();

  }

  login() {
    <form onSubmit = {this.handleSubmitL}>
      <label>
          UserName:
            <input type="text" value = {this.state.value} onChange={this.handleChange}/>
      </label>
            <input type="submit" value="Submit"/>
      <label>
          Password:
            <input type = 'text' value = {this.state.value2} onChange={this.handleChange2}/>
      </label>
            <input type = 'submit' value2= "Submit"/>
    </form>
    
    }

  signUp() {
    <form onSubmit = {this.handleSubmitS}>
    
    <label>
        Name:
        <input type= 'text' value = {this.state.value}  onChange= {this.handleChange}/>
    </label>
        <input type= 'submit' value = "Submit"/>
    <label>
        Password:
        <input type = 'text' value = {this.state.value2} onchange= {this.handleChange} />
    </label>
        <input type = 'submit' value= 'Submit'/>
    </form>


  }

  
  
  render() {


    return (
      <div id = 'loginBox'>
          
        <button id= 'login' onClick = {this.login}> Login </button>

        <button id= 'signUp' onClick= {this.signUp}> Sign up </button>

      </div>


    );
  }


}
