import { CRETE_CONTACT_SUCCESS, USER_CONTACTS_SUCCESS, EMPTY_USERS_SUCCESS, DELETE_CONTACT_SUCCESS, CONTACT_ERROR } from "../types/types";

const initialState = {
  contact: [],
  error: null
}

const contactReduser = (state = initialState, action) => {
  switch (action.type) {
    case CRETE_CONTACT_SUCCESS:
      return {
        ...state,
        error: null
      }
    
    case USER_CONTACTS_SUCCESS:
      return {
        ...state,
        contact: action.users,
        // error: null
      }

    case EMPTY_USERS_SUCCESS:
      return {
        ...state,
        contact: action.payload,
        // error: null
      }

    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
          error: null
      }
    
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.error
      }
    
    default: return state
  }
}

export default contactReduser;


