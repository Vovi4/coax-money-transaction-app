import { takeEvery, put, call } from "redux-saga/effects";

import { USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, PROFILE_ERROR, SHOW_LOADER, HIDE_LOADER } from "../types/types";

// const createUserURL = `${process.env.REACT_APP_API_URL}/rest/v1/profile?user=eq.${id}&select=*`;
const userProfileURL = `${process.env.REACT_APP_API_URL}`;

const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* userProfileSaga() {
  
  yield takeEvery(USER_PROFILE_REQUEST, getUserProfileFetch)
}

function* getUserProfileFetch () {
  try {
    yield put({type: SHOW_LOADER})
    
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const payload = yield call(getUserProfile, token, id)

    if(Object.keys(payload).includes("message")){
      let error = payload
      yield put({ type: PROFILE_ERROR, error })
      } else {
        yield put({ type: USER_PROFILE_SUCCESS, payload})  
      }

    yield put({type: HIDE_LOADER})

  } catch (error) {
    yield put({ type: PROFILE_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})
    
  }
}

async function getUserProfile (token, id) {

  const response = await fetch(`${userProfileURL}/rest/v1/profile?user=eq.${id}&select=*`, {
    method: "GET",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${token}`,
    },
  });
  return await response.json();
}




