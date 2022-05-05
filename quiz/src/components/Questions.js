import React, { useState, useEffect } from "react";
import { decode } from "html-entities";
import { v4 as uuidv4 } from "uuid";
import Options from "./Options";

const Questions = (props) => {
  const [question, setQuestion] = useState([]);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [checker, setChecker] = useState([]);
  const [score, setScore] = useState(-1);
  const [display, setDisplay] = useState(false);
  const [replay, setReplay] = useState(props.startQuiz)
  const [chk, setChk] = useState([]);
  const [ansShow, setAnsShow] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestion(data.results));
  }, [replay]);

  useEffect(() => {
    setOptions((option) => {
      let answer = [];
      for (let i = 0; i < question.length; i++) {
        answer.push({
          correct: decode(question[i].correct_answer),
          incorrect1: decode(question[i].incorrect_answers[0]),
          incorrect2: decode(question[i].incorrect_answers[1]),
          incorrect3: decode(question[i].incorrect_answers[2]),
          id: uuidv4(),
        });
      }
      return [answer];
    });
  }, [question]);

  useEffect(() => {
    setSelected((select) => {
      let answer = [];
      for (let i = 0; i < question.length; i++) {
        var obj = {};
        obj[decode(question[i].correct_answer)] = false;
        obj[decode(question[i].incorrect_answers[0])] = false;
        obj[decode(question[i].incorrect_answers[1])] = false;
        obj[decode(question[i].incorrect_answers[2])] = false;
        answer.push(obj);
      }
      return answer;
    });
  }, [question]);

  function checking() {
    setChecker((chk) => {
      let arr = [];
      for (let i = 0; i < selected.length; i++) {
        const keys = Object.keys(selected[i]);
        arr.push(keys.filter((key) => selected[i][key]));
      }
      return arr;
    });
    setDisplay(true)
    setAnsShow(true);
    console.log("check");
  }
  useEffect(() => {
    if (typeof checker !== undefined && checker.length !== 0) {
      setScore(0);
      let arr = [];
      for (let i = 0; i < 5; i++) {
        if (checker[i][0] === question[i].correct_answer) {
          setScore((prevScore) => prevScore + 1);
          arr.push(true);
        }else{
          arr.push(false);
        }
      }
      setChk(arr)
    }
  }, [checker]);
  useEffect(() => {
    if (score !== -1) {
      console.log(score);
      setDisplay(true);
    }
  },[score])

  function playAgain(){
    setDisplay(false)
    setReplay(prev => !prev)
    setAnsShow(false)
  }

  function optionSelect(event, i) {
    const key = event.target.value;
    setSelected((select) => {
      let arr = [];
      for (let j = 0; j < selected.length; j++) {
        if (j === i) {
          Object.keys(selected[i]).forEach((v) => (selected[i][v] = false));
          let obj = {};
          obj[key] = !selected[i][key];
          Object.assign(selected[i], obj);
          arr.push(selected[i]);
        } else {
          arr.push({
            ...selected[j],
          });
        }
      }
      return arr;
    });
  }
  if (typeof options[0] !== "undefined" && options[0].length > 0) {
    var trivia = question.map((data, i) => {
      return (
        <div key={uuidv4()}>
          <h2>{decode(data.question)}</h2>
          <Options
            option={options[0][i]}
            index={i}
            select={optionSelect}
            pos={props.pos[i]}
            selected={selected[i]}
            chk = {chk[i]}
            ans = {ansShow}
          />
          <hr className="line" />
        </div>
      );
    });
  }

  return (
    <div className="questions">
      {trivia}
      {!display && <button className="check-button" onClick={checking}>
        Check Answers
      </button>}
      {display && <div className="score-display">
        <h2>You scored {score}/5 correct answers</h2>
        <button onClick={playAgain}>Play Again</button>
      </div>}
    </div>
  );
};

export default Questions;

// function optionSelect(id, event) {
//   console.log(event.target.value);
//   console.log(id);
//   setIsSelected(true);
// }

// const styles = {
//   backgroundColor: isSelected ? "#D6DBF5" : "transparent",
// };

// const answers = [
//   decode(data.correct_answer),
//   decode(data.incorrect_answers[0]),
//   decode(data.incorrect_answers[1]),
//   decode(data.incorrect_answers[2]),
// ];

// function randomPos() {
//   const arr = [];
//   for (let i = 0; i < 4; i++) {
//     let x = Math.floor(Math.random() * 4);
//     if (arr.includes(x)) {
//       i = i - 1;
//     } else {
//       if (x < 4) {
//         arr.push(x);
//       }
//     }
//   }
//   return arr;
// }

// const pos = randomPos();

/* <button
          className="option-buttons"
          id="1"
          value={decode(answers[pos[0]])}
          onClick={(event) => optionSelect(id, event)}
        >
          {decode(answers[pos[0]])}
        </button>
        <button
          className="option-buttons"
          value={decode(answers[pos[1]])}
          id="2"
          onClick={optionSelect}
        >
          {answers[pos[1]]}
        </button>
        <button
          className="option-buttons"
          value={decode(answers[pos[2]])}
          id="3"
          onClick={optionSelect}
        >
          {answers[pos[2]]}
        </button>
        <button
          className="option-buttons"
          value={decode(answers[pos[3]])}
          id="4"
          onClick={optionSelect}
        >
          {answers[pos[3]]}
        </button> */
