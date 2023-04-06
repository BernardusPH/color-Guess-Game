import React, { useState } from "react";
import Button from "../UI/Button.jsx";
import ColorPickSetting from "./ColorPickSetting.jsx";
import Difficulty from "./Difficulty.jsx";
import "./Menu.css";

const Menu = (props) => {
  const [colorPick, setColorPick] = useState(
    props.colorManagement.colorType || "RGB"
  );
  const [difficulty, setDifficulty] = useState(
    props.colorManagement.difficulty || 3
  );

  const handleColorPick = (color) => {
 
    switch (color) {
      case "RGB":
        setColorPick("HEX");
        break;
      case "HEX":
        setColorPick("HSL");
        break;
      default:
        setColorPick("RGB");
    }
  };
  const handleDifficulty = (buttonId) => {
    if (buttonId === "decrease" && difficulty !== 3) {
      setDifficulty((prevState) => {
        return --prevState;
      });
    } else if (buttonId === "increase" && difficulty !== 10) {
      setDifficulty((prevState) => {
        return ++prevState;
      });
    }
  };
  const handleStartClick = () => {
    props.handleGameStart(colorPick, difficulty);
  };
 const handleReset=()=>{
  localStorage.removeItem("score")
 }
  return (
    <div className="menu">
      <h1>This Is A Color Guessing Game</h1>
      <h3>
        These are the settings. The menu does generate a new color but won't
        reset the score
      </h3>
      <ColorPickSetting
        colorPick={colorPick}
        handleColorPick={handleColorPick}
      />
      <Difficulty
        difficultyRating={difficulty}
        handleDifficulty={handleDifficulty}
      />
      <Button onClick={handleStartClick}>
        {props.gameMenu.touched ? "Back To Game" : "Start Game"}
      </Button>
      <br />
      <Button onClick={handleReset} disable={!props.gameMenu.touched}>
        Reset Score
      </Button>
    </div>
  );
};

export default Menu;
