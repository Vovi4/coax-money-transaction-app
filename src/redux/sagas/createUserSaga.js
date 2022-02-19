import { takeEvery, put, call } from "redux-saga/effects";

import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, AUTH_ERROR, SHOW_LOADER, HIDE_LOADER } from "../types/types";

const API_URL = process.env.REACT_APP_API_URL;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* createUserSaga() {
  yield takeEvery(CREATE_USER_REQUEST, createUserFetch)
}

function* createUserFetch( action ) {
  try {
    yield put({type: SHOW_LOADER})

    const { token, id, email, firstName, lastName } = action.payload
    
    yield call(createUser, token, id, email, firstName, lastName)
    yield put({ type: CREATE_USER_SUCCESS})   

    yield put({type: HIDE_LOADER})

  } catch (error) {
    yield put({ type: AUTH_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})    
  }
}

async function createUser (token, id, email, firstName, lastName) {

  // const response = 
  await fetch(`${API_URL}/rest/v1/profile`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Beare ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "user": id,
      "email": email,
      "firstName": firstName,
      "lastName": lastName
    }),
  });
  // return await response.json();
}




