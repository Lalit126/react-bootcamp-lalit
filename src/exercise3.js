import React, { Component } from "react";
import './style.scss';
import './exercise3.css';
 
class Exercise3 extends Component {

  constructor(props) {
    super(props);

    if(JSON.parse(localStorage.getItem('DARK_MODE')) === true) {
      document.body.classList.add('dark-mode');
    }

    this.state = {
      darkMode: JSON.parse(localStorage.getItem('DARK_MODE'))
    }

    this.handleModeChange = this.handleModeChange.bind(this);
  }

  handleModeChange() {
    if(!this.state.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    this.setState({
      darkMode: (!this.state.darkMode)
    });
    localStorage.setItem('DARK_MODE', !this.state.darkMode);
  }

  render() {
    return (
      <div>
        <h2> Let's try Dark Mode</h2>
        <p> Click on the button below to see Magic.....
        </p>
     
        <label class="switch">
  <input type="checkbox" onClick={this.handleModeChange}></input>
  <span class="slider round"></span>
</label>

      </div>
    );
  }
}
 
export default Exercise3;