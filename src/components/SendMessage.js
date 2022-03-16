import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { addMessage } from "../redux/messagesSlice";

export default function SendMessage() {
  const [message, setMessage] = useState(undefined);
  const [socket, setSocket] = useState(undefined);
  const dispatch = useDispatch()

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    socket.emit("message", { text: message });
  };
  

  useEffect(() => {
    const socket = io.connect("http://localhost:3500");
    socket.on("message", (data) => {
      dispatch(addMessage(data))
    });
    setSocket(socket);
  }, []);

  return (
    <form className="w3-display-bottommiddle w3-col w3-padding">
      <input
        className="w3-col s8 l8 m8"
        placeholder="Enter text"
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button className="w3-col s4 l4 m4" onClick={(e) => handleSendMessage(e)}>
        Send Message
      </button>
    </form>
  );
}
