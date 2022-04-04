/*
const page = (
    <div>
        <h1>Hello React!!</h1>
        <ul>
            <li>React is easy to use</li>
            <li>React is a JS lib</li>
            <li>React makes coding simple</li>
        </ul>
    </div>
)

ReactDOM.render(

    page,
    document.getElementById("root")

)
// document.getElementById("root").append(JSON.stringify(page));


1. Why do we need to `import React from "react"` in our files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something
larger/greater than the individual pieces.
*/

//--------------------------------components

// import Header from "./Header"
// import MainContent from "./MainContent";
// import Footer from "./Footer";




/*
1. What is a React component?
A function that returns React elements. (UI)

2. What's wrong with this code?
```
function MyComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(<Header />, document.getElementById("root"))
```

*/

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared

const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
    return num * num
})

// console.log(squares)




Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized


const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map(name => (
    name[0].toUpperCase() + name.slice(1))
)
// console.log(capitalized)




Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

console.log(paragraphs)

*/
// Making API calls

function App() {

    const [starWar, setStarWar] = React.useState({})
    const [count, setCount] = React.useState(1);
    console.log("component rendered");

    React.useEffect(function() {
        console.log("Effect Function Ran");
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWar(data))  //this line renders infinitely bcoz it runs first
    }, [count])

    return (
      <div>
          <h1>The Count is {count}</h1>
          <button onClick={() => setCount(prevCount => prevCount + 1)} >Get Next Character</button>
          <pre>{JSON.stringify(starWar, null, 2)}</pre>
      </div>
    );
  }
  
  ReactDOM.render( <App />,document.getElementById("root"));

  /*
  1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function
*/  


//----------------Watch Width----------------------------------------------------------------------


// https://scrimba.com/scrim/co67c4a4184321b1006b79342