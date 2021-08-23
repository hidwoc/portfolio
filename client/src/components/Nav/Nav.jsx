import React from "react";
import "./Nav.css"

const Nav = () => {
  return (
    <div id="nav-div">
      <div id="sticky-nav">
        <div id="logo">Heidi Choi</div>
        <nav>
          <a href="#about-div">About Me</a>
          <a href="#skills-div">Skills</a>
          <a href="#projects-div">Projects</a>
          <a href="#contact-div">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
