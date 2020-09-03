import React, { useState, useEffect } from "react";
import MessageBlock from "../MessageBlock";
import socket from "../../socket";

function ChatRoom({ name }) {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const scrollToBottom = () => {
    var element = document.getElementById("message-area");
    element.scrollTop = element.scrollHeight;
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    if (e.key === "Enter" && message !== "") {
      socket.emit("new-message", { name, message });
      setMessage("");
    }
  };
  const updateMessageList = (message) => {
    // [{name: "Michael", message: "Hello"}, {name: "Victoria", message: "Hey!"}]
    setMessageList((messageList) => [...messageList, message]);
  };

  useEffect(scrollToBottom, [messageList]);

  useEffect(() => {
    socket.on("new-message", (message) => updateMessageList(message));
    return () => {
      socket.off("new-message", (message) => updateMessageList(message));
    };
  }, []);

  return (
    <div>
      <div id="message-area">
        {messageList.map((message, index) => (
          <MessageBlock key={index} message={message} />
        ))}
      </div>
      <div className="text-area">
        <input
          type="text"
          value={message}
          className="text-input"
          onChange={updateMessage}
          onKeyDown={sendMessage}
        />
      </div>
    </div>
  );
}

export default ChatRoom;
