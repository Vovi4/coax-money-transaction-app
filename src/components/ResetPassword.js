import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Input, Button, Alert, message } from "antd";
import Loader from "../elements/Loader";

import { newPass } from "../redux/actions/authAction";

import reset from "../assets/image/reset.jpg"

import { LockOutlined } from "@ant-design/icons";

import "../assets/components/resset-password.css";


const ResetPassword = () => {

  const dispatch = useDispatch();
  const alert = useSelector(state => state.auth.error); 
  const servise = useSelector(state => state.servise);

  const [form] = Form.useForm();

  const formSubmit = (values) => {
    ressetPass(values);
    form.resetFields("");
  };

  const ressetPass = (values) => {
    dispatch(newPass(values))
  }

  useEffect(() => {
    servise.message && message.success(servise.message)
  }, [servise.message])

  return (
    <div className="reset-wrp">
      <div className="reset-content">
        <img src={reset} alt="reset-pic" className="reset-pic"></img>
        <div className="reset-form-wrp">
          <h3>Resset your password</h3>
          {alert && <Alert style={{ margin: "9px" }} message={alert.msg} type="warning" />}       
          <Form
            form={form}
            name="reset"
            className="reset-form"
            initialValues={{ remember: true }}
            onFinish={formSubmit}
          >
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
            {servise.loading && <Loader />}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="reset-form-btn">
                Reset password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
