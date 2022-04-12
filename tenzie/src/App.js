import React, { useState, useEffect } from "react";
import Die from "./components/Die";
import { v4 as uuidv4 } from "uuid";
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    //better approach

    const allisHeld = dice.every(die => die.isHeld)
    const firstVal = dice[0].value
    const allSameVal = dice.every(die => die.value === firstVal)

    if(allisHeld && allSameVal){
      setTenzies(true)
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
  }, [dice])

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
  }

  function rollHandler() {
    if(tenzies){
      setDice(allNewDice())
      setTenzies(false)
    }else{
      setDice((prevDice) =>
        prevDice.map((die) => {
          return !die.isHeld ? generateNewDie() : die;
        })
      )
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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice">{diceComponent}</div>
      <button onClick={rollHandler}>{tenzies? "New Game":"Roll"}</button>
      {tenzies && <Confetti/> }
    </main>
  );
}

export default App;
