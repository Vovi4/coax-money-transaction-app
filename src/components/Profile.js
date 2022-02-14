import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import UsersList from "./UsersList";

import { userProfile } from "../redux/actions/profileAction";

import Loader from "../elements/Loader";
import { Button } from "antd";

import "../assets/components/profile.css";
import "antd/dist/antd.css";

import avatar from "../assets/icons/avatar.svg"


const Profile = () => {

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(userProfile())
    }, []);

  const user = useSelector(state => state.profile.user_profile[0]);

  const showUsers = () => {
    setShow(!show)
  }

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
              <div className="view-btn-wrp">
                <Button type="default" className="view-user-btn" onClick={showUsers}>
                  {show 
                    ? "Hide user profile" 
                    : "View all users profile"}
                </Button>
              </div>
            </div>
          </div>
          <div className="list-wrp">
            {show && <UsersList />}
          </div>
        </>
      }
    </div>
  )
}

export default Profile;


