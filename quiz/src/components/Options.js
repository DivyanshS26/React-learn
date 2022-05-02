import React, { useState } from "react";
import { decode } from "html-entities";

const Options = (props) => {
  const answers = [
    decode(props.option.correct),
    decode(props.option.incorrect1),
    decode(props.option.incorrect2),
    decode(props.option.incorrect3),
  ];

  return (
    <div>
      <button
        style={{
          backgroundColor: props.selected[answers[props.pos[0]]]
            ? "#D6DBF5"
            : "transparent",
          border: props.selected[answers[props.pos[0]]]
            ? "none"
            : "1px solid #293264",
        }}
        className="option-buttons"
        value={answers[props.pos[0]]}
        onClick={(event) => props.select(event, props.index)}
      >
        {answers[props.pos[0]]}
      </button>
      <button
        style={{
          backgroundColor: props.selected[answers[props.pos[1]]]
            ? "#D6DBF5"
            : "transparent",
          border: props.selected[answers[props.pos[1]]]
            ? "none"
            : "1px solid #293264",
        }}
        className="option-buttons"
        value={answers[props.pos[1]]}
        onClick={(event) => props.select(event, props.index)}
      >
        {answers[props.pos[1]]}
      </button>
      <button
        style={{
          backgroundColor: props.selected[answers[props.pos[2]]]
            ? "#D6DBF5"
            : "transparent",
          border: props.selected[answers[props.pos[2]]]
            ? "none"
            : "1px solid #293264",
        }}
        className="option-buttons"
        value={answers[props.pos[2]]}
        onClick={(event) => props.select(event, props.index)}
      >
        {answers[props.pos[2]]}
      </button>
      <button
        style={{
          backgroundColor: props.selected[answers[props.pos[3]]]
            ? "#D6DBF5"
            : "transparent",
          border: props.selected[answers[props.pos[3]]]
            ? "none"
            : "1px solid #293264",
        }}
        className="option-buttons"
        value={answers[props.pos[3]]}
        onClick={(event) => props.select(event, props.index)}
      >
        {answers[props.pos[3]]}
      </button>
    </div>
  );
};

export default Options;
