import { Link } from "react-router-dom";
import "./Landing.css"

const Landing = () => {
  return (
    <div id="landing">
      <Link to="/login" id="login">Login</Link>
      <h1>Heidi Choi</h1>
      <h2>Software Engineer / Fullstack Developer</h2>
      <a href="#nav-div" id="enter">ENTER</a>
    </div>
  );
};

export default Landing;
