import React from "react";
import { useSelector } from "react-redux";

export default function Messages() {
  const messages = useSelector((state) => state.messages.value);
  const roomData = useSelector(state=>state.roomData.value);
  return (
    <div
      className="w3-black w3-opacity-min w3-padding"
      style={{ height: "calc(100vh - 230px)", overflow:'auto' }}
    >
      {messages.map((message) => (
        <div style={message.sender == roomData.username ? {width:'100%',display:'flex', justifyContent:'end'}:{}}>
          <div
            className={`message w3-padding w3-round-large ${
              message.sender == roomData.username ? "w3-white message-sender" : "w3-border w3-border-aqua message-reciever"
            }`}
            style={{ width: "fit-content", margin:'5px 0px' }}
          >
            {message.sender != roomData.username  && <div className='w3-small w3-text-light-grey'>{message.sender}</div>}
            <div>{message.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
