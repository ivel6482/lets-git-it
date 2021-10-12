import React, { Component } from "react";



export default class Login extends Component {



    render() {
        return (
           
            <form>
                <h3>LOGIN PAGE</h3>
                
                 <div className="form-group">
                    <label>EMAIL:
                    <input type="email" className="form-control" placeholder="Enter Email"/>
                    
                    </label>
                </div> 
               
                <div className="form-group">
                    <label>PASSWORD:
                        <input type="password" className="form-control" placeholder="Enter password"/>
                      
                    </label>
                </div> 

               <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">REMEMBER ME</label>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-success btn-block" variant="success">LOGIN</button>
                <p className="forgot-password text-right">
                FORGOT<a href="/forgot"> PASSWORD?</a>
                    
                </p>
                <p className="reset-password text-right">
                RESET<a href="/reset"> PASSWORD?</a>
                    
                </p>
                <p className="new-user text-right">
                     NEW USER <a href="/signup">REGISTER HERE</a>
                    {/* NEW USER <a href="/sign-up">REGISTER HERE</a>   */}
                </p> 
            </form> 
            
        );
    }
}

