import React, { useEffect, useState } from "react";
import * as axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSocket } from "../redux/socketSlice";
import { io } from "socket.io-client";
import { useNavigate } from "react-router";
import { setRoom } from "../redux/roomDataSlice";

export default function JoinRoom() {
  const [uniqueName, setUniqueName] = useState(undefined);
  const [joinRoomName, setJoinRoomName] = useState(undefined);
  const [createRoomName, setCreateRoomName] = useState(undefined);
  const [enteredRoomName, setEnteredRoomName] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [step, setStep] = useState(1);
  const socket = useSelector((state) => state.socket.value);
  const baseURL = window.location.href.split(':').splice(0,2).join(':');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConnectSocket = async () => {
    const newSocket = io.connect(`${baseURL}:3500`);
    await dispatch(setSocket(newSocket));
    const roomData = {
      name: enteredRoomName,
      username: uniqueName,
    };
    newSocket.emit("send_join_room", roomData);
  };

  const handleJoin = async (e) => {
    e.preventDefault();
    if(!joinRoomName){
      setError('Enter room name to join');
      return
    }
    setError(undefined);
    const roomExists = await axios.get(
      `${baseURL}:3500/rooms/${joinRoomName}`
    );
    if (roomExists?.data?.success) {
      setEnteredRoomName(joinRoomName);
      setStep(2);
      return
    }
    setError(roomExists?.data?.message);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if(!createRoomName){
      setError('Enter room name to create');
      return
    }
    setError(undefined);
    const roomExists = await axios.get(
      `${baseURL}:3500/rooms/${createRoomName}`
    );
    if (roomExists?.data?.success) {
      setError(roomExists?.data?.message);
      return
    }
    setEnteredRoomName(createRoomName);
    setStep(2);
  };

  useEffect(() => {
    if (socket) {
      socket.on("receive_join_room", (roomData) => {
        dispatch(setRoom(roomData));
        navigate("/room");
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.emit("disconnect_user");
    }
  }, []);

  return (
    <div>
      <h1 className="w3-center">Hush Chat</h1>
      {error && (
        <div
          className="w3-panel w3-red w3-padding"
          style={{ position: "relative" }}
        >
          {error}
          <div className="w3-small w3-display-topright w3-padding-small w3-circle w3-btn" onClick={()=>setError(undefined)}>
            x
          </div>
        </div>
      )}
      {step == 1 && (
        <form className="w3-light-grey w3-padding w3-margin">
          <div className="w3-padding w3-margin">
            <label>Join a Room</label>
            <input
              className="w3-input"
              onChange={(e) => setJoinRoomName(e.target.value)}
              type='text'
            ></input>
            <br />
            <button
              className="w3-white w3-button"
              onClick={(e) => handleJoin(e)}
            >
              Join
            </button>
            <p>or</p>
            <label>Create a Room</label>
            <input
              className="w3-input"
              onChange={(e) => setCreateRoomName(e.target.value)}
            ></input>
            <br />
            <button
              className="w3-white w3-button"
              onClick={(e) => handleCreate(e)}
            >
              Create
            </button>
          </div>
        </form>
      )}

      {step == 2 && (
        <form className="w3-light-grey w3-padding w3-margin">
          <div className="w3-padding w3-margin">
            <label>Enter a unique name</label>
            <input
              className="w3-input"
              onChange={(e) => setUniqueName(e.target.value)}
            ></input>
          </div>
        </form>
      )}

      {step == 2 && (
        <div className="w3-padding w3-margin">
          <button className="w3-button w3-border w3-round" onClick={() => setStep(step - 1)}>
            Prev
          </button>
          <button
            className="w3-right w3-button w3-border w3-round"
            onClick={() => handleConnectSocket()}
          >
            start Chatting
          </button>
        </div>
      )}
    </div>
  );
}
