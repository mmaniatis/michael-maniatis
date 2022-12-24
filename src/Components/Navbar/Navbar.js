import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar= () =>{
  return (
  <div className="mid">
    <ul className="navbar">
        <li>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        </li>
    </ul>
  </div>
  );
}

export default Navbar;