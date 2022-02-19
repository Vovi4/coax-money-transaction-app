import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { List, Avatar, Input, Popover } from 'antd';
import Loader from "../elements/Loader";

import { allUsersProfile } from "../redux/actions/profileAction";
import { createContact } from "../redux/actions/contactAction";

import "../assets/components/users-list.css";
import "antd/dist/antd.css";

import { PlusOutlined } from "@ant-design/icons";

import user_avatar from "../assets/icons/user_avatar.svg";


const UsersList = () => {

  const dispatch = useDispatch();

  const profile = useSelector(state => state.profile.profile);
  const loader = useSelector(state => state.servise.loading);
  // const user = useSelector(state => state.profile.user_profile[0]);

  const [newProfile, setNewProfile] = useState('');

  const searchProfile = (e) => {
    setNewProfile(profile.filter(el => el.email.includes(e.target.value)))
  }

  useEffect(() => {
    dispatch(allUsersProfile());
  }, []);

  const addContact = (id) => {
    dispatch(createContact(id))
  }


  return (
    <div className="all-profile-wrp">
      <h2>List of user profiles</h2>
      {loader && <Loader />}
      <Input placeholder="Search profile" allowClear onChange={searchProfile} style={{ width: 250 }} />
      <List
        className="users-profile-list"
        itemLayout="vertical"
        size="small"
        pagination={profile.length > 5 
          ? { pageSize: 5 }
          : false}
        dataSource={!newProfile 
          ? profile 
          : newProfile}
        renderItem={item => (
          <List.Item
            key={item.id}
            extra={
              <Popover content="Add contact">
                <PlusOutlined onClick={() => addContact(item.user)} />
              </Popover>
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={user_avatar} />}
              title={`${item.firstName} ${item.lastName}`}
              description={item.email}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default UsersList;

