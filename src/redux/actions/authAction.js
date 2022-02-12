import { SIGN_UP_REQUEST, LOG_IN_REQUEST, CREATE_USER_REQUEST, LOG_OUT } from "../types/types";

export const signUp = ({email, password}) => {
  return {
    type: SIGN_UP_REQUEST,
    email, password
  }
};

export const createUser = ({token, id, email, firstName, lastName}) => {
  return {
    type: CREATE_USER_REQUEST,
    token, id, email, firstName, lastName
  }
};

export const logIn = ({email, password}) => {
  return {
    type: LOG_IN_REQUEST,
    email, password
  }
};

export const logOut = () => {
  return {
    type: LOG_OUT
  }
};

