import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-div">
      <div>Heidi Choi</div>
      <nav>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
