import React from 'react'
import { useSelector } from 'react-redux'

export default function RoomDetails() {
  const roomData = useSelector(state=>state.roomData.value)
  console.log(roomData)
  return (
    <div>
        <p>Room Name : {roomData?.name}</p>
        <p>Members : Kumar, Das</p>
    </div>
  )
}
