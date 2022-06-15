import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authenticationSlice";

const store = configureStore({
  reducer: combineReducers({
    authentication: authReducer,
  }),
});

export default store;
