import { takeEvery, put, call } from "redux-saga/effects";
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, AUTH_ERROR, 
  SHOW_LOADER, HIDE_LOADER 
} from "../types/types";


const logInURL = `${process.env.REACT_APP_API_URL}/auth/v1/token?grant_type=password`;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;


export default function* logInSaga() {
  yield takeEvery(LOG_IN_REQUEST, logInFetch)
}

function* logInFetch(action) {
  try {
    yield put({type: SHOW_LOADER})

    const { email, password } = action

    const payload = yield call(logInUser, email, password)
    
    if(Object.keys(payload).includes("error")){
      let error = payload
      yield put({ type: AUTH_ERROR, error })
      } else {
        yield put({ type: LOG_IN_SUCCESS, payload })
      }
    yield put({type: HIDE_LOADER})
    
    // yield put({ type: LOG_IN_SUCCESS, payload })
  } catch (error) {
    yield put({ type: AUTH_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})
  }
}

async function logInUser (email, password) {

  const response = await fetch(logInURL, {
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