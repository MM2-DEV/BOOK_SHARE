import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: combineReducers({ users: userReducer }),
  devTools: true,
});

export default store;
