import { SIGN_UP_REQUEST, LOG_IN_REQUEST, CREATE_USER_REQUEST, RESSET_PASS_REQUEST, LOG_OUT } from "../types/types";

// export const signUp = ({email, password}) => {
export const signUp = (payload) => {
  return {
    type: SIGN_UP_REQUEST,
    payload
    // email, password
  }
};

// export const createUser = ({token, id, email, firstName, lastName}) => {
export const createUser = (payload) => {
  return {
    type: CREATE_USER_REQUEST,
    payload
    // token, id, email, firstName, lastName
  }
};

// export const logIn = ({email, password}) => {
export const logIn = (payload) => {
  return {
    type: LOG_IN_REQUEST,
    payload
    // email, password
  }
};

// export const newPass = ({password}) => {
export const newPass = (payload) => {
  return {
    type: RESSET_PASS_REQUEST,
    payload
    // password
  }
};

export const logOut = () => {
  return {
    type: LOG_OUT
  }
};

