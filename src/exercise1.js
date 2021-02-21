import React, { Component } from "react";
import "./exercise1.css" 

class Exercise1 extends Component {
  render() {
    return (
      
      <div>
        <h2>Student Details Form</h2>
        <div>

      <form>
      <div>
        <label for ="fname"> First Name : </label>
        <input type="text" id="fname" name="fname"></input> <br></br>
        <label for ="lname"> Last Name : </label>
        <input type="text" id="lname" name="lname"></input><br></br>
      </div>

      <div>
        <label for= "radio" name="gender"> Gender : </label>
        <input type="radio" id="male" name="gender" value="male"></input> 
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female"></input>
        <label for="female">Female</label><br></br>
      </div>

      <div>
        <label for= "email" > Email Address :  </label>
        <input type="email" id="email" name="email"></input>  <br></br>
      </div>



      <div> 
        <label for= "file" name="ChooseFile"> Upload Your Resume : </label>
        <input type="file" name="ChooseFile" id="file"></input>  <br></br>
      </div>  

       <div>
        <label for="degree">Choose your Degree Program : </label>
        <select name="degree" id="degree">
        <option value="SE"> Software Engineering</option>
        <option value="CS">Computer Science</option>
        <option value="HCI"> Human Computer Interaction</option>
        <option value="Other">Other</option>
        </select><br></br>
      </div>

      <div>
        <label for="date" name="graduation"> Graduation Date :</label>
        <input type="date" id ="date"></input><br></br>
      </div>

      <input type="submit" value ="submit"></input>

      </form>

      </div>
      </div>
    );
  }
}
 
export default Exercise1;