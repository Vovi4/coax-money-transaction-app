import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet, Link } from "react-router-dom";

import { logOut } from "../redux/actions/authAction";

import { BsCashCoin } from "react-icons/bs";
import { UserOutlined } from "@ant-design/icons";

import "../assets/layout.css";


function Layout() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate("/", { replace: true })
    }
  }, [isAuth]);

  const logOutUser = () => {
    dispatch(logOut());
    // navigate("/", { replace: true })
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
          {isAuth
            ? <span className="hdr-log" onClick={logOutUser}>Log Out</span>
            : <span className="hdr-log"><Link to="login">Log In</Link></span>
          }
        </div>
      </header>
      <Outlet />
      <footer className="footer-wrp">
        <span>Designed by Volodymyr Boiko</span>
      </footer>
    </div>
  );
}

export default Layout;
