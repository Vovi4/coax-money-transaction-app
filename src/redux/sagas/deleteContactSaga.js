import { takeEvery, put, call } from "redux-saga/effects";

import { DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, CONTACT_ERROR, SHOW_LOADER, HIDE_LOADER } from "../types/types";
const deleteContactURL = process.env.REACT_APP_API_URL;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* deleteContactSaga() {
  yield takeEvery(DELETE_CONTACT_REQUEST, deleteContactFetch)
}

function* deleteContactFetch (action) {
  try {
    yield put({type: SHOW_LOADER})

    const token = localStorage.getItem("token");
    const owner_id = localStorage.getItem("id");
    const { id } = action;
    console.log(action)
    const contact_id = id;
    
    console.log("Contact ID", id)
 
    yield call(deleteContact, token, owner_id, contact_id);
    
    yield put({ type: DELETE_CONTACT_SUCCESS })

    yield put({type: HIDE_LOADER})    

  } catch (error) {
    yield put({ type: CONTACT_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})
    
  }
}

async function deleteContact(token, owner_id, contact_id) {

  // const response = 
  await fetch(`${deleteContactURL}/rest/v1/contact?owner=eq.${owner_id}&contact=eq.${contact_id}`, {
    method: "DELETE",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  });
  // return await response.json();
}




