import { all } from "redux-saga/effects";

import signUpSaga from "./signUpSaga";
import createUserSaga from "./createUserSaga";
import logInSaga from "./logInSaga";
import ressetPassSaga from "./ressetPassSaga";

import allProfileSaga from "./allProfileSaga";
import userProfileSaga from "./userProfileSaga";

import createContactSaga from "./createContactSaga";
import allUserContactsSaga from "./allUserContactsSaga";
import deleteContactSaga from "./deleteContactSaga";

function* rootSaga() {
  yield all([
    signUpSaga(),
    createUserSaga(),
    logInSaga(),
    allProfileSaga(),
    userProfileSaga(),
    ressetPassSaga(),
    createContactSaga(),
    allUserContactsSaga(),
    deleteContactSaga()
  ])
}

export default rootSaga;






