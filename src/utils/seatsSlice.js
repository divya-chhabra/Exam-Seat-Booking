import { createSlice } from "@reduxjs/toolkit";

const seatsSlice = createSlice({
    name:"seatsInfo",
    initialState:{
        inEligibleSeats:[]
    },
    reducers:{
        storeInEligibleSeats:(state,action)=>{
            state.inEligibleSeats=[...state.inEligibleSeats,action.payload];
        }
    }
})

export default seatsSlice.reducer;
export const {storeInEligibleSeats} = seatsSlice.actions;