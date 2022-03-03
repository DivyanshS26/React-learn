import React from "react";

const Jokes = ({ setup, punchline }) => {
  return (
    <div>
      {/* {setup && <h3>Setup: {setup}</h3>}  */}
      <h3 style={{display: setup?"block":"none"}}>Setup: {setup}</h3>
      <p>Punchline: {punchline}</p>
      <hr />
    </div>
  );
};

export default Jokes;
