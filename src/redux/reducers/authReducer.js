import { SIGN_UP_SUCCESS, LOG_IN_SUCCESS, CREATE_USER_SUCCESS, RESSET_PASS_SUCCESS, AUTH_ERROR } from "../types/types";


const initialState = {
  isAuth: false,
  logData: [],
  user: [],
  error: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null
      }
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logData: action.payload,
        isAuth: true,
        error: null
      }      
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        error: null
      }
    case RESSET_PASS_SUCCESS:
      return {
        ...state,
        error: null
      }
    // case LOG_OUT:
    //   return initialState;

    case AUTH_ERROR:
      return {
        ...state,
        error: action.error,
        isAuth: false
      }
    
    default: return state
  }
}

export default authReducer;


