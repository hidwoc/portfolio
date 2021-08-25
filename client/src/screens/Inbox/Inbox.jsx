import { useEffect, useState } from "react";
import { deleteMessage, getAllMessages } from "../../services/messages";

const Inbox = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await getAllMessages();
      setMessages(res)
    };
    fetchMessages()
  });

  return <div id="inbox-div">
    {messages.map(message => (
      <div key={message.id}>
        <p className="message-name">{message.name}</p>
        <p className="message-email">{message.email}</p>
        <p className="message-message">{message.message}</p>
        <p className="message-sent">{message.created_at.substring(0,10)} {message.created_at.substring(11,16)}</p>
        <button onClick={() => deleteMessage(message.id)}>Delete</button>
      </div>
    ))}
  </div>;
};

export default Inbox;
