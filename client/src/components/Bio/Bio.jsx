import React from "react";

const Bio = ({ heidi }) => {
  return (
    <div>
      <div>
        <h1>Hi, I'm Heidi</h1>
        <p>{heidi.bio}</p>
      </div>
      <img src={heidi.img} width="300"/>
    </div>
  );
};

export default Bio;
