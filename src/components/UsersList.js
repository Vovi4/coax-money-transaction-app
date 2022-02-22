import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { List, Avatar, Input, Popover } from "antd";
import Loader from "../elements/Loader";

import { allUsersProfile } from "../redux/actions/profileAction";
import { createContact } from "../redux/actions/contactAction";

import { PlusOutlined } from "@ant-design/icons";

import user_avatar from "../assets/icons/user_avatar.svg";

import "../assets/components/users-list.css";


const UsersList = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(allUsersProfile());
  }, []);

  const [newProfile, setNewProfile] = useState("");

  const profile = useSelector(state => state.profile.profile);
  const loader = useSelector(state => state.servise.loading);

  const user_id = localStorage.getItem("id");
  
  const profileList = profile.filter(el => el.user !== user_id)
 
  const searchProfile = (e) => {
    setNewProfile(profileList.filter(el => el.email.includes(e.target.value)))
  };

  const addContact = (id) => {
    dispatch(createContact(id))
  };


  return (
    <div className="all-profile-wrp">
      <h2>List of user profiles</h2>
      {loader && <Loader />}
      <Input placeholder="Search profile by email" allowClear onChange={searchProfile} style={{ width: 250 }} />
      <List
        className="users-profile-list"
        itemLayout="vertical"
        size="small"
        pagination={profileList.length > 5 
          ? { pageSize: 5 }
          : false}
        dataSource={!newProfile 
          ? profileList 
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

