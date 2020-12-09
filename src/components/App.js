import React, { Component } from "react";

export default class login_register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value2: '',
      onClick: 'home'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

    this.handleSubmitS = this.handleSubmitS.bind(this);
    this.handleSubmitL = this.handleSubmitL.bind(this);

  }
 
  //handles the value of the input text from  username and name 
  handleChange(event) {

    this.setState({value: event.target.value});

  }
  //handles the value of the password inputs
  handleChange2(event) {

    this.setState({value2: event.target.value});

  }

  //once submit is hit the alert will pop up from the Login
  handleSubmitL(event) {

    alert('Welcome back ' + this.state.value);
    event.preventDefault();

  }

  //once the submit button is hit from the signUp the alert goes off
  handleSubmitS(event) {

    alert('Thank you for signing up ' + this.state.value);
    event.preventDefault();

  }

  login() {
    
      return (

        <div id= 'form container'>
        <form onSubmit = {this.handleSubmitL}>
        <label>
          Name:
          <input type= 'text' value = {this.state.value}  onChange= {this.handleChange}/>
        </label>
          <input type= 'submit' value = "Submit"/>
         <label>
          Password:
          <input type = 'text' value = {this.state.value2} onChange= {this.handleChange2} />
        </label>
          <input type = 'submit' value= 'Submit'/>
      </form>
    </div>


      )
    }
    

  signUp() {
    
    
      return(

        <div id= 'form container'>
        <form onSubmit = {this.handleSubmitS}>
        <label>
          Name:
          <input type= 'text' value = {this.state.value}  onChange= {this.handleChange}/>
        </label>
          <input type= 'submit' value = "Submit"/>
         <label>
          Password:
          <input type = 'text' value = {this.state.value2} onChange= {this.handleChange2} />
        </label>
          <input type = 'submit' value= 'Submit'/>
      </form>
    </div>
      )
    


      }
    
  
  render() {

    // if i click the login button the login form pops up
    if(this.state.onClick === 'home') {
      return (
        
        <div id = 'loginBox'>
          
        <button id= 'login' onClick = {() => this.setState({onClick:'login'})} > Login </button>
        
        <button id= 'signUp' onClick= {() => this.setState({onClick:'signup'})}> Sign up </button>
        
        </div>
        );
      
    } else if (this.state.onClick === 'signup') {
       return this.signUp();
    } else if (this.state.onClick === 'login') {
      return this.login();
    } else {
      return (
        <div>its not working
        </div>
      )
    }
    //else
    //the signup button pops up then the signup form pops up
    // after the form is filled then we move to another componet 
    
  

  }


}
