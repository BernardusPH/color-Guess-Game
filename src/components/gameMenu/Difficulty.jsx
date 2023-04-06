import React from "react";
import Button from "../UI/Button.jsx";
const Difficulty = (props) => {
  return (
    <div className="difficulty-container">
      <p>Adds and removes amount of buttons to choose from (3 is the minimum and 10 is maximum)</p>
      <div className="difficulty-button-container">
        <Button id="decrease" onClick={props.handleDifficulty}>
          decrease
        </Button>
        <span className="difficulty-rating">{props.difficultyRating}</span>
        <Button id="increase" onClick={props.handleDifficulty}>
          Increase
        </Button>
      </div>
    </div>
  );
};

export default Difficulty;
