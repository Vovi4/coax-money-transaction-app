import { takeEvery, put, call, delay } from "redux-saga/effects";
import { RESSET_PASS_REQUEST, RESSET_PASS_SUCCESS, AUTH_ERROR, SHOW_LOADER, HIDE_LOADER, SHOW_MESSAGE, HIDE_MESSAGE } from "../types/types";

const API_URL = process.env.REACT_APP_API_URL;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* ressetPassSaga() {
  yield takeEvery(RESSET_PASS_REQUEST, ressetFetch)
}

function* ressetFetch(action) {
  try {
    yield put({type: SHOW_LOADER})
    
    const token = localStorage.getItem("token");
    const { password } = action.payload   
    
    const payload = yield call(ressatPass, token, password)
    
    if(Object.keys(payload).includes("msg")){
      let error = payload
      yield put({ type: AUTH_ERROR, error })
    } else {
      yield put({ type: RESSET_PASS_SUCCESS });
      yield put({ type: SHOW_MESSAGE, payload: "Password was reset" })
      yield delay(2000)
      yield put({ type: HIDE_MESSAGE })
    }
    yield put({type: HIDE_LOADER})
    
  } catch (error) {
    yield put({ type: AUTH_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})
  }
}

async function ressatPass (token, password) {
 
  const response = await fetch(`${API_URL}/auth/v1/user`, {
    method: "PUT",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "password": password
    }),
  });
  return await response.json();
}