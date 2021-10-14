import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default class Nav extends Component {
     constructor(){
      super();
       this.state={
        show:true,
     }
  }

 
 
  render() {
      
        return (
     
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
           <Link className="navbar-brand nav-link" href="/home">GetHitList</Link>
           <button className=" btn btn-outline-success navbar-toggler custom-toggler border border-info" 
            onClick={ ()=> {this.setState({ show: !this.state.show})} }>
              {this.state.show ? <MenuIcon /> : <CloseIcon />}
            </button>
           
            <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
             
             
              <ul className="navbar-nav ms-auto ">
              
               <li className="nav-item">
                  <Link className="nav-link"to={"/"}>HOME</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link" to={"/dashboard"}>DASHBOARD</Link>
               </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/addlist"}>ADDLIST</Link>
                </li>
               <li className="nav-item">
                 <Link className="nav-link" to={"/about"}>ABOUT</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" to={"/contact"}>CONTACT</Link>
               </li> 
               <li className="nav-item">
                  <Link className="nav-link" to={"/forgot"}>FORGOT</Link>
                </li> 
                <li className="nav-item">
                  <Link className="nav-link"  to={"/reset"}>RESET</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>SIGNUP</Link>
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>LOGIN</Link>
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" to={"/logout"}>LOGOUT</Link>
                </li> 
              </ul>
           </div>
          </div>
        </nav>  
       
        );
    }
}







// Code With Yd Referred