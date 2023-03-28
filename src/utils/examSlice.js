import { createSlice } from "@reduxjs/toolkit";

const examSlice = createSlice({
    name:"examInfo",
    initialState:{
        examDetails:[]
    },
    reducers:{
        storeExamDetails:(state,action)=>{
            state.examDetails = [action.payload];
        },
        clearExamDetails:(state)=>{
            state.examDetails=[]
        },
    }
})

export default examSlice.reducer;
export const {storeExamDetails, clearExamDetails} = examSlice.actions;