import { createSlice } from "@reduxjs/toolkit";

export const roomDataSlice = createSlice({
    name:'roomData',
    initialState:{
        value:{},
    },
    reducers:{
        setRoom:(state,action)=>{
            console.log(action?.payload)
            state.value = {...state.value, ...action.payload};
        }
    }
})

export const {setRoom} = roomDataSlice.actions
export default roomDataSlice.reducer