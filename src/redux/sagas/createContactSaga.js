import { takeEvery, put, call } from "redux-saga/effects";

import { CRETE_CONTACT_REQUEST, CRETE_CONTACT_SUCCESS, CONTACT_ERROR, SHOW_LOADER, HIDE_LOADER } from "../types/types";
const setContactURL = `${process.env.REACT_APP_API_URL}/rest/v1/contact`;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* createContactSaga() {
  yield takeEvery(CRETE_CONTACT_REQUEST, createContactFetch)
}

function* createContactFetch (action) {
  try {
    yield put({type: SHOW_LOADER})

    const token = localStorage.getItem("token");
    const owner_id = localStorage.getItem("id");
    const { id } = action;
    console.log(action)
    const contact_id = id;
    
    console.log("Contact ID", id)
    
    // const payload = 
    yield call(setContact, token, owner_id, contact_id);
    
    // console.log("creating data in saga", payload)

    // if(Object.keys(payload).includes("message")){
    //   let error = payload
    //   yield put({ type: CONTACT_ERROR, error })
    //   } else {
    //     yield put({ type: CRETE_CONTACT_SUCCESS })
    //   }

    yield put({ type: CRETE_CONTACT_SUCCESS })

    yield put({type: HIDE_LOADER})    

  } catch (error) {
    yield put({ type: CONTACT_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})
    
  }
}

async function setContact(token, owner_id, contact_id) {

  // const response = 
  await fetch(setContactURL, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "owner": owner_id,
      "contact": contact_id
    }),
  });
  // return await response.json();
}




