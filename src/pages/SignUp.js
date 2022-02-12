import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { Form, Input, Button, Alert } from "antd";
import Loader from "../elements/Loader";

import { signUp } from "../redux/actions/authAction";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "../assets/pages/signup-page.css";
import "antd/dist/antd.css";
// import "../assets/elements/login-form.css"



const SignUp = () => {

  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user.id);
  const alert = useSelector(state => state.auth.error);
  const loader = useSelector(state => state.servise.loading);

  useEffect(() => {
    if (user) {
      navigate("/create_profile", {replace: true})
    }
  }, [user]);


  const dispatch = useDispatch();
  // console.log(state)

  const [form] = Form.useForm();

  const formSubmit = (values) => {
    console.log("bed data from modal",values)
    authSignIn(values);
    form.resetFields("");
  };

  const authSignIn = (values) => {
    dispatch(signUp(values))
  }

  return (
    <div className="signup-wrp">
      <div className="signup-form-wrp">
      {alert && <Alert style={{margin: "9px"}} message={alert.msg} type="warning" />}
        <Form
          form={form}
          name="signup"
          className="signup-form"
          initialValues={{ remember: true }}
          onFinish={formSubmit}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your E-mail!"
              },
              {
                whitespace: true,
                message: "E-mail shouldn't contain spaces!"
              },
              {
                type: "email"
              },
            ]}
            hasFeedback
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="E-mail"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                min: 6,
                message: "Password should contain more then 6 symbols!"
              },
              {
                whitespace: true,
                message: "Password shouldn't contain spaces!"
              }
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords does not match."
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm password"
            />
          </Form.Item>
          {loader && <Loader/>}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="signup-form-btn">
              Create account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;



// TODO : Move to create user component