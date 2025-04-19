import React, { useState } from "react";
import "./styles.css";

export default function App({ name = "User" }) {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <div className="App" style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome, {name}!</h1>
      <button onClick={toggleMessage}>
        {showMessage ? "Hide" : "Show"} Message
      </button>
      {showMessage && <p>This is a toggled message.</p>}
    </div>
  );
}
