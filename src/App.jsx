import { useState } from "react";
import Menu from "./components/gameMenu/Menu";
import MainGame from "./components/GamePlay/MainGame";
import colorGenerate from "./color-generator";
import "./App.css";

function App() {
  const [gameMenu, setGameMenu] = useState({ show: true, touched: false });
  const [colorManagement, setColorManagement] = useState({
    colors: [],
    choice: "",
    colorType: "",
    difficulty: "",
  });

  const handleGameStart = (colorType, difficulty) => {
    setGameMenu({ show: false, touched: true });

    //uses the colorManagement state to make the game
    colorGenerate(setColorManagement, colorType, difficulty);
  };

  const menuShowHandle = () => {
    setGameMenu((prev) => ({
      ...prev,
      show: true,
    }));
  };
  console.log(colorManagement);
  return (
    <main>
      {gameMenu.show ? (
        <Menu
          gameMenu={gameMenu}
          handleGameStart={handleGameStart}
          colorManagement={colorManagement}
        />
      ) : (
        <MainGame
          showMenu={menuShowHandle}
          handleGameStart={handleGameStart}
          colorManagement={colorManagement}
        />
      )}
    </main>
  );
}

export default App;
