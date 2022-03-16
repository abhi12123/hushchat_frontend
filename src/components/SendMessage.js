import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import io from "socket.io-client";
import { addMessage } from "../redux/messagesSlice";

export default function SendMessage() {
  const [message, setMessage] = useState(undefined);
  const socket = useSelector(state=>state.socket.value);
  console.log(socket)
  const roomData = useSelector(state=>state.roomData.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(roomData)
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    socket.emit("send_message", { text: message, roomName:roomData['name'] });
  };

  useEffect(() => {
      console.log(socket,roomData)
    if(!socket){
        navigate('/');
        return
    }
    socket.on("recieve_message", (data) => {
        console.log('recieved message', data)
      dispatch(addMessage(data));
    });
    
  }, []);

  return (
    <form className="w3-display-bottommiddle w3-col w3-padding">
      <input
        className="w3-col s8 l8 m8 w3-input"
        placeholder="Enter text"
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button className="w3-col s4 l4 m4 w3-button" onClick={(e) => handleSendMessage(e)}>
        Send Message
      </button>
    </form>
  );
}
