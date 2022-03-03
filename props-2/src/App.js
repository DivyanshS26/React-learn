import React from "react";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
