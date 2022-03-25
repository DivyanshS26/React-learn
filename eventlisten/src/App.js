import React from "react";

function App() {
  function handleClick () {
    console.log("I was Clicked");
  }
  function hover (){
    console.log("I was hovered");
  }
  return (
    <div className="container">
      <img onMouseOver={hover} src='https://picsum.photos/640/360' />
      <button onClick={handleClick} >Click Me</button>
    </div>
  );
}

export default App;
