import React , {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { Form, Input, Button, Alert } from "antd";
import Loader from "../elements/Loader";

import { newPass } from "../redux/actions/authAction";

import { LockOutlined } from "@ant-design/icons";

import "../assets/components/resset-password.css";
import "antd/dist/antd.css";
// import "../assets/elements/login-form.css"



const ResetPassword = () => {

  const navigate = useNavigate();
  const resset = useSelector(state => state.auth.resset);
  const alert = useSelector(state => state.auth.error);
  const loader = useSelector(state => state.servise.loading);

  useEffect(() => {
    if (resset) {
      navigate("/transaction", {replace: true})
    }
  }, [resset]);


  const dispatch = useDispatch();
  
  const [form] = Form.useForm();

  const formSubmit = (values) => {
    // console.log("bed data from modal",values)
    ressetPass(values);
    form.resetFields("");
  };

  const ressetPass = (values) => {
    dispatch(newPass(values))
  }

  return (
    <div className="resset-wrp">
      <div className="resset-form-wrp">
        <h3>Resset your password</h3>
      {alert && <Alert style={{margin: "9px"}} message={alert.msg} type="warning" />}
      
        <Form
          form={form}
          name="resset"
          className="resset-form"
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
          {loader && <Loader/>}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="resset-form-btn">
              Reset password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ResetPassword;



// TODO : Move to create user component