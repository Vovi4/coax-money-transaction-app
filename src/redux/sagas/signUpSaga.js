import { takeEvery, put, call } from "redux-saga/effects";

import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, AUTH_ERROR, SHOW_LOADER, HIDE_LOADER

} from "../types/types";

const API_URL = process.env.REACT_APP_API_URL;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* signUpSaga() {
  yield takeEvery(SIGN_UP_REQUEST, signUpFetch)
}


function* signUpFetch( action ) {
  try {
    yield put({type: SHOW_LOADER})
    
    const { email, password } = action.payload

    const userData = yield call(signUpUser, email, password)

    if(Object.keys(userData).includes("msg")){
      let error = userData
      yield put({ type: AUTH_ERROR, error })
      } else {
        let payload = {
        token: userData.access_token,
        id: userData.user.id,
        email: userData.user.email
      }  
      yield put({ type: SIGN_UP_SUCCESS, payload })  
    }  
    yield put({type: HIDE_LOADER})

  } catch (error) {
    yield put({ type: AUTH_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})    
  }
}

async function signUpUser (email, password) {

  const response = await fetch(`${API_URL}/auth/v1/signup`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    }),
  });
  return await response.json();
}
