import React from "react";
import "./Bio.css";

const Bio = ({ heidi, admin }) => {
  return (
    <div id="about-div">
      <div id="about-left">
        <h1 id="hi">Hi, I'm Heidi</h1>
        <p id="bio">{heidi.bio}</p>
      </div>
      <div id="about-right">
        <img src={heidi.img} alt="Heidi Choi" />
      </div>
    </div>
  );
};

export default Bio;
