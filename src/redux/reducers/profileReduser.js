import { USER_PROFILE_SUCCESS, ALL_PROFILES_SUCCESS, PROFILE_ERROR, 
  // LOG_OUT_PROFILE
 } from "../types/types";


const initialState = {
  user_profile: [],
  profile: [],
  error: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PROFILES_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        // error: null
      }

    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        user_profile: action.payload,
        // error: null
      }
    
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.error
      }

    // case LOG_OUT_PROFILE:
    //   return initialState;
    
    default: return state
  }
}

export default profileReducer;


