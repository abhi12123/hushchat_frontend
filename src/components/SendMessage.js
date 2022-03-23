import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addMessage } from "../redux/messagesSlice";

export default function SendMessage() {
  const [message, setMessage] = useState(undefined);
  const socket = useSelector(state=>state.socket.value);
  const roomData = useSelector(state=>state.roomData.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    let messageData = { text: message, roomName:roomData['name'], sender:roomData['username']}
    socket.emit("send_message", messageData);
    dispatch(addMessage(messageData));
  };

  useEffect(() => {
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
    <form className="w3-display-bottommiddle w3-col w3-padding w3-margin" style={{maxWidth:'800px'}}>
      <input
        className="w3-col s8 l8 m8 w3-input"
        placeholder="Enter text"
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <div  className="w3-col s4 l4 m4">
      <button className="w3-button w3-border w3-margin-left w3-round" onClick={(e) => handleSendMessage(e)}>
        Send
      </button>
        </div>
    </form>
  );
}
