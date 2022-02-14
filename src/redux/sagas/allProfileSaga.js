import { takeEvery, put, call } from "redux-saga/effects";

import { ALL_PROFILES_REQUEST, ALL_PROFILES_SUCCESS, PROFILE_ERROR, SHOW_LOADER, HIDE_LOADER } from "../types/types";
const getAllProfileURL = `${process.env.REACT_APP_API_URL}/rest/v1/profile?select*`;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* allProfileSaga() {
  yield takeEvery(ALL_PROFILES_REQUEST, getAllProfileFetch)
}

function* getAllProfileFetch () {
  try {
    yield put({type: SHOW_LOADER})

    const token = localStorage.getItem("token");

    const payload = yield call(getAllProfile, token)
    // console.log("creating data in saga", payload)
    yield put({ type: ALL_PROFILES_SUCCESS, payload})   

    yield put({type: HIDE_LOADER})

  } catch (error) {
    yield put({ type: PROFILE_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})
    
  }
}

async function getAllProfile (token) {

  const response = await fetch(getAllProfileURL, {
    method: "GET",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Beare ${token}`,
    },
  });
  return await response.json();
}




