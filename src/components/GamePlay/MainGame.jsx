import React, { useState } from "react";
import Box from "./box/Box";
import GuessButton from "./guessButton/GuessButton.jsx";
import Button from "../UI/Button.jsx";
import "./MainGame.css"

const MainGame = (props) => {
  const [gameStats, setGameStats] = useState({
    text: "Please Choose The Correct Color",
    score: localStorage.getItem("score") || 0,
  });

  const handleGameResult = (userChoice) => {
    if (Number(userChoice) === props.colorManagement.choice) {
      setGameStats((prev) => ({
        text: "You Won, Choose Again",
        score: ++prev.score,
      }));
    } else {
      setGameStats({
        text: "You Lost,Try Again",
        score: 0,
      });
    }

    props.handleGameStart(
      props.colorManagement.colorType,
      props.colorManagement.difficulty
    );
  };
  localStorage.setItem("score", gameStats.score);
  let chosenColor = props.colorManagement.colors[props.colorManagement.choice];
  return (
    <div className="gameScreen">
      <h1>{gameStats.text}</h1>
      <h2>Score(wins in a row): {gameStats.score}</h2>
      <Button onClick={props.showMenu} >Menu</Button>
      <Box chosenColor={chosenColor} />
      <div className="Guess-btn-container">
        <GuessButton
          handleGameResult={handleGameResult}
          colorManagement={props.colorManagement}
        />
      </div>
     
    </div>
  );
};

export default MainGame;
