import { takeEvery, put, call } from "redux-saga/effects";
import { RESSET_PASS_REQUEST, RESSET_PASS_SUCCESS, 
  AUTH_ERROR, SHOW_LOADER, HIDE_LOADER } from "../types/types";

const ressetPassURL = `${process.env.REACT_APP_API_URL}/auth/v1/user`;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* ressetPassSaga() {
  yield takeEvery(RESSET_PASS_REQUEST, ressetFetch)
}

function* ressetFetch(action) {
  try {
    yield put({type: SHOW_LOADER})
    
    const token = localStorage.getItem("token");
    const { password } = action;    
    
    const payload = yield call(ressatPass, token, password)
    
    if(Object.keys(payload).includes("msg")){
      let error = payload
      yield put({ type: AUTH_ERROR, error })
    } else {
      console.log(payload)
      yield put({ type: RESSET_PASS_SUCCESS , payload});
    }
    yield put({type: HIDE_LOADER})
    
  } catch (error) {
    yield put({ type: AUTH_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})
  }
}

async function ressatPass (token, password) {
 
  const response = await fetch(ressetPassURL, {
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