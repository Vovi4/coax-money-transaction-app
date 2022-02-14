import React from 'react';
import { Link, Outlet } from "react-router-dom";

// import Transaction from '../components/Transaction';
// import Contacts from '../components/Contacts';
// import Profile from '../components/Profile';
// import Settings from '../components/Settings';

import { Menu } from 'antd';

import "../assets/pages/main-page.css";

import 'antd/dist/antd.css';

import { GrTransaction } from "react-icons/gr";
import {
  ContactsOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';

// const { SubMenu } = Menu;

const Main = () => {

      return (         
      <div className="main-wrp">
        <nav className="main-nav-wrp">    
        <>    
        <Menu
          // defaultSelectedKeys={["1"]}
          // defaultOpenKeys={["sub1"]}
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
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
            <Link to="profile">
              <Menu.Item key="4">
                <Link to="profile/view">View profile</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="profile/update">Update profile</Link>
              </Menu.Item>
            </Link>
          </SubMenu> */}
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

      