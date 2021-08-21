import React from "react";
import { Link } from "react-router-dom";

const Landing = ({ title }) => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <h1>Heidi Choi</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default Landing;
