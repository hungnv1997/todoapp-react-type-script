import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoSlices";
const rootReducer = combineReducers({
  todoReducer,
});
export default rootReducer;
