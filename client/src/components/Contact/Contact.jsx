import { Link } from "react-router-dom";
import Message from "../Message/Message"
import "./Contact.css";

// TODO email link
const Contact = ({ resume, socials }) => {

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
        <Message />
      </div>
    </div>
  );
};

export default Contact;
