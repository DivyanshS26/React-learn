import React, { useState, useEffect } from "react";
import { decode } from "html-entities";
import { v4 as uuidv4 } from "uuid";
import Options from "./Options";

const Questions = (props) => {
  const [question, setQuestion] = useState([]);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestion(data.results));
  }, [props.startQuiz]);

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
        var obj = {}
        obj[decode(question[i].correct_answer)] = false;
        obj[decode(question[i].incorrect_answers[0])] = false;
        obj[decode(question[i].incorrect_answers[1])] = false;
        obj[decode(question[i].incorrect_answers[2])] = false;
        answer.push(obj);
      }
      return answer
    })
  }, [question])

  function optionSelect(event, i){
    const key = event.target.value.replace(/^["'](.+(?=["']$))["']$/, '$1')
    
    console.log(selected[i]);
  }

  if(typeof options[0] !== 'undefined' && options[0].length > 0){
    var trivia = question.map((data, i) => {
      return (
        <div key={uuidv4()}>
          <h2>{decode(data.question)}</h2>
          <Options
            option={options[0][i]}
            index={i}
            select={optionSelect}
          />
          <hr className="line" />
        </div>
      );
    });
  }
  // console.log(options[0][1]);

  return (
    <div className="questions">
      {trivia}
      <button className="check-button">Check Answers</button>
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

{
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
}
