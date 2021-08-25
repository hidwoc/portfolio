import { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../services/admins";
import { handleChange } from "../../utils/helpers";
import "./Login.css";

const Login = ({ setAdmin }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(data);
    if (res) {
      setAdmin(res);
      history.push("/");
    } else {
      console.log("invalid credentials");
      // TODO: render "invalid credentials" message
    }
  };

  return (
    <div className="login">
      <button onClick={() => history.push("/")}>Back</button>
      <h2 id="welcome-admin">Welcome Admin!</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={(e) => handleChange(e, data, setData)}
            autoFocus
          />
        </div>
        <div className="input-div">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleChange(e, data, setData)}
          />
        </div>
        <button id="login">Login</button>
      </form>
    </div>
  );
};

export default Login;
