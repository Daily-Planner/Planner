import React, { Component } from "react";

export default class login_register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value2: '',
      click: false 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  //handles the value of the input text from  username and name 
  handleChange(event) {

    this.setState({value: event.target.value});

  }
  //handles the value of the password inputs
  handleChange(event) {

    this.setState({value2: event.target.value2});

  }

  //once submit is hit the alert will pop up from the Login
  handleSubmit(event) {

    alert('Logging In ' + this.state.value);
    event.preventDefault();

  }

  //once the submit button is hit from the signUp the alert goes off
  handleSubmit(event) {

    alert('Thank you for signing Up ' + this.state.value);
    event.preventDefault();

  }

  login() {
    alert (
    'Welcome Back ' + this.state.value )
    }

  signUp() {
    alert (
      'Thank you ' + this.state.value + ' for signing up')
      }
    
  
  render() {

    // if i click the login button the login form pops up
    //else
    //the signup button pops up then the signup form pops up
    // after the form is filled then we move to another componet 

    <div id = 'loginBox'>
        
      <button id= 'login' onClick = {this.login} > Login </button>

      <button id= 'signUp' onClick= {this.signUp}> Sign up </button>

    </div>
    

    return (
      <div id= 'form container'>
        <form onSubmit = {this.handleSubmit}>
        <label>
          Name:
          <input type= 'text' value = {this.state.value}  onChange= {this.handleChange}/>
        </label>
          <input type= 'submit' value = "Submit"/>
         <label>
          Password:
          <input type = 'text' value = {this.state.value2} onChange= {this.handleChange} />
        </label>
          <input type = 'submit' value= 'Submit'/>
      </form>
    </div>
      
  
  

    );
  }


}
