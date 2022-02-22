import { SIGN_UP_REQUEST, LOG_IN_REQUEST, CREATE_USER_REQUEST, RESSET_PASS_REQUEST, LOG_OUT_REQUEST } from "../types/types";

export const signUp = (payload) => {
  return {
    type: SIGN_UP_REQUEST,
    payload
  }
};

export const createUser = (payload) => {
  return {
    type: CREATE_USER_REQUEST,
    payload
  }
};

export const logIn = (payload) => {
  return {
    type: LOG_IN_REQUEST,
    payload
  }
};

export const newPass = (payload) => {
  return {
    type: RESSET_PASS_REQUEST,
    payload
  }
};

export const logOut = () => {
  return {
    type: LOG_OUT_REQUEST
  }
};

