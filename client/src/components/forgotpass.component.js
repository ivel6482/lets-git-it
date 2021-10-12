import React, { Component } from "react";

export default class ForgotPass extends Component {

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
           
            input["email"] = "";
        
        
            this.setState({input:input});
      
            alert('Demo Form is submited');
        }
      }


      validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;

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

          this.setState({
            errors: errors
          });
      
          return isValid;
      }
    

    render() {
        return (
           
            <form onSubmit={this.handleSubmit} >
                <h3>FORGOT PASSWORD</h3>
                <p>Enter your email to send a link</p>
                <div className="form-group">
                    <label for="email">EMAIL</label>
                    <input type="email"  id="email" name="email"  value={this.state.input.email}
                     onChange={this.handleChange}className="form-control" placeholder="Enter email"/>
                    
                    <div className="text-danger">{this.state.errors.email}</div>
                </div>
                
                
                <br/>
                <button type="submit" className="btn btn-success btn-block" variant="success">Send Reset Link</button>
              
            </form> 
            
        );
    }
}
