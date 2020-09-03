import React from "react";

function MessageBlock({ message }) {
  return (
    <div className="message-block">
      <div className="message-head">
        <div>
          <b>{message.name}:</b>
        </div>
        <div className="message-timestamp">
          {message.time}
        </div>
      </div>
      <div>{message.message}</div>
    </div>
  );
}

export default MessageBlock;
