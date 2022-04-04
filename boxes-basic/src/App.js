import React, { useState } from "react";
import Boxes from "./Boxes";
import Box from "./Box";

function App() {
  const [boxes, setBoxes] = useState(Boxes);

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

  return <main>{boxData}</main>;
}

export default App;
