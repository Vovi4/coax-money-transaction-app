import { all } from "redux-saga/effects";

import signUpSaga from "./signUpSaga";
import createUserSaga from "./createUserSaga";
import logInSaga from "./logInSaga";
import ressetPassSaga from "./ressetPassSaga";

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
    signUpSaga(),
    createUserSaga(),
    logInSaga(),
    allProfileSaga(),
    userProfileSaga(),
    updateProfileSaga(),
    ressetPassSaga(),
    createContactSaga(),
    allUserContactsSaga(),
    deleteContactSaga(),
    createTransactionSaga(),
    allTransactionsSaga()
  ])
}

export default rootSaga;






