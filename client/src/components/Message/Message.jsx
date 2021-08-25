import { useEffect, useState } from "react";
import { createMessage } from "../../services/messages";
import { handleChange } from "../../utils/helpers";
import "./Message.css"

const Message = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [buttonMessage, setButtonMessage] = useState("Submit")
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    setButtonMessage("Thank you for your message!")
    setTimeout(() => {
      setButtonMessage("Submit")
    }, 2000);
  }, [submit])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createMessage(form)
    if (res) {
      setSubmit(!submit)
      setForm({
        name: "",
        email: "",
        message: "",
      })
    }
  };

  return (
    <div>
      Want to chat? Send me a message!
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={form.name}
          onChange={(e) => handleChange(e, form, setForm)}
          require
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={form.email}
          onChange={(e) => handleChange(e, form, setForm)}
          require
        />
        <textarea
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          name="message"
          value={form.message}
          onChange={(e) => handleChange(e, form, setForm)}
          require
        ></textarea>
        <button>{buttonMessage}</button>
      </form>
    </div>
  );
};

export default Message;
