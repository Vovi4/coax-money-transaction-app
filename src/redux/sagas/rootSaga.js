import { all } from "redux-saga/effects";

import logInSaga from "./logInSaga";
import signUpSaga from "./signUpSaga";
import createUserSaga from "./createUserSaga";
import ressetPassSaga from "./ressetPassSaga";
import logOutSaga from "./logOutSaga"

import allProfileSaga from "./allProfileSaga";
import userProfileSaga from "./userProfileSaga";
import updateProfileSaga from "./updateProfileSaga"

import createContactSaga from "./createContactSaga";
import allUserContactsSaga from "./allUserContactsSaga";
import deleteContactSaga from "./deleteContactSaga";

import createTransactionSaga from "./createTransactionSaga";
import allTransactionsSaga from "./allTransactionsSaga";

function* rootSaga() {
  yield all([
    logInSaga(),
    signUpSaga(),
    createUserSaga(),
    ressetPassSaga(),
    logOutSaga(),
    allProfileSaga(),
    userProfileSaga(),
    updateProfileSaga(),
    createContactSaga(),
    allUserContactsSaga(),
    deleteContactSaga(),
    createTransactionSaga(),
    allTransactionsSaga()
  ])
}

export default rootSaga;






