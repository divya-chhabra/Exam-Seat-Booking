import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"usersInfo",
    initialState:{
        users:[]
    },
    reducers:{
        storeUserInfo:(state,action)=>{
            state.users=[...state.users,action.payload];
        }
    }
})

export default userSlice.reducer;
export const {storeUserInfo} = userSlice.actions;