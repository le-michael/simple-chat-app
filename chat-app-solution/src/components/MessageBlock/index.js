import React from "react";

function MessageBlock({ message }) {
  return (
    <div className="message-block">
      <b>{message.name}:</b>
      <div>{message.message}</div>
    </div>
  );
}

export default MessageBlock;
