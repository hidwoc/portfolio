import { Link } from "react-router-dom";
import "./Landing.css"

const Landing = () => {
  return (
    <div id="landing">
      <Link to="/login" id="login-link" >Login</Link>
      <h1>Heidi Choi</h1>
      <h2>Software Engineer / Fullstack Developer</h2>
      <a href="#nav-div" className="link-button" id="enter">ENTER</a>
    </div>
  );
};

export default Landing;
