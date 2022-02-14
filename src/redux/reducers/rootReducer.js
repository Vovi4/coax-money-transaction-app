import { combineReducers } from "redux";

import authReducer from "./authReducer";
import serviseReducer from "./serviseReduser";
import profileReducer from "./profileReduser";


export const appReducer = combineReducers({
  auth: authReducer,
  servise: serviseReducer,
  profile: profileReducer
});


export const rootReducer = (state, action) => {
  if (action.type === "LOG_OUT") {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}