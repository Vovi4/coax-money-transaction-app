import { USER_PROFILE_REQUEST, ALL_PROFILES_REQUEST, UPDATE_PROFILE_REQUEST } from "../types/types";

export const userProfile = () => {
  return {
    type: USER_PROFILE_REQUEST
  }
};
 
export const allUsersProfile = () => {
  return {
    type: ALL_PROFILES_REQUEST
  }
};

export const updateUserProfile = (payload) => {
  return {
    type: UPDATE_PROFILE_REQUEST,
    payload
  }
};