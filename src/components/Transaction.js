import React from "react";

import { Button } from "antd";

// import MyButton from "../elements/Button";

import { BsCurrencyBitcoin } from "react-icons/bs";
import { PlusOutlined } from '@ant-design/icons';

import "../assets/components/transaction.css";

import card from "../assets/image/credit_card.jpg";


const Transaction = () => {

  const createOwnTaransaction = () => {
    console.log("Create new transaction")
  };
 
  const viewTaransaction = () => {
    console.log("View taransaction")
  };

  return (
    <div>
      <h1>Helo USER !</h1>
      <h3>Welcome back</h3>
      <div className="balanse-wrp">
        <div className="amount-wrp">
          <h1>Your current balanse</h1>
          {/* TODO: add current balanse*/}
          <span><BsCurrencyBitcoin/>1000.00</span>
        </div>
        <img src={card} alt="card-pic" className="credit-card-pic"></img>
      </div>      
      <div>
        <Button type="primary"
          className={"create-trans-btn"}
           onClick={createOwnTaransaction}
         >
           <PlusOutlined />
           Create transaction
        </Button>
        <div className="transaction-wrp">
          {/* TODO: add list with user transactions*/}
          <ul>
            <li>transaction_1</li>
            <li>transaction_2</li>
            <li>transaction_3</li>
            <li>transaction_4</li>
            <li>transaction_5</li>
          </ul>
        </div>
        <Button 
          className={"create-trans-btn"}
           onClick={viewTaransaction}
         >
           View transaction
        </Button>
      </div>
    </div>
  );
};

export default Transaction;