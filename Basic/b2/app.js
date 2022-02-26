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

import Header from "./Header"
import MainContent from "./MainContent";
import Footer from "./Footer";




function Temp() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <Temp />,

  document.getElementById("root")
);
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
