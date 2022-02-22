import { takeEvery, put, call } from "redux-saga/effects";
import { LOG_OUT_REQUEST, LOG_OUT_SUCCESS, AUTH_ERROR, SHOW_LOADER, HIDE_LOADER } from "../types/types";

const API_URL = process.env.REACT_APP_API_URL;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;


export default function* logOutSaga() {
  yield takeEvery(LOG_OUT_REQUEST, logOutFetch)
}

function* logOutFetch() {
  try {
    yield put({type: SHOW_LOADER})

    const token = localStorage.getItem("token");

    yield call(logOutUser, token)

    yield put({ type: LOG_OUT_SUCCESS});
        localStorage.clear();
   
    yield put({type: HIDE_LOADER})
    
  } catch (error) {
    yield put({ type: AUTH_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})
  }
}

async function logOutUser (token) {

  await fetch(`${API_URL}/auth/v1/logout`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  });
}