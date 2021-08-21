import React from "react";

const Bio = ({ heidi }) => {
  return (
    <div>
      <h1>Hi, I'm Heidi</h1>
      <p>{heidi.bio}</p>
    </div>
  );
};

export default Bio;
