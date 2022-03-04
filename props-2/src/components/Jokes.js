import React from "react";

const Jokes = ({ show,upvotes,setup, punchline,comments }) => {
  return (
    <div>
      {/* {setup && <h3>Setup: {setup}</h3>}  */}
      <h3 style={{display: setup?"block":"none"}}>Setup: {setup}</h3>
      <p>Punchline: {punchline}</p>
      <p style={{display : show ? "block":"none"}}>{upvotes}</p>
      <hr />
    </div>
  );
};

export default Jokes;
