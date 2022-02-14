import { USER_PROFILE_REQUEST, ALL_PROFILES_REQUEST, LOG_OUT_PROFILE } from "../types/types";

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

export const logOutProfile = () => {
  return {
    type: LOG_OUT_PROFILE
  }
};