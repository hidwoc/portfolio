import React from "react";

const Skills = ({ skills }) => {
  return (
    <div>
      <div className="skills fullstack" id="frontend">
        {skills
          // .filter((skill) => {
          //   skill.category === "Frontend";
          // })
          .map((skill) => (
            <div key={skill.id}>
              <img src={skill.icon} width="100"/>
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
