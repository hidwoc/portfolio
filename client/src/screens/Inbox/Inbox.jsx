import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { deleteMessage, getAllMessages } from "../../services/messages";
import "./Inbox.css";

// TODO Confirm before deleting message

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await getAllMessages();
      setMessages(res);
    };
    fetchMessages();
  }, [toggleFetch]);

  const handleDelete = async (id) => {
    const res = await deleteMessage(id);
    if (res) setToggleFetch(!toggleFetch);
  };

  return (
    <div id="inbox-div">
      <button className="back" onClick={() => history.push("/")}>
        Back
      </button>
      {messages.map((message) => (
        <div className="message" key={message.id}>
          <p className="message-sent">
            {message.created_at.substring(0, 10)}{" "}
            {message.created_at.substring(11, 16)}
          </p>
          <div className="sender">
            <p className="sender-name">{message.name}</p>
            <p className="sender-email">{message.email}</p>
          </div>
          <p className="message-message">{message.message}</p>
          <button onClick={() => handleDelete(message.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
