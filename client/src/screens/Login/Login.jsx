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
  const [buttonMessage, setButtonMessage] = useState("Login");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(data);
    if (res) {
      setButtonMessage("What's up Heidi✨")
      setAdmin(res);
      setTimeout(() => {
        setButtonMessage("Login")
        history.push("/");
      }, 1500)
    } else {
      setButtonMessage("Invalid Credentials");
      setTimeout(() => {
        setData({
          email: "",
          password: "",
        });
        setButtonMessage("Login");
      }, 1500);
    }
  };

  return (
    <div className="login">
      <button className="back" onClick={() => history.push("/")}>
        Back
      </button>
      <h2>Welcome Admin!</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
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
            value={data.password}
            onChange={(e) => handleChange(e, data, setData)}
          />
        </div>
        <button id="login">{buttonMessage}</button>
      </form>
    </div>
  );
};

export default Login;
