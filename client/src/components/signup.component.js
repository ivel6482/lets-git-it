
import React, { Component } from "react";

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
         
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
         
      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            this.setState({input:input});
      
            alert('Demo Form is submited');
        }
      }
      
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
      
          if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
          }

          if (typeof input["name"] !== "undefined") {
            if (!input["name"].match(/^[a-zA-Z ]*$/)) {
              isValid = false;
              errors["name"] = "*Please enter alphabet characters only.";
            }
          }
      
          if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }
      
          if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
      
          if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
          }

          if (typeof input["password"] !== "undefined") {
            if (!input["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
              isValid = false;
              errors["password"] = "*Please enter secure and strong password.";
            }
          }
      
          if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
          }
      
          if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
              
            if (input["password"] !== input["confirm_password"]) {
              isValid = false;
              errors["password"] = "Passwords don't match.";
            }
          } 
      
          this.setState({
            errors: errors
          });
      
          return isValid;
      }
    
    render() {
        return (
            <div>
                <h1>SIGN UP</h1>
                <form onSubmit={this.handleSubmit}>
                

                <div className="form-group">
                    <label for="name">NAME</label>
                    <input type="text" name="name"  id="name"value={this.state.input.name}
                     onChange={this.handleChange} className="form-control" placeholder="Full name" />
                  
                    <div className="text-danger">{this.state.errors.name}</div>
                 </div>

                <div className="form-group">
                    <label for="email">EMAIL</label>
                    <input type="email"  id="email" name="email"  value={this.state.input.email}
                     onChange={this.handleChange}className="form-control" placeholder="Enter email"/>
                    
                    <div className="text-danger">{this.state.errors.email}</div>
                </div>

                
                <div className="form-group">
                    <label for="password">PASSWORD</label>
                    <input type="password"id="password"  name="password" value={this.state.input.password}
                     onChange={this.handleChange} className="form-control" placeholder="Enter password"/>
                    
                    
                    <div className="text-danger">{this.state.errors.password}</div>
                </div>

                <div className="form-group">
                    <label>CONFIRM PASSWORD</label>
                    <input type="password" id="confirm_password" name="confirm_password" value={this.state.input.confirm_password}
                    onChange={this.handleChange} className="form-control" placeholder="Confirm password"/>
                    
                    <div className="text-danger">{this.state.errors.confirm_password}</div>
             
                </div>
               
               
                <br/>
                <button type="submit" value="Submit" className="btn btn-success btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    ALREADY REGISTERED?<a href="/login">LOGIN</a>
                </p>
            </form>
            </div>
        );
    }
}

// https://www.skptricks.com/2018/06/simple-form-validation-in-reactjs-example.html
// https://www.itsolutionstuff.com/post/react-form-validation-tutorial-exampleexample.html