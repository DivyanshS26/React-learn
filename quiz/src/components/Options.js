import React from "react";
import { decode } from "html-entities";

const Options = (props) => {
  const answers = [
    decode(props.option.correct),
    decode(props.option.incorrect1),
    decode(props.option.incorrect2),
    decode(props.option.incorrect3),
  ];

  function randomPos() {
    const arr = [];
    for (let i = 0; i < 4; i++) {
      let x = Math.floor(Math.random() * 4);
      if (arr.includes(x)) {
        i = i - 1;
      } else {
        if (x < 4) {
          arr.push(x);
        }
      }
    }
    return arr;
  }

  const pos = randomPos();
  return (
    <div>
      <button
        className="option-buttons"
        value={answers[pos[0]]}
        onClick={(event) => props.select(event, props.index)}
      >
        {answers[pos[0]]}
      </button>
      <button
        className="option-buttons"
        value={answers[pos[1]]}
        onClick={(event) => props.select(event, props.index)}
      >
        {answers[pos[1]]}
      </button>
      <button
        className="option-buttons"
        value={answers[pos[2]]}
        onClick={(event) => props.select(event, props.index)}
      >
        {answers[pos[2]]}
      </button>
      <button
        className="option-buttons"
        value={answers[pos[3]]}
        onClick={(event) => props.select(event, props.index)}
      >
        {answers[pos[3]]}
      </button>
    </div>
  );
};

export default Options;
