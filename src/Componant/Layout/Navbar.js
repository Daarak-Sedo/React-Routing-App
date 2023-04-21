import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">

      <ul >

        <li >
          <NavLink  exact to="/" className="nav-link">  Home </NavLink>
        </li>
        <li >
          <NavLink  exact to="/About" className="nav-link"> About </NavLink>
        </li>
        <li >
          <NavLink  exact to="/Contact" className="nav-link"> Contact </NavLink>
        </li>
        <li >
          <NavLink  exact to="/Carrier" className="nav-link"> Carrier </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Navbar;
