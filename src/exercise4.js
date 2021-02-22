import React, { Component } from "react";
import "./exercise4.css"
 
class Exercise4 extends Component {
  render() {
    return (
      <div>
        <h2> Stock Stimulator</h2>
        <br></br>
       
        <div className="button-group">

        <div className ="button-group-1"> Operate:
        <button> START</button>
        <button> RESET</button>
        </div>

        <div className ="button-group-2"> Speed :
        <button> 0.5PX </button>
        <button> 5 PX </button>
        <button> 10 PX</button>
        </div>
        </div>
<br></br>
<br></br>

<h3> Status : started</h3> <br></br>

        <div class="flex-container">
      
         <div>Replay Clock<p>09:30:23</p></div>
         <div> Event<p>101</p></div>
         <div>Name <p>NBBS</p></div>  
         <div>Exchange 1<p>P</p></div>
         <div>Price 1 <p>120.78</p></div>
         <div>Share 1<p> 100</p></div>  
         <div>Exchange 1<p>159.76</p></div>
         <div>Price 2<p>101</p></div>
         <div>Share 2<p>129</p></div>  
         <div>Exchange 2<p>U</p></div>
        </div>

        <h3>-------- Order Book ---------</h3> 


<div className ="table-group">
<div className="table-1">
<h3> Bids </h3>
    <table id="table">
  <tr>
    <th>Age</th>
    <th>Exchange</th>
    <th>Shares</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>1.7</td>
    <td>Q</td>
    <td>129</td>
    <td>178.32</td>
  </tr>
  <tr>
  <td>1.7</td>
    <td>Q</td>
    <td>129</td>
    <td>178.32</td>
  </tr>
  <tr>
  <td>1.7</td>
    <td>Q</td>
    <td>129</td>
    <td>178.32</td>
  </tr>
  <tr>
  <td>1.7</td>
    <td>Q</td>
    <td>129</td>
    <td>178.32</td>
  </tr>
  <tr>
  <td>1.7</td>
    <td>Q</td>
    <td>129</td>
    <td>178.32</td>
  </tr>
  <tr>
  <td>1.7</td>
    <td>Q</td>
    <td>129</td>
    <td>178.32</td>
  </tr>
  <tr>
    <td>2.9</td>
    <td>T</td>
    <td>322</td>
    <td>201.78</td>
  </tr>
  <tr>
  <td>2.9</td>
    <td>T</td>
    <td>322</td>
    <td>201.78</td>
  </tr>
  <tr>
  <td>2.9</td>
    <td>T</td>
    <td>322</td>
    <td>201.78</td>
  </tr>
  <tr>
  <td>2.9</td>
    <td>T</td>
    <td>322</td>
    <td>201.78</td>
  </tr>
</table>
</div>


<div className ="table-2">
    <h3> Asks </h3>
<table id="table">
  <tr>
    <th>Price</th>
    <th>Shares</th>
    <th>Exchange</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>129.10</td>
    <td>100</td>
    <td>0.07</td>
    <td>H</td>
  </tr>
  <tr>
  <td>129.10</td>
    <td>100</td>
    <td>0.07</td>
    <td>H</td>
  </tr>
  <tr>
  <td>129.10</td>
    <td>100</td>
    <td>0.07</td>
    <td>H</td>
  </tr>
  <tr>
  <td>129.10</td>
    <td>100</td>
    <td>0.07</td>
    <td>H</td>
  </tr>
  <tr>
  <td>129.10</td>
    <td>100</td>
    <td>0.07</td>
    <td>H</td>
  </tr>
  <tr>
  <td>129.10</td>
    <td>100</td>
    <td>0.07</td>
    <td>H</td>
  </tr>
  <tr>
  <td>129.10</td>
    <td>100</td>
    <td>0.07</td>
    <td>H</td>
  </tr>
  <tr>
  <td>129.10</td>
    <td>100</td>
    <td>0.07</td>
    <td>H</td>
  </tr>
  <tr>
  <td>129.10</td>
    <td>100</td>
    <td>0.07</td>
    <td>H</td>
  </tr>
  <tr>
  <td>129.10</td>
    <td>100</td>
    <td>0.07</td>
    <td>H</td>
  </tr>
</table>
</div>
</div>


        
      </div>
    );
  } 
}
 
export default Exercise4;