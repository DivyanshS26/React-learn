import React,{useState} from "react";
import Start from "./components/Start";
import Questions from "./components/Questions";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  function startToggle(){
    setStartQuiz(true)
  }
  const styles = {
    height : !startQuiz ? "100vh" : "100%" 
  }
  return (
    <main style={styles}>
      {!startQuiz && <Start startToggle={startToggle} />}
      {startQuiz && <Questions startQuiz = {startQuiz} />}
    </main>
  );
}

export default App;
