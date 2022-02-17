// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from "redux";
import rootReducers from "./reducer";

//const store = configureStore()
const store = createStore(rootReducers);

export default store;