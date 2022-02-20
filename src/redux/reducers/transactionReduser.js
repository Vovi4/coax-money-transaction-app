import { CRETE_TRANSACTION_SUCCESS, ALL_TRANSACTION_SUCCESS, TRANSACTION_ERROR } from "../types/types";

const initialState = {
  transaction: [],
  // amount: [],
  error: null
}

const transactionReduser = (state = initialState, action) => {
  switch (action.type) {
    case CRETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        error: null
      }    
    case ALL_TRANSACTION_SUCCESS:
      return {
        ...state,
        transaction: action.payload,
        error: null
      }    
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.error
      }    
    default: return state
  }
}

export default transactionReduser;


