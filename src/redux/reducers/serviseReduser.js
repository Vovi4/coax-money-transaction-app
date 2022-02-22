import {HIDE_LOADER, SHOW_LOADER, SHOW_MESSAGE, HIDE_MESSAGE} from "../types/types";

const initialState = {
  loading: false,
  message: false
}

const serviseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state, 
        loading: true
      }
    case HIDE_LOADER:
      return {
        ...state, 
        loading: false
      }
    case SHOW_MESSAGE:
      return {
        ...state, 
        message: action.payload
      }
    case HIDE_MESSAGE:
      return {
        ...state, 
        message: false,
        resset: true,
      }
    default: return state
  }
}

export default serviseReducer;