import { combineReducers } from "redux";

import authReducer from "./authReducer";
import serviseReducer from "./serviseReduser";
import profileReducer from "./profileReduser";
import contactReduser from "./contactReduser";
import transactionReduser from "./transactionReduser";


export const appReducer = combineReducers({
  auth: authReducer,
  servise: serviseReducer,
  profile: profileReducer,
  contact: contactReduser,
  transaction: transactionReduser
});


export const rootReducer = (state, action) => {
  if (action.type === "LOG_OUT_SUCCESS") {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}