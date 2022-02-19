import { takeEvery, put, call } from "redux-saga/effects";

import { ALL_TRANSACTION_REQUEST, ALL_TRANSACTION_SUCCESS, TRANSACTION_ERROR, SHOW_LOADER, HIDE_LOADER } from "../types/types";

const API_URL = process.env.REACT_APP_API_URL;
const SUPABASE_KEY = process.env.REACT_APP_APP_KEY;

export default function* allTransactionsSaga() {
  yield takeEvery(ALL_TRANSACTION_REQUEST, getAllTransactionsFetch)
}

function* getAllTransactionsFetch () {
  try {
    yield put({type: SHOW_LOADER})

    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const payload_from = yield call(getAllFromTransactions, token, id)
    const payload_to = yield call(getAllToTransactions, token, id)   

    const data = payload_from.concat(payload_to)
    const payload = [...new Map(data.map(item => [item["id"], item])).values()]

    yield put({ type: ALL_TRANSACTION_SUCCESS, payload})  
    
    yield put({type: HIDE_LOADER})

  } catch (error) {
    yield put({ type: TRANSACTION_ERROR, error })
    console.log("Something wrong")
    yield put({type: HIDE_LOADER})    
  }
}

async function getAllFromTransactions (token, id) {

  const response = await fetch(`${API_URL}/rest/v1/transaction?from=eq.${id}&select=*`, {
    method: "GET",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${token}`,
    },
  });
  return await response.json();
}

async function getAllToTransactions (token, id) {

  const response = await fetch(`${API_URL}/rest/v1/transaction?to=eq.${id}&select=*`, {
    method: "GET",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${token}`,
    },
  });
  return await response.json();
}




