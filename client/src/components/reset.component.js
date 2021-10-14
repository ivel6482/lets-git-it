import React, { Component } from "react";

export default class Reset extends Component {

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
           
            <form  onSubmit={this.handleSubmit}>
                <h3>RESET PASSWORD</h3>
                
                 <p> Please enter a new password</p>
                 
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
                <button type="submit" className="btn btn-success btn-block" variant="success">Reset Password</button>
              
            </form> 
            
        );
    }
}