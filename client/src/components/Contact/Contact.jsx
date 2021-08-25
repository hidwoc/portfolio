import { Link } from "react-router-dom";
import Message from "../Message/Message";
import "./Contact.css";

const Contact = ({ resume, socials }) => {
  const email = socials[0]

  return (
    <div id="contact-div">
      <h2 className="section-header">Contact</h2>
      <div className="contact-left">
        <Link className="link-button" to={{ pathname: resume }} target="_blank">
          View Resume
        </Link>
        <div className="socials">
          <a href={`mailto: ${email.link}`} target="_blank" key={email.id}>
            <img
              id={email.id}
              src={email.icon}
              alt="email icon"
              width="35"
            />
          </a>
          {socials.filter(social => social.link !== "heidischoi@gmail.com")
          .map((social) => (
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
