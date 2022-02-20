import React from "react";
import { Link, Outlet } from "react-router-dom";

import { Menu } from "antd";

import { GrTransaction } from "react-icons/gr";
import {
  ContactsOutlined,
  UserOutlined,
  SettingOutlined
} from "@ant-design/icons";

import "../assets/pages/main-page.css";
import "antd/dist/antd.css";


const Main = () => {

  return (
    <div className="main-wrp">
      <nav className="main-nav-wrp">
        <>
          <Menu
            mode="inline"
          >
            <Menu.Item key="1" icon={<GrTransaction />}>
              <Link to="transaction">Transaction</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ContactsOutlined />}>
              <Link to="contacts">Contacts</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<SettingOutlined />}>
              <Link to="settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </>
      </nav>
      <main className="main-item-wrp">
        <Outlet />
      </main>
    </div>
  )
}

export default Main;

