
/*---------------reactDOM syntax------------
ReactDOM.render(<ul><li>Jod</li><li>is Back</li></ul>, document.getElementById("root"))
--------------composeable-------------------
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function MainContent() {
  return(
      <h1>This is the Main Content</h1>
  )
}

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
  </div>,
  document.getElementById("root")
);

--------------------------------declerative ------
vanilla JS
const h1 = document.createElement('h1');
const div1 = document.getElementById('root');
h1.innerText = "Hi! This is wriiten in vanilla JS";
h1.setAttribute("class", "header");
div1.append(h1);

// react way
 
ReactDOM.render(<h1 className="header">Hello,This is declarative way</h1>, document.getElementById('root'));

*/
// JSX
/*const page = (
    <div>
        <h1 className = "header"> This is JSX</h1>
        <p>This is paragraph</p>
    </div>
)
console.log(page);
const nav = (
    <nav>
        <h1>Webiste</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)*/
/*
This is what jsx looks like a jsObject
{$$typeof: Symbol(react.element), type: 'div', key: null, ref: null, props: {…}, …}
$$typeof: Symbol(react.element)
key: null
props:
children: Array(2)
0: {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
1: {$$typeof: Symbol(react.element), type: 'p', key: null, ref: null, props: {…}, …}
length: 2
[[Prototype]]: Array(0)
[[Prototype]]: Object
ref: null
type: "div"
_owner: null
_store: {validated: false}
_self: null
_source: null
[[Prototype]]: Object

ReactDOM.render(

    nav,
    document.getElementById("root")

)


function App(){
  const firstname = "david";
  const lastname = "villa";
  const date = new Date();
  const hours = date.getHours();
  
  let timeOfDay;

  if(hours < 12){
    timeOfDay = 'Morning';
  }else if(hours >= 12 && hours < 17){
    timeOfDay = 'Afternoon';
  }else if(hours >= 17 && hours < 20){
    timeOfDay = 'Evening'
  }else{
    timeOfDay = 'Night'
  }


  return(
    <div>
      <h1>Good {timeOfDay}!</h1>
      <h1>Hello {firstname} {lastname} !</h1>
    </div>
  )
}

function greeting(name) {
    const date = new Date()
    const hours = date.getHours()
    
    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    
    return `Good ${timeOfDay}, ${name}!`
}

1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.

*/

function App(){
  function HandleClick(){
    thingArray.push(`Thing ${thingArray.length + 1}`)
    console.log(thingArray);
  }
  const thingArray = ["Thing 1", "Thing 2"];
  const thingData = thingArray.map(data => <p key={data} >{data}</p>)


  return(
    <div>
      <button onClick={HandleClick}>Add Item</button>
      {thingData}
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));