import React from "react";
import propTypes from "prop-types";

import "../assets/elements/button.css";

const Button = (props) => {

  const { children, className, onClick } = props;

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
  className: propTypes.string
}

export default Button;