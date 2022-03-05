import React from "react";
import Jokes from "./components/Jokes";
import JokesData from "./JokesData";

function App() {
  const JokesElement = JokesData.map(joke => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div className="App"> {JokesElement} </div>;
}

export default App;

/*
<Jokes 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
      <Jokes
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Jokes
        punchline="It’s hard to explain puns to kleptomaniacs because 
        they always take things literally."
      />


      function App() {
  const colors = [
    <h3>red</h3>,
    <h3>blue</h3>,
    <h3>green</h3>,
    <h3>yellow</h3>,
    <h3>orange</h3>,
    <h3>indigo</h3>,
    <h3>violet</h3>,
  ];
  return <div className="App">{colors}</div>;
}

1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.


      */
