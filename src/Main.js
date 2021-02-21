import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Exercise1 from "./exercise1.js";
import Exercise2 from "./exercise2.js";
import Exercise3 from "./exercise3.js";

// import Exercise4 from "./exercise4";


class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Lalit's Workbook</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/exercise1">Exercise 1</NavLink></li>
            <li><NavLink to="/exercise2">Exercise 2</NavLink></li>
            <li><NavLink to="/exercise3">Exercise 3</NavLink></li>
            

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/exercise1" component={Exercise1}/>
            <Route path="/exercise2" component={Exercise2}/>
            <Route path="/exercise3" component={Exercise3}/>
        
           
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;
