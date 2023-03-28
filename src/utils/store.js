import { configureStore } from "@reduxjs/toolkit";
import examSlice from "./examSlice";
import seatsSlice from "./seatsSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        'examInfo':examSlice,
        'usersInfo':userSlice,
        'seatsInfo':seatsSlice
    }
})

export default store;