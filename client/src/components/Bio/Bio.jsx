import React from "react";
import "./Bio.css";

const Bio = ({ heidi }) => {
  return (
    <div id="about">
      <div id="about-left">
        <h1 id="hi">Hi, I'm Heidi</h1>
        <p id="bio">{heidi.bio}</p>
      </div>
      <div id="about-right">
        <img src={heidi.img} width="300" />
      </div>
    </div>
  );
};

export default Bio;
