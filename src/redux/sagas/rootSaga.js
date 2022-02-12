import { all } from "redux-saga/effects";

import signUpSaga from "./signUpSaga";
import createUserSaga from "./createUserSaga";
import logInSaga from "./logInSaga";

function* rootSaga() {
  yield all([
    signUpSaga(),
    createUserSaga(),
    logInSaga()
  ])
}

export default rootSaga;






