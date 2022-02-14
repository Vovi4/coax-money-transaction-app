import { takeEvery, put, call } from "redux-saga/effects";

import { USER_CONTACTS_REQUEST, USER_CONTACTS_SUCCESS, EMPTY_USERS_SUCCESS, CONTACT_ERROR, SHOW_LOADER, HIDE_LOADER } from "../types/types";

// const getUserContactsURL = `${process.env.REACT_APP_API_URL}/rest/v1/contact?owner=in.(${id})&select=*`;
const getUserContactsURL = process.env.REACT_APP_API_URL;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* allUserContactsSaga() {
  yield takeEvery(USER_CONTACTS_REQUEST, getUserContactsFetch)
}

function* getUserContactsFetch () {
  try {
    yield put({type: SHOW_LOADER})
    
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const payload = yield call(getAllContacts, token, id);
    
    if(Object.keys(payload).includes("message")){
      let error = payload 
      yield put({ type: CONTACT_ERROR, error })
      // } else if (payload && Object.keys(payload).length === 0 && payload.constructor === Object) {
      } else if (payload.length !== 0) {
        let data = payload.map((item) => item.contact).join(",")
        const users = yield call(getUserContacts, token, data);
        // let payload = users
        yield put({ type: USER_CONTACTS_SUCCESS, users });
    } else {
      let payload = "You don't have contacts yet";
      yield put({ type: EMPTY_USERS_SUCCESS, payload });
    }

    yield put({type: HIDE_LOADER})

  } catch (error) {
    yield put({ type: CONTACT_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})    
  }
}


async function getAllContacts (token, id) {  
  
  // const response = await fetch(getUserContactsURL, {
    const response = await fetch(`${getUserContactsURL}/rest/v1/contact?owner=in.(${id})&select=*`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${token}`,
      },
    });
    return await response.json();
  }
  
  async function getUserContacts (token, data) {  
  
    // const response = await fetch(getUserContactsURL, {
    const response = await fetch(`${getUserContactsURL}/rest/v1/profile?user=in.(${data})&select=*`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${token}`,
      },
    });
    return await response.json();
  }
  
  

