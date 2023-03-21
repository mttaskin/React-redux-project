import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "../features/authSlice"

const store = configureStore({ 
reducer:{
    auth:authReducer,
    news:newsReducer,
},
})

export default store;