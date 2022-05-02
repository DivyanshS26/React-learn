import React, { useEffect, useState } from "react";
import Start from "./components/Start";
import Questions from "./components/Questions";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [pos, setPos] = useState([]);

  function startToggle() {
    setStartQuiz(true);
  }

  
  useEffect(() => {
    setPos(prevPos => {
      const ar = [];
      for(let i = 0; i < 5; i++){
        const posar = []
        for (let i = 0; i < 4; i++) {
          let x = Math.floor(Math.random() * 4);
          if (posar.includes(x)) {
            i = i - 1;
          } else {
            if (x < 4) {
              posar.push(x);
            }
          }
        }
        ar.push(posar)
      }
      return ar;
    })
  },[])
  

  const styles = {
    height: !startQuiz ? "100vh" : "100%",
  };
  return (
    <main style={styles}>
      {!startQuiz && <Start startToggle={startToggle} />}
      {startQuiz && <Questions startQuiz={startQuiz} pos={pos} />}
    </main>
  );
}

export default App;
