import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { createUser } from "../redux/actions/authAction";

import { Form, Input, Button } from "antd";
import Loader from "../elements/Loader";

import profile from "../assets/image/profile.jpg"

import "../assets/pages/create-profile-page.css";
import "antd/dist/antd.css";


const CreateProfile = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuth);
  const loader = useSelector(state => state.servise.loading);

  useEffect(() => {
    if (isAuth) {
      navigate("/login", { replace: true })
      // navigate("/transaction", { replace: true })
    }
  }, [isAuth]);

  const userData = useSelector(state => state.auth.user);
  const { token, id, email } = userData;

  const [form] = Form.useForm();

  const formSubmit = (values) => {
    const { firstName, lastName } = values
    dispatch(createUser({ token, id, email, firstName, lastName }))
    form.resetFields("");
  };

  return (
    <div className="user-create-wrp">
      <div className="user-create-content">
        <img src={profile} alt="profile-pic" className="profile-pic"></img>
        <div className="user-form-wrp">
          <h3>Please create your profile</h3>
          <Form
            form={form}
            name="user-create"
            className="user-create-form"
            initialValues={{ remember: true }}
            onFinish={formSubmit}
          >

            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
                {
                  min: 4,
                  message: "First Name should contain more then 3 symbols!"
                },
                {
                  whitespace: true,
                  message: "First Name shouldn't contain spaces!"
                }
              ]}
              hasFeedback
            >
              <Input placeholder="First Name" />
            </Form.Item>

            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name!",
                },
                {
                  min: 4,
                  message: "Last Name should contain more then 3 symbols!"
                },
                {
                  whitespace: true,
                  message: "Last Name shouldn't contain spaces!"
                }
              ]}
              hasFeedback
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            {loader && <Loader />}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="user-create-form-btn">
                Create account
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
