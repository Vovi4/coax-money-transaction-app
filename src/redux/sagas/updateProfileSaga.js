import { takeEvery, put, call, delay } from "redux-saga/effects";

import { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, PROFILE_ERROR, SHOW_LOADER, HIDE_LOADER, SHOW_MESSAGE, HIDE_MESSAGE } from "../types/types";

const API_URL = process.env.REACT_APP_API_URL;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* updateProfileSaga() {
  yield takeEvery(UPDATE_PROFILE_REQUEST, updateProfile)
}

function* updateProfile( action ) {
  try {
    yield put({type: SHOW_LOADER})

    const token = localStorage.getItem("token");
    const { id, firstName, lastName } = action.payload
    
    const payload = yield call(updateUser, token, id, firstName, lastName)
  
    if(Object.keys(payload).includes("message")){
      let error = payload
      yield put({ type: PROFILE_ERROR, error })
      } else {
        yield put({ type: UPDATE_PROFILE_SUCCESS}) 
        yield put({ type: SHOW_MESSAGE, payload: "User profile was updated" })
        yield delay(2000)
        yield put({ type: HIDE_MESSAGE })   
      }

    yield put({type: HIDE_LOADER})

  } catch (error) {
    yield put({ type: PROFILE_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})    
  }
}

async function updateUser (token, id, firstName, lastName) {

  const response = await fetch(`${API_URL}/rest/v1/profile?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify({
      "firstName": firstName,
      "lastName": lastName
    }),
  });
  return await response.json();
}




