import React from 'react'
// import "./App.css";
import "./zomato.css"



function Zomato() {
  return (
    <div>
      <div className="main">
      
        <div className="main-nav">
          <div className="logo">
            <h2>ZOMATO</h2>
          </div>
          <div className="menu-link">
            <ul>
              <tr><th><button class="login">login</button></th></tr>
              <tr><th><button class="signup">signup</button></th></tr>
              {/* <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">SearchBar</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Signup</a>
              </li> */}
            </ul>
        <table><div className="inputdiv">
        <input  class="input2"type="text" placeholder="Search...."/>
        <button class="search">Search </button> </div></table>

          
  
      </div>

        </div>
      </div>
     
    </div>
   
  )
}

export default Zomato
