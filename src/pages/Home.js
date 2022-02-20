import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";

import image from "../assets/image/main_pic.jpg"

import "../assets/pages/home-page.css";


const Home = () => {

  return (
    <div className="home-page-wrp">
      <div className="main-content-wrp">
        <div className="main-discript">
          <p className="main-item-discript">Free payment <br /> processing to <br /> help everyone <br />easily transfer <br />money</p>
          <div className="main-btn-wrp">
          <Link to="signup">   
            <Button type="primary" className="start-now-btn">
              START NOW
            </Button>
          </Link>        
            <span className="btn-title">Instant, innovative <br /> payment solution</span>
          </div>
        </div>
        <img src={image} alt="main-pic" className="main-pic"></img>
      </div>
    </div>
  );
}

export default Home;