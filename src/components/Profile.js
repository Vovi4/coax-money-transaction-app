import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Button } from "antd";
import { List, Avatar, Input } from 'antd';
import Loader from "../elements/Loader";

import { UserProfile, AllUsersProfile } from "../redux/actions/profileAction";

import "../assets/components/profile.css";
import "antd/dist/antd.css";

import { PlusOutlined } from "@ant-design/icons";

import avatar from "../assets/icons/avatar.svg"
import user_avatar from "../assets/icons/user_avatar.svg"


const Profile = () => {

  const dispatch = useDispatch();

  const profile = useSelector(state => state.profile.profile);
  const loader = useSelector(state => state.servise.loading);
  const user = useSelector(state => state.profile.user_profile[0]);

  const { Search } = Input;
  const onSearch = value => console.log(value);

  useEffect(() => {
    dispatch(AllUsersProfile());
    dispatch(UserProfile())
  }, []);

  return (
    <div className="profile-wrp">
      {!user
        ? <Loader />
        : <>
          <div className="profile-page-wrp">
            <div className="profile-avatar-wrp">
              <img src={avatar} alt="avatar" className="user-avatar"></img>
              <span className="avatar-item">Hello  {!user.firstName ? "NoName" : user.firstName}</span>
              <Button type="primary">Update profile</Button>
            </div>
            <div className="profile-item-wrp" >
              <h3 className="user-items-header">User information</h3>
              <div className="user-items">
                <div className="user-data">
                  <span>First Name</span>
                  <span>{!user.firstName ? "NoName" : user.firstName}</span>
                </div>
                <div className="user-data">
                  <span>Last Name</span>
                  <span>{user.lastName}</span>
                </div>
                <div className="user-data">
                  <span>E-mail</span>
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="all-profile-wrp">
            <h2>List of user profiles</h2>
            {loader && <Loader />}
            <Search placeholder="search profile" allowClear onSearch={onSearch} style={{ width: 300 }} />
            <List
              itemLayout="vertical"
              size="small"
              pagination={{
                pageSize: 5,
              }}
              dataSource={profile}
              renderItem={item => (
                <List.Item
                  key={item.id}
                  extra={<PlusOutlined />}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={user_avatar} />}
                    title={`${item.lastName} ${item.lastName}`}
                    description={item.email}
                  />
                </List.Item>
              )}
            />
          </div>
        </>
      }
    </div>
  )
}

export default Profile;


