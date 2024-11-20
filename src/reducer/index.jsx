// import {combineReducer} from "@reduxjs/toolkit" ;
import combineReducer from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
const rootReducer = combineReducer({

    auth: authReducer,
})

export default rootReducer;