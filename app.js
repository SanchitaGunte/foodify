import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="logo-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjttAIQ8vzTTDemBf0J7WDgaC1vRwn1Jv2w&s"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
      </div>
      <div className="offer">
        <li>
            offer - 25%
        </li>
      </div>
    </div>
  );
};
 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>)