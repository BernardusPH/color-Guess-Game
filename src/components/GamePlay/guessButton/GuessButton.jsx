import React from "react";
import Button from "../../UI/Button";

const GuessButton = (props) => {
  return (
    <>
     {props.colorManagement.colors.map((item,index)=>{
        return <Button id={index}  key={index} onClick={props.handleGameResult}>{item}</Button>
     })}
    </>
  );
};

export default GuessButton;
