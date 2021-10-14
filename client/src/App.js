
import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import AddList from "./components/addlist.component";
import About from "./components/about.component";
import Contact from "./components/contact.component";
import Nav from "./components/nav.component";
import Reset from "./components/reset.component";
import Forgot from "./components/forgot.component";
import Dashboard from "./components/dashboard.component";
import Logout from "./components/logout.component";



export default class  App extends Component {
  
  
   
   render() {
 
   return (
     <Router>
      <div className="App">
       
        <Nav/>
        
      <div className="auth-wrapper">
      <div className="auth-inner">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path="/addlist" component={AddList} />
          <Route eaxct path="/about" component={About} />
          <Route exact path="/contact" component={Contact} /> 
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgot" component={Forgot} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
        </div>
      </div>
     </div>
    </Router>

    );
  }

}





   



