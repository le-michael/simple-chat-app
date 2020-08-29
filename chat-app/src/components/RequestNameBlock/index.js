import React, { useState } from "react";

function RequestNameBlock({ setName }) {
  const [tempName, setTempName] = useState("");

  const updateTempName = (e) => {
    setTempName(e.target.value);
  };

  const confirmName = (e) => {
    if (e.key === "Enter" && tempName !== "") setName(tempName);
  };

  return (
    <div>
      <p className="request-name-text">
        <b>Please enter a display name</b>
      </p>
      <input
        type="text"
        className="text-input"
        onChange={updateTempName}
        onKeyDown={confirmName}
      />
    </div>
  );
}

export default RequestNameBlock;
