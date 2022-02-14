import React from "react";
// import { useDispatch, useSelectot } from "react-redux";
import { useEffect } from "react";

import { List, Avatar, Input, 
  // Popover 
} from 'antd';
// import Loader from "../elements/Loader";

// import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import "../assets/components/contacts.css";
import 'antd/dist/antd.css';

import avatar from "../assets/icons/contact_avatar.svg";

const Contacts = () => {

  // const dispatch = useDispatch();

  // const contacts = useSelectot(state => state.contact.all);
  // const loader = useSelectot(state => state.servise.loading);

  const { Search } = Input;
  const onSearch = value => console.log(value);

  useEffect(() => {
    // dispatch(allContact())
  }, [])


  // const addContent = () => {
  //   console.log("Add contact")
  // };

  // const deeteContact = () => {
  //   console.log("Delete contact")
  // };

  // const add = (
  //   <p>Create contact</p>
  // );

  // const del = (
  //   <p>Delete contact</p>
  // );


  return (
    <div className="contacts-wrp">
      <div className="all-contact-wrp">
        <h2>List of contacts</h2>
        {/* {loader && <Loader />} */}
        <Search placeholder="search contact" allowClear onSearch={onSearch} style={{ width: 300 }} />
        <List
          itemLayout="vertical"
          size="small"
          pagination={{
            pageSize: 5,
          }}
          // dataSource={contacts}
          renderItem={item => (
            <List.Item
              key={item.id}
              extra={
                // <Popover content={add} >
                //   <PlusOutlined onClick={addContact} />
                // <Popover />
                {/* <Popover content={del} >
                  <DeleteOutlined className={deeteContact} />
                <Popover /> */}

              }
            >
              <List.Item.Meta
                avatar={<Avatar src={avatar} />}
                title={`${item.lastName} ${item.lastName}`}
                description={item.email}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Contacts;
