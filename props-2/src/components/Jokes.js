import React, { useState } from "react";

const Jokes = ({ setup, punchline }) => {
  const [isShown, setIsShown] = useState(false);

  function toggleShow(){
    setIsShown(prevShow => !prevShow)
    console.log(isShown)
  }

  return (
    <div>
      <h3 style={{ display: setup ? "block" : "none" }}>Setup: {setup}</h3> {/* 1 st Way */}
      {isShown && <p>Punchline: {punchline}</p>}{/* 2 nd Way */}
      <button onClick={toggleShow}>{isShown ? "Hide" : "Show"} Punchline</button>
      <hr />
    </div>
  );
};

export default Jokes;

{
  /* {setup && <h3>Setup: {setup}</h3>}  */
}
{
  /* <p style={{display : show ? "block":"none"}}>{upvotes}</p> */
}

// message app scrimba 
// https://scrimba.com/scrim/co8c2455d8f9df5e4e1efd69e

// quiz on conditional renering
/*
1. What is "conditional rendering"?
When we want to only sometimes display something on the page
based on a condition of some sort


2. When would you use &&?
When you want to either display something or NOT display it


3. When would you use a ternary?
When you need to decide which thing among 2 options to display


4. What if you need to decide between > 2 options on
   what to display?
Use an `if...else if... else` conditional or a `switch` statement


function App() {
    let someVar
    if () {
        someVar = <SomeJSX />
    } else if() {
        ...
    } else {
        ...
    }
    return (
        <div>{someVar}</div>
    )
}
*/
