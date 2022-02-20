import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import UsersList from "./UsersList";

import { allUserContacts, deleteContact } from "../redux/actions/contactAction";

import { List, Avatar, Input, Button, Popover, message } from "antd";
import Loader from "../elements/Loader";

import contact from "../assets/image/contacts.jpg"

import { DeleteOutlined } from "@ant-design/icons";
import user_avatar from "../assets/icons/user_avatar.svg";

import "../assets/components/contacts.css";
import "antd/dist/antd.css";


const Contacts = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUserContacts())
  }, []);
  
  const [show, setShow] = useState(false);
  const [newContact, setNewContact] = useState("");
  
  const contacts = useSelector(state => state.contact.contact);
  const servise = useSelector(state => state.servise);
  
  const showUsers = () => {
    setShow(!show)
  };
  
  const searchContact = (e) => {
    setNewContact(contacts.filter(el => el.email.includes(e.target.value)))
  };
  
  const delContact = (id) => {
    dispatch(deleteContact(id))
  };

  useEffect(() => {
    servise.message && message.success(servise.message)
    dispatch(allUserContacts())
  }, [servise.message])

  return (
    <div className="contacts-wrp">
      <div className="all-contact-wrp">
        <div className="contact-content">
          <img src={contact} alt="contacts-pic" className="contacts-pic"></img>
          <h2>List of contacts</h2>
        </div>
        {servise.loading && <Loader />}
        {(typeof(contacts) === "string")
          ? <h2>You dont have contacts yet</h2>
          : <>
            <Input placeholder="Search contact by email" allowClear onChange={searchContact} style={{ width: 250 }} />
            <List
              className="users-profile-list"
              itemLayout="vertical"
              size="small"
              pagination={contacts.length > 5 
                ? { pageSize: 5 }
                : false}
              dataSource={!newContact 
                ? contacts 
                : newContact}
              renderItem={item => (
                <List.Item
                  key={item.id}
                  extra={
                    <Popover content="Delete contact">
                      <DeleteOutlined onClick={() => delContact(item.user)} />
                    </Popover>
                  }
                >
                  <List.Item.Meta
                    avatar={<Avatar src={user_avatar} />}
                    title={`${item.firstName} ${item.lastName}`}
                    description={`${item.email}`}
                  />
                </List.Item>
              )}
            />
          </>
        }
        <div className="users-list-wrp">
          <div className="view-btn-wrp">
            <Button type="default" className="view-user-btn" onClick={showUsers}>
              {show
                ? "Hide users"
                : "View all users"}
            </Button>
          </div>
          {show && <UsersList />}
        </div>
      </div>
    </div>
  );
};

export default Contacts;




