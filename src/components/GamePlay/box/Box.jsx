import React from "react";
import "./Box.css";
const Box = (props) => {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: props.chosenColor }}
    ></div>
  );
};

export default Box;
