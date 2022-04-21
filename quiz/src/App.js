import React,{useState} from "react";
import Start from "./components/Start";
import Questions from "./components/Questions";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  function startToggle(){
    setStartQuiz(true)
  }

  return (
    <main>
      {!startQuiz && <Start startToggle={startToggle} />}
      {startQuiz && <Questions />}
    </main>
  );
}

export default App;
