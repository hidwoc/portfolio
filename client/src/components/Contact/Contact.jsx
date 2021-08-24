import { useState } from "react";
import { Link } from "react-router-dom";
import { handleChange } from "../../utils/helpers";
import "./Contact.css";

// TODO resume link
// TODO email link
// TODO message onSubmit?
const Contact = ({ resume, socials }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contact-div">
      <h2 className="section-header">Contact</h2>
      <div className="contact-left">
        <Link to={{ pathname: resume }} target="_blank">
          View Resume
        </Link>
        <div className="socials">
          {socials.map((social) => (
            <Link
              to={{ pathname: social.link }}
              target="_blank"
              key={social.id}
            >
              <img
                id={social.id}
                src={social.icon}
                alt="social icon"
                width="35"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="contact-right">
        Want to chat? Send me a message!
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={(e) => handleChange(e, form, setForm)}
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            onChange={(e) => handleChange(e, form, setForm)}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            name="message"
            onChange={(e) => handleChange(e, form, setForm)}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
