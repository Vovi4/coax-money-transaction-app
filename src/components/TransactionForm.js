import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { createTransacrion } from "../redux/actions/transactionAction";

import { Form, Input, Button, Select, message } from "antd";

import "../assets/components/transaction-form.css";
import "antd/dist/antd.css";

const { Option } = Select;

const TransactionForm = (props) => {

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (values.amount <= props.balanse) {
      dispatch(createTransacrion(values))
    }
    else if (typeof(values.amount) !== "number") {
      message.error("Amount should be number")
    }
    else {
      message.error("Not enough money")
    }
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <div className="trans-form">
      {(typeof (props.contacts) === "string")
        ? <div className="trans-form-redir">
          <h2>You dont have contacts yet</h2>
          <Link to="/contacts">
            <span>Add contact</span>
          </Link>
        </div>
        : <>
          <Form form={form} name="transaction-form" onFinish={onFinish} className="form-item">
            <Form.Item
              name="amount"
              // label="Amount"

              rules={[
                {
                  required: true,
                  message: "Please input amount"
                },
                {
                  whitespace: true,
                  message: "E-mail shouldn't contain spaces!"
                },
                // {
                //   type: "number",
                //   message: "Should be a number"
                // }                
              ]}
            >
              <Input placeholder="Enter the amount" />
            </Form.Item>
            <Form.Item
              name="recipient"
              // label="Recipient"
              rules={[
                {
                  required: true,
                  message: "Please choose recipient"
                }
              ]}
            >
              <Select
                showSearch
                placeholder="Select a recipient"
              >
                {!props.contacts
                  ? <Option>You dont have contacts</Option>
                  : props.contacts.map(item => <Option key={item.user}>{item.firstName} {item.lastName}</Option>)
                }
              </Select>
            </Form.Item>
            <Form.Item >
              <div className="form-btn-wrp">
                <Button type="primary" htmlType="submit">
                  Confirm
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  Cancel
                </Button>
              </div>
            </Form.Item>
          </Form>
        </>
      }
    </div>
  )
}

TransactionForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  balanse: PropTypes.number
};
export default TransactionForm;





