import React from "react";
import { Link } from "react-router-dom";
// import { createRef } from "react";
// import { useDispatch } from "react-redux";

// import MyButton from "../elements/Button";
import { Button } from "antd";
// import LoginForm from "../elements/LoginForm";

// import { signUp } from "../redux/actions/authAction";

import "../assets/pages/home-page.css";

import image from "../assets/image/main_pic_1.jpg"
// import image_2 from "../assets/image/main_pic_2.jpg"
// import image_3 from "../assets/image/main_pic_3.jpg"
// import image_4 from "../assets/image/main_pic_4.jpg"


const Home = () => {

  // const [item, setItem] = useState();

  // const dispatch = useDispatch();
  // console.log(state)

  // let textInput = createRef();

  // const focusTextInput = () => {
  //   textInput.current.focus()
  // }

  // const authSignIn = (values) => {
  //   dispatch(signUp(values))
  // }

  return (
    <div className="home-page-wrp">
      <div className="main-content-wrp">
        <div className="main-discript">
          <p className="main-item">Free payment <br /> processing to <br /> help everyone <br />easily transfer money</p>
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
      {/* <div className="main-content-wrp">
        <img src={image_2} alt="main-pic" className="main-pic"></img>
        <div className="main-discript">
          <p className="main-item">Free payment <br /> processing to <br /> help everyone <br />easily transfer money</p>
        </div>
      </div>
      <div className="main-content-wrp">
        <div className="main-discript">
          <p className="main-item">Free payment <br /> processing to <br /> help everyone <br />easily transfer money</p>
        </div>
        <img src={image_4} alt="main-pic" className="main-pic"></img>
      </div>
      <div className="auth-form">
        <LoginForm
          textInput={textInput}
          // setItem={setItem}
          authSignIn={authSignIn}
        />
     </div> */}
    </div>
  );
}

export default Home;