import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { logIn } from "../redux/actions/authAction";

import { Form, Input, Button, Alert } from "antd";
import Loader from "../elements/Loader";

import login from "../assets/image/log_in.jpg"

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "../assets/pages/login-page.css"


const LogIn = () => {

  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuth);
  const alert = useSelector(state => state.auth.error);
  const loader = useSelector(state => state.servise.loading);

  useEffect(() => {
    if (isAuth) {
      navigate("/transaction", { replace: true })
    }
  }, [isAuth]);

  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const logInSubmit = (values) => {
    dispatch(logIn(values))
    form.resetFields();
  };

  return (
    <div className="login-wrp">
      <div className="login-content">
        <img src={login} alt="login-pic" className="login-pic"></img>
        <div className="login-form-wrp">
          <div className="login-input-wrp">
            {alert && <Alert style={{ margin: "9px" }} message={alert.error_description} type="warning" />}
            <Form
              form={form}
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={logInSubmit}
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
              {loader && <Loader />}
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="signup-item">
            <Link to="/signup" >
              <Button type="primary" className="signup-btn">
                Create acount
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
