import { combineReducers } from "redux";

import authReducer from "./authReducer";
import serviseReducer from "./serviseReduser";
import profileReducer from "./profileReduser";
import contactReduser from "./contactReduser";


export const appReducer = combineReducers({
  auth: authReducer,
  servise: serviseReducer,
  profile: profileReducer,
  contact: contactReduser
});


export const rootReducer = (state, action) => {
  if (action.type === "LOG_OUT") {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}