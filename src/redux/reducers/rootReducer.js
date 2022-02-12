import { combineReducers } from "redux";

import authReducer from "./authReducer";
import serviseReducer from "./serviseReduser";


export const rootReducer = combineReducers({
  auth: authReducer,
  servise: serviseReducer
});