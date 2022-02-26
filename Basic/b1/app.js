
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
const page = (
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
)
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
*/