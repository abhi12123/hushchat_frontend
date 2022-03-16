import { configureStore } from '@reduxjs/toolkit'
import messagesSlice from './messagesSlice'
import roomDataSlice from './roomDataSlice'
import socketSlice from './socketSlice'

export default configureStore({
  reducer: {
      messages:messagesSlice,
      socket:socketSlice,
      roomData:roomDataSlice
  },
})