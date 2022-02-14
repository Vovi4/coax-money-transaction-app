import { USER_CONTACTS_REQUEST, CRETE_CONTACT_REQUEST, DELETE_CONTACT_REQUEST } from "../types/types";

export const allUserContacts = () => {
  return {
    type: USER_CONTACTS_REQUEST
  }
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT_REQUEST,
    id
  }
};

export const createContact = (id) => {
  return {
    type: CRETE_CONTACT_REQUEST,
    id
  }
};