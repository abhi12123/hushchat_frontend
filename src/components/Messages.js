import React from "react";
import { useSelector } from "react-redux";

export default function Messages() {
  const messages = useSelector((state) => state.messages.value);
  
  return (
    <div
      className="w3-light-grey w3-padding"
      style={{ height: "calc(100vh - 200px)", overflow:'auto' }}
    >
      {messages.map((message) => (
        <div style={message.sender == 'user' ? {width:'100%',display:'flex', justifyContent:'end'}:{}}>
          <div
            className={` w3-padding w3-margin w3-round-large ${
              message.sender == "user" ? "w3-white" : "w3-blue"
            }`}
            style={{ width: "fit-content" }}
          >
            <div className='w3-small w3-text-grey'>{message.sender}</div>
            <div>{message.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
