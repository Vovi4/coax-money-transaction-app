import { CRETE_TRANSACTION_REQUEST, ALL_TRANSACTION_REQUEST } from "../types/types";

// export const createTransacrion = ({recipient, amount}) => {
export const createTransacrion = (payload) => {
  return {
    type: CRETE_TRANSACTION_REQUEST,
    payload
    // recipient, amount
  }
}

export const getAllTransaction = () => {
  return {
    type: ALL_TRANSACTION_REQUEST
  }
}