import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar= () =>{
  return (
  <div className="navbar">

    <ul className="navbar-header">
      <li className="navbar-item"><Link to="/"><span className="text">Michael Man</span></Link></li>
    </ul>
    <ul className="navbar-links">
      <li className="navbar-item"><Link to="/"><button className="button">Home</button></Link></li>
      <li className="navbar-item"><Link to="/contact"><button className="button">Contact Me</button></Link></li>
    </ul>
  </div>
  
  );
}

export default Navbar;