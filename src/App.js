import React from "react";
import { Routes, Route, 
  // Navigate
 } from "react-router-dom";
// import {useSelector} from "react-redux";
// import propTypes from "prop-types";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import CreateProfile from "./pages/CreateProfile";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

import Profile from "./components/Profile";
import Contacts from "./components/Contacts";
import Transaction from "./components/Transaction";
import Settings from "./components/Settings";

import "./assets/app.css";

function App() {

  
  // function Private({ children }) {
  // const autorize = useSelector((state) => state.auth.isAuth)
  // return autorize ? children : <Navigate to={"/"} />;
  // }
  
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route element={<Private><Main /></Private>}> */}
            <Route element={<Main />}>
              <Route path="contacts" element={<Contacts />} />
              <Route path="profile" element={<Profile />} />            
              <Route path="transaction" element={<Transaction />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route index element={<Home />} />
            <Route path="create_profile" element={<CreateProfile />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </div>
  );
}

// App.propTypes = {
//   children: propTypes.node
// }

export default App;
