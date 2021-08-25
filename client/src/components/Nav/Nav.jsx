import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ admin }) => {
  const adminOptions = <Link to="/inbox">Inbox</Link>;

  return (
    <div id="nav-div">
      <div id="sticky-nav">
        <div id="logo">Heidi Choi</div>
        <nav>
          <a href="#about-div">About Me</a>
          <a href="#skills-div">Skills</a>
          <a href="#projects-div">Projects</a>
          <a href="#contact-div">Contact</a>
          {admin ? adminOptions : null}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
