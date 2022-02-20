import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import TransactionForm from "../components/TransactionForm";

import { userProfile } from "../redux/actions/profileAction";
import { allUserContacts } from "../redux/actions/contactAction";
import { getAllTransaction } from "../redux/actions/transactionAction";
import { allUsersProfile } from "../redux/actions/profileAction";

import Loader from "../elements/Loader";
import { Button, List, message } from "antd";

import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

import card from "../assets/image/credit_card.jpg";
import avatar from "../assets/icons/avatar.svg"
import coins from "../assets/icons/coins.svg"

import "../assets/components/transaction.css";


const Transaction = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile())
    dispatch(getAllTransaction())
    dispatch(allUsersProfile());
  }, []);

  const [balanse, setBalanse] = useState(0);
  const [form, setForm] = useState(false);

  const user = useSelector(state => state.profile.user_profile[0]);
  const allUsers = useSelector(state => state.profile.profile);
  const contacts = useSelector(state => state.contact.contact);
  const transaction = useSelector(state => state.transaction.transaction);
  const confirm = useSelector(state => state.servise.message);

  const user_id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(allUserContacts())
  }, [form]);

  const showForm = () => {
    setForm(!form)
  };

  useEffect(() => {
    let result = []

    transaction.map(item => {
      if (item.from === item.to) {
        result.push(item.amount)
      } else if (item.to === user_id) {
        result.push(item.amount)
      } else if (item.from === user_id) {
        result.push(-item.amount)
      }
    })

    setBalanse(result.reduce(function (sum, current) {
      return sum + current
    }, 0))
  }, [transaction]);

  useEffect(() => {
    confirm && message.success(confirm)
    dispatch(userProfile())
    dispatch(getAllTransaction())
  }, [confirm]);

  return (
    <div className="transaction-wrp">
      {!user
        ? <Loader />
        : <>
          <div className="user-header-wrp">
            <img src={avatar} alt="avatar" className="user-avatar-trans"></img>
            <div className="user-discr">
              <h2>{user.firstName} {user.lastName} !</h2>
              <span>Welcome back</span>
            </div>
          </div>
          <div className="balanse-wrp">
            <div className="trans-block">
              <div className="amount-wrp">
                <img src={coins} alt="coins" className="user-coins"></img>
                <div className="user-balance">
                  <h3>Your balanse</h3>
                  <span className="amount">$ {balanse}</span>
                </div>
              </div>
              <Button type="primary"
                className="create-trans-btn"
                onClick={showForm}
              >
                {!form ? "Create transaction" : "Hide form"}
              </Button>
            </div>
            <img src={card} alt="card-pic" className="credit-card-pic"></img>
          </div>
          <div className="trans-wrp">
            <div className="trans-form-wrp">
              {form && <TransactionForm contacts={contacts} balanse={balanse} />}
            </div>
            <div className="trans-list-wrp">
              <h3>Transactions</h3>
              {(typeof (transaction) === "string")
                ? <h2>You dont have transactions yet</h2>
                : <>
                  <List
                    className="trans-list"
                    itemLayout="vertical"
                    size="small"
                    pagination={transaction.length > 5
                      ? { pageSize: 5 }
                      : false}
                    dataSource={transaction}
                    renderItem={item => (
                      <List.Item
                        className="trans-list-item"
                        key={item.id}
                      >
                        <List.Item.Meta
                          avatar={
                            item.from === user_id
                              ? <BsFillArrowRightCircleFill className="trans-to-icon" />
                              : <BsFillArrowLeftCircleFill className="trans-from-icon" />
                          }
                          title={
                            item.from === user_id
                              ? allUsers.map(data => item.to === data.user && `${data.firstName} ${data.lastName}`)
                              : allUsers.map(data => item.from === data.user && `${data.firstName} ${data.lastName}`)
                          }
                          description={
                            item.from === item.to
                              ? +item.amount
                              : item.from === user_id
                                ? -item.amount
                                : +item.amount
                          }
                        />
                      </List.Item>
                    )}
                  />
                </>
              }
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Transaction;