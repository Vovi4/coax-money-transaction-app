import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

// import { logOut } from "../redux/actions/authAction";
// import { logOutProfile } from "../redux/actions/profileAction";

import "../assets/layout.css";

import { BsCashCoin } from "react-icons/bs";
import { UserOutlined } from '@ant-design/icons';
import { LOG_OUT } from "../redux/types/authTypes";

function Layout() {

  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      navigate("/", {replace: true})
    }
  }, [isAuth]);

  const logOutUser = () => {
    console.log("user log out")
    dispatch({type: LOG_OUT});
    // dispatch(logOut());
    // dispatch(logOutProfile());
    localStorage.clear();
  }

  return (
    <div className="layout-wrp">
      <header className="header-wrp">
      <Link to="/">
        <BsCashCoin className="logo" />
      </Link>
        <span className="title">FINANSY</span>
        <div className="auth-wrp">
          <UserOutlined />
          { isAuth
            ? <span className="hdr-log" onClick={logOutUser}>Log Out</span>
            : <span className="hdr-log"><Link to="login">Log In</Link></span>
          }
        </div>
      </header>
      {/* <div className="main-container"> */}

        <Outlet />
      {/* </div> */}

      <footer className="footer-wrp">
        <span>Designed by Volodymyr Boiko</span>
      </footer>
    </div>
  );
}

export default Layout;
