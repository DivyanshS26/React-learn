import React, { useState, useEffect } from "react";
import Die from "./components/Die";
import { v4 as uuidv4 } from "uuid";
import Confetti from "react-confetti";
import { useStopwatch } from "react-timer-hook";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rollCount, setRollCount] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [currentScore, setCurrentScore] = useState({minute:59,second:59})
  const { seconds, minutes, reset, pause } = useStopwatch({
    autoStart: false,
  });
  const [bestScore, setBestScore] = useState(
    () =>
      JSON.parse(localStorage.getItem("bestScore")) || {
        minute: 59,
        second: 59,
      }
  );

  useEffect(() => {
    //better approach

    const allisHeld = dice.every((die) => die.isHeld);
    const firstVal = dice[0].value;
    const allSameVal = dice.every((die) => die.value === firstVal);

    if (allisHeld && allSameVal) {
      pause();
      setCurrentScore(prevScore => {
        return {...prevScore, minute :minutes, second: seconds} 
      })
      setTenzies(true);
    }

    /* another approach
    const val = dice[0].value;
    let flag = 0;
    for(let i = 1; i < dice.length - 1; i++){
      if(dice[i].value !== val){
        flag++;
      }else if (!dice[i].isHeld){
        flag++;
      }
    }
    setTenzies(flag === 0 ? true : false)
    tenzies && console.log("You Won")*/
  }, [dice]);

  const buttonPlace = tenzies ? "New Game" : "Roll";

  useEffect(() => {
    localStorage.setItem("bestScore", JSON.stringify(bestScore));
    if (bestScore.minute > currentScore.minute) {
      setBestScore((prevTime) => ({
        ...prevTime,
        minute: currentScore.minute,
        second: currentScore.second,
      }));
    } else if (bestScore.minute === minutes && bestScore.second > seconds) {
      setBestScore((prevTime) => ({ ...prevTime, second: currentScore.second }));
    }
  }, [buttonPlace]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: uuidv4(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    );
    isStart && reset();
    setIsStart(false);
  }

  function rollHandler() {
    if (tenzies) {
      setDice(allNewDice());
      setTenzies(false);
      setRollCount(0);
      setIsStart(true);
      reset();
      pause();
      console.log(currentScore);
    } else {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return !die.isHeld ? generateNewDie() : die;
        })
      );
      setRollCount((prevCount) => prevCount + 1);
      isStart && reset();
      setIsStart(false);
    }
  }

  const diceComponent = dice.map((dieData) => (
    <Die
      key={dieData.id}
      id={dieData.id} //this one
      value={dieData.value}
      isHeld={dieData.isHeld}
      holdDice={holdDice}
      // 2nd way to pass holdDice with id would be
      // holdDice={() => holdDice(dieData.id)}
      // then we don't have to pass above id and accept in Die component directly without
      // creating a function go to Die component to see better
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="best-time">
        <h2>
          Best Time: {
            bestScore.minute === 59 && bestScore.second === 59 ?
              "No Best Score" :
              `${bestScore.minute}:${bestScore.second}`
            }
        </h2>
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice">{diceComponent}</div>
      <button onClick={rollHandler}>{buttonPlace}</button>
      <div className="roll-count">
        <h2>
          Number of Rolls : <span>{rollCount}</span>
        </h2>
      </div>
      <div className="timer">
        <h2>
          Timer: {minutes}:{seconds}
        </h2>
      </div>
    </main>
  );
}

export default App;
