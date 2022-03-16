import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/messagesSlice';

export default function Messages() {
    // const dispatch = useDispatch();
    // dispatch(addMessage('yo'))
    const messages = useSelector(state=>state.messages.value);
  return (
    <div className='w3-light-grey w3-padding' style={{height:'calc(100vh - 180px)'}}>
        {
            messages.map((message)=><div className='w3-blue w3-padding w3-margin w3-round-large' style={{width:'fit-content'}}>
                {/* <div className='w3-small'>{message.sender}</div> */}
                <div>{message.text}</div>
            </div>
            )
        }
    </div>
  )
}
