import React, { useState } from "react";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  // const ashGrey = "#95B2B0";
  // const glaucous = "#647AA3";
  // const marineBlue = "#334197";
  // const teaGreen = "#C6EBBE";
  // const phthaloBlue = "#020887";
  
  return (
    <div className="chat-container"
    style={{
        "boxSizing": "border-box",
        "width": "80%",
        "minHeight": "80%",
        "margin": "0 auto",
        "border": "1px solid #95B2B0",
        "borderRadius": "8px",
        "display": "flex",
        "flexDirection": "column",
        "overflow": "hidden"
    }}>
      <div className="chat-messages"
      style={{
        "flex": 1,
        "padding": "10px",
        "overflowY": "auto",
        "maxHeight": "300px"
      }}>
        {messages.map((message, index) => (
          <div key={index} className="chat-message"
          style={{
            "backgroundColor": "#fff",
            "color": "#020887",
            "padding": "8px 12px",
            "borderRadius": "8px",
            "marginBottom": "6px",
            "maxWidth": "80%"
          }}>
            {message}
          </div>
        ))}
      </div>
      <div className="chat-input"
      style={{
        "display": "flex",
        "border-top": "1px solid #020887"
      }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            "flex": 1,
            "borderRight": "1.2px solid #020887",
            "border": "none",
            "padding": "4px",
            "outline": "none",
            "backgroundColor": "#334197",
            "color": "#fff",
            "height": "50px"
          }}
        />
        <button onClick={sendMessage}
        style={{
          "border": "none",
          "flex": 0.2,
          "background-color": "#334197",
          "color": "white",
          "padding": "10px 15px",
          "cursor": "pointer",
          "height": "58px"
        }}>Send</button>
      </div>
    </div>
  );
};

export default Chat;