import React from 'react'
import { useSelector } from 'react-redux'

export default function RoomDetails() {
  const roomData = useSelector(state=>state.roomData.value)
  console.log(roomData)
  return (
    <div>
        <p className='w3-large w3-cursive w3-center'>Room Name : {roomData?.name}</p>
    </div>
  )
}
