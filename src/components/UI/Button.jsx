import React from "react";
import "./Button.css";
const Button = (props) => {
  const handleClick = (e) => {
    props.onClick(e.target.id);
  };

  return (
    <button disabled={props.disable|| ""} id={props.id !== "" && props.id} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
