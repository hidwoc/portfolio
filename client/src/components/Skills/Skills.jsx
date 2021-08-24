import React from "react";
import "./Skills.css"

const Skills = ({ skills }) => {
  return (
    <div id="skills-div">
      <h2 className="section-header">Skills</h2>
      <div className="skills fullstack" id="frontend">
        <h4>Frontend</h4>
        {skills
          // .filter((skill) => {
          //   skill.category === "Frontend";
          // })
          .map((skill) => (
            <div key={skill.id} className="skill-icon">
              <img src={skill.icon} width="70"/>
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
      <div className="skills fullstack" id="backend"><h4>Backend</h4></div>
      <div className="skills" id="other"><h4>Other</h4></div>
    </div>
  );
};

export default Skills;
