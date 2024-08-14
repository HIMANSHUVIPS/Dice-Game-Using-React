import React, { useState } from "react";
import styles from "./GamePlay.module.css";
import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";

const GamePlay = () => {
  // Array contain numbers for selecting
  const dice_array = [1, 2, 3, 4, 5, 6];
  // Array containging dice images
  const dice_img = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [selectedNumber, setSelectedNumber] = useState("");
  const [randomDice, setRandomDice] = useState(dice1);
  const [randomIndex,setRandomIndex] = useState(null);
  const [score,setScore]= useState(0);
  const [rules,setRules] = useState(false);
  const [warning,setWarning] = useState("");
  // This function generate random number for selecting a number 
  const handleNumClick = (e) => {
    // console.log(e.target.innerText);
    const number = e.target.innerText;
    setSelectedNumber(number);
    setWarning("");
  };
  // This function generate random dice image
  const handleRandomDice = () => {
    const index = Math.floor(Math.random() * dice_img.length);
    const randomDiceImage = dice_img[index];
    setRandomDice(randomDiceImage);
    setRandomIndex(index);
    return index;
    
  };
  // This Function manage the score
  const handleScore = () => {
    const index = handleRandomDice();
    // console.log("oye ye h index"+index);
    if (selectedNumber == index+1) {
      setScore((prev)=>prev+1);
    }
    else{
      setScore((prev)=>prev-1)
    }
  };
  const handleDiceClick = () => {
    if(!selectedNumber)
    {
      setWarning("You have not selected any number!!")
    }
    else
    {
    handleRandomDice();
    handleScore();
    }
  }
  const handleReset = () => {
    setScore(0);
  }
  const handleShowRules = () => {
    setRules((val)=>!val)
  }
  return (
    <div className={styles.container}>
      <div className={styles.number}>
        <div className={styles.score}>
          <h1>{score}</h1>
          <h2>Total Score</h2>
        </div>
        <div className={styles.selectNum}>
        <p className={styles.warning}>{warning}</p>
          <div className={styles.numbers}>
            {/* MAp the buttons */}
            {dice_array.map((item) => (
              <div
                className={`${styles.num} ${
                  selectedNumber == item ? styles.selected : ""
                }`}
                onClick={handleNumClick}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <div className={styles.select}>
            <h2>Select Number</h2>
          </div>
        </div>
      </div>
      <div className={`${styles.dice} ${rules ? styles.small:""} `}>
        <div className={`${styles.dice_img} ${rules ? styles.small_img:""}`}>
          <img src={randomDice} alt="" onClick={handleDiceClick}/>
        </div>
        <h3>Click On Dice to Roll</h3>
        <div className={styles.dice_btn}>
          <button type="button" className={styles.reset_btn} onClick={handleReset}>
            Reset Score
          </button>
          <button type="button" className={styles.rule_btn} onClick={handleShowRules}>
            Show Rules
          </button>
        </div>
      </div>
      <div className={`${styles.rules} ${rules ? styles.show : styles.hide}`}>
        <div className={styles.ruleHeading}>
          <h1>How To Play Dice Game</h1>
        </div>
        <ul>
          <li>Select any number</li>
          <li>Click on the dice Image</li>
          <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
          <li>if you get wrong guess then  2 point will be dedcuted </li>
        </ul>
      </div>
    </div>
  );
};

export default GamePlay;
