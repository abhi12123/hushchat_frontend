import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
    name:'messages',
    initialState:{
        value:[{text:'hi'},{text:'hello'}],
    },
    reducers:{
        addMessage:(state,action)=>{
            if(!action.payload) return
            state.value = [...state.value,action.payload]
        }
    }
})

export const {addMessage} = messagesSlice.actions
export default messagesSlice.reducer