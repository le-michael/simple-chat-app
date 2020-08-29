import React, { useState } from "react";
import RequestNameBlock from "./components/RequestNameBlock";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="app">
      {name === "" && <RequestNameBlock setName={setName} />}
      {name !== "" && <ChatRoom name={name} />}
    </div>
  );
}

export default App;
