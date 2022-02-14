import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import UsersList from "./UsersList";

import { allUserContacts, deleteContact } from "../redux/actions/contactAction";

import { List, Avatar, Input, Button, Popover } from 'antd';
import Loader from "../elements/Loader";

import { DeleteOutlined } from '@ant-design/icons';

import "../assets/components/contacts.css";
import 'antd/dist/antd.css';

import user_avatar from "../assets/icons/user_avatar.svg";

const Contacts = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUserContacts())
  }, []);

  const [show, setShow] = useState(false);
  const [newContact, setNewContact] = useState('');

  const contacts = useSelector(state => state.contact.contact);
  const loader = useSelector(state => state.servise.loading);

  const showUsers = () => {
    setShow(!show);
    console.log(show)
  }

  const searchContact = (e) => {
    setNewContact(contacts.filter(el => el.email.includes(e.target.value)))
  }

  const delContact = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <div className="contacts-wrp">
      <div className="all-contact-wrp">
        <h2>List of contacts</h2>
        {loader && <Loader />}
        {(typeof (contacts) === "string")
          ? <h2>You dont have contacts yet</h2>
          : <>
            <Input placeholder="search profile" allowClear onChange={searchContact} style={{ width: 300 }} />
            <List
              className="users-profile-list"
              itemLayout="vertical"
              size="small"
              pagination={{ pageSize: 3 }}
              dataSource={!newContact 
                ? contacts 
                : newContact}
              renderItem={item => (
                <List.Item
                  key={item.id}
                  extra={
                    <Popover content="Add contact">
                      <DeleteOutlined onClick={() => delContact(item.user)} />
                    </Popover>
                  }
                >
                  <List.Item.Meta
                    avatar={<Avatar src={user_avatar} />}
                    title={`${item.firstName} ${item.lastName}`}
                    description={`${item.email} ${item.user}`}
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




