import React from "react";
import Jokes from "./components/Jokes";

function App() {
  const colors = [<h3>red</h3>,<h3>blue</h3>,<h3>green</h3>,<h3>yellow</h3>,<h3>orange</h3>, <h3>indigo</h3>,<h3>violet</h3>];
  return (
    <div className="App">
      {colors}
    </div>
  );
}

export default App;

/*
<Jokes 
        upvotes = {3+4}
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        show = {false}
        comments = {['good','wow','very good']}
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
      */