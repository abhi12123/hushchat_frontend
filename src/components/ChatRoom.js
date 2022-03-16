import React from 'react'
import Messages from './Messages'
import RoomDetails from './RoomDetails'
import SendMessage from './SendMessage'

export default function ChatRoom() {
  return (
    <div className='w3-padding w3-margin'>
        <RoomDetails />
        <Messages />
        <SendMessage />
    </div>
  )
}
