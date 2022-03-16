import React, { useState } from "react";
import * as axios from "axios";
import { useSelector } from "react-redux";

export default function JoinRoom() {
const [uniqueName, setUniqueName] = useState(undefined)
const [joinRoomName, setJoinRoomName] = useState(undefined)
const [createRoomName, setCreateRoomName] = useState(undefined);
  const handleSubmit = async (e, type) => {
    e.preventDefault();
    if(!uniqueName){
      alert('Enter a Unique Name to continue');
      return
    }
    if(type == 'create'){
      !createRoomName && alert('Enter Roomname to continue');
      //steps to create a room
      return
    }
    !joinRoomName && alert('Enter Roomname to continue');
    //steps to join a room
    
  };
  return (
    <div>
      <h1 className="w3-center">Hush Chat</h1>
      <form className="w3-light-grey w3-padding w3-margin">
        <label>Enter a unique name</label>
        <input className="w3-input" onChange={(e)=>setUniqueName(e.target.value)}></input>
        <div className="w3-border w3-padding w3-margin">
          <label>Join a Room</label>
          <input className="w3-input"  onChange={(e)=>setJoinRoomName(e.target.value)}></input>
          <br />
          <button
            className="w3-white w3-button"
            onClick={(e) => handleSubmit(e, "join")}
          >
            Join
          </button>
          <p>or</p>
          <label>Create a Room</label>
          <input className="w3-input"  onChange={(e)=>setCreateRoomName(e.target.value)}></input>
          <br />
          <button
            className="w3-white w3-button"
            onClick={(e) => handleSubmit(e, "create")}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
