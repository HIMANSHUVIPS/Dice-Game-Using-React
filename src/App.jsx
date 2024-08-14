import React from "react";
import styles from "./App.module.css";
import main_img from "./assets/dices 1.png";
import LandingPage from "./components/LandingPage";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const handleGamePlay = () => {
    setIsGameStarted((val) => !val);
  };
  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <LandingPage main_img={main_img} handleGamePlay={handleGamePlay} />
      )}
    </>
  );
};

export default App;
