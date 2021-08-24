import React from "react";
import "./Skills.css"

const Skills = ({ skills }) => {
  return (
    <div id="skills-div">
      <div className="section-header">Skills</div>
      <div className="skills fullstack" id="frontend">
        {skills
          // .filter((skill) => {
          //   skill.category === "Frontend";
          // })
          .map((skill) => (
            <div key={skill.id}>
              <img src={skill.icon} width="75"/>
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
      <div className="skills fullstack" id="backend"></div>
      <div className="skills" id="other"></div>
    </div>
  );
};

export default Skills;
