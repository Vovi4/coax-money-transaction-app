import React from "react";
import loader from "../assets/icons/loader.svg";

import "../assets/elements/loader.css";

const Loader = () => {
  return (
    <div className="loader-wrp">
      <img 
      className="loader"
      src={loader} alt="loader"></img>
    </div>
  )
}

export default Loader;