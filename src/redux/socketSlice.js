import { createSlice } from "@reduxjs/toolkit";

export const socketSlice = createSlice({
    name:'socket',
    initialState:{
        value:undefined,
    },
    reducers:{
        setSocket:(state,action)=>{
            if(!action.payload) return
            state.value = action.payload;
        }
    }
})

export const {setSocket} = socketSlice.actions
export default socketSlice.reducer