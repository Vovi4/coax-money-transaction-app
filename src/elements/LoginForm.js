import React from "react";
import propsType from "prop-types";

import { Form, Input, Button, 
  // Checkbox 
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "../assets/elements/login-form.css"


const LoginForm = (props) => {

  const [form] = Form.useForm();
  const { textInput, authSignIn } = props;

  const formSubmit = (values) => {
    // console.log("bed data from modal",values)
    authSignIn(values);
    form.resetFields("");
  };

  return (
    <div className="">
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
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
          ref={textInput} 
        />
      </Form.Item>
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
        <Input
          // prefix={<LockOutlined className="site-form-item-icon" />}
          // type="password"
          placeholder="First Name"
        />
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
        <Input
          // prefix={<LockOutlined className="site-form-item-icon" />}
          // type="password"
          placeholder="Last Name"
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
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Create account
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

LoginForm.propTypes = {
  textInput: propsType.any,
  // setItem: propsType.func,
  authSignIn: propsType.func
}

export default LoginForm;