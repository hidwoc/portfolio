import React from "react";
import "./Nav.css"

const Nav = () => {
  return (
    <div id="nav-div">
      <div id="logo">Heidi Choi</div>
      <nav>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Nav;
