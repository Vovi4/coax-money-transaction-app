import { takeEvery, put, call, delay } from "redux-saga/effects";

import { CRETE_TRANSACTION_REQUEST, CRETE_TRANSACTION_SUCCESS, TRANSACTION_ERROR, SHOW_LOADER, HIDE_LOADER, SHOW_MESSAGE, HIDE_MESSAGE } from "../types/types";
const API_URL = process.env.REACT_APP_API_URL;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* createTransactionSaga() {
  yield takeEvery(CRETE_TRANSACTION_REQUEST, createTransactionFetch)
}

function* createTransactionFetch (action) {
  try {
    yield put({type: SHOW_LOADER})

    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const { recipient, amount } = action.payload;
    
    yield call(setTransaction, token, id, recipient, amount);
    
    yield put({ type: CRETE_TRANSACTION_SUCCESS })
    yield put({ type: SHOW_MESSAGE, payload: "Transaction success" })
    yield delay(2000)
    yield put({ type: HIDE_MESSAGE })

    yield put({type: HIDE_LOADER})    

  } catch (error) {
    yield put({ type: TRANSACTION_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})
    
  }
}

async function setTransaction(token, id, recipient, amount) {

  // const response = 
  await fetch(`${API_URL}/rest/v1/transaction`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "from": id,
      "to": recipient,
      "amount": amount
    }),
  });
  // return await response.json();
}




