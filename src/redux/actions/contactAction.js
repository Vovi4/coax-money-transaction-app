import { USER_CONTACTS_REQUEST, CRETE_CONTACT_REQUEST, DELETE_CONTACT_REQUEST } from "../types/types";

export const allUserContacts = () => {
  return {
    type: USER_CONTACTS_REQUEST
  }
};

export const deleteContact = (payload) => {
  return {
    type: DELETE_CONTACT_REQUEST,
    payload
  }
};

export const createContact = (payload) => {
  return {
    type: CRETE_CONTACT_REQUEST,
    payload    
  }
};