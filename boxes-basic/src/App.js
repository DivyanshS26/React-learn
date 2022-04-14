import React, { useState } from "react";
import Boxes from "./Boxes";
import Box from "./Box";
import {useStopwatch} from 'react-timer-hook'

function App() {
  const [boxes, setBoxes] = useState(Boxes);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });


  function toggleClick(id) {
    setBoxes((prevBox) => {
      return prevBox.map((box) => {
        return box.id === id ? {...box, on: !box.on} : box
      })
    })
  }

  const boxData = boxes.map((box) => (
    <Box 
      key={box.id} 
      id={box.id} 
      on={box.on} 
      toggle={() => toggleClick(box.id)}
    />
  ));

  return (
  <main>
    {boxData}
    <h1>{minutes}</h1><span>:</span><h1>{seconds}</h1>
    <button onClick={()=>{
     return reset(),pause()
    }} ></button>
    <button onClick={start} >start</button>
  </main>)
}

export default App;
