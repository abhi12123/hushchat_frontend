import React from 'react'
import { useSelector } from 'react-redux'

export default function RoomDetails() {
  const roomData = useSelector(state=>state.roomData.value)
  console.log(roomData)
  return (
    <div>
        <p className='w3-large w3-monospace w3-center'>Room Name : <b>{roomData?.name}</b></p>
    </div>
  )
}
