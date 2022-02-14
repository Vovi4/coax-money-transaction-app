import { all } from "redux-saga/effects";

import signUpSaga from "./signUpSaga";
import createUserSaga from "./createUserSaga";
import logInSaga from "./logInSaga";
import ressetPassSaga from "./ressetPassSaga";

import allProfileSaga from "./allProfileSaga";
import userProfileSaga from "./userProfileSaga";

function* rootSaga() {
  yield all([
    signUpSaga(),
    createUserSaga(),
    logInSaga(),
    allProfileSaga(),
    userProfileSaga(),
    ressetPassSaga()
  ])
}

export default rootSaga;






