import React, { Component } from "react";
import "./exercise2.css"
 
class Exercise2 extends Component {
  render() {
    return (
      <div>
        <h2> Responsive Layout</h2>

      <div className ="responsive-layout">
       <div className="header" id="top"> Header</div>
       <div className="Hero" id="hero"> Hero</div>

       <div id="wrapper">
       <div className="Content" id = "content1"> Content</div>
       <div className="Sidebar" id="sidebar" > Sidebar</div>
       </div>
       <div className="footer" id="footer"> Footer</div>
       </div>
      </div>
    );
  } 
}
 
export default Exercise2;