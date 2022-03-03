import Contact from "./components/Contact";
import ct1 from "./components/Images/cat1.jpg";
import ct2 from "./components/Images/cat2.jpg";
import ct3 from "./components/Images/cat3.jpg";
import ct4 from "./components/Images/cat4.jpg";

function App() {
  return (
    <div className="App">
      <Contact
        img={ct1}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        eml="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={ct2}
        name="Fluffykins"
        phone="(212) 555-2345"
        eml="fluff@me.com"
      />
      <Contact
        img={ct3}
        name="Felix"
        phone="(212) 555-4567"
        eml="thecat@hotmail.com"
      />
      <Contact
        img={ct4}
        name="Pumpkin"
        phone="(0800) CAT KING"
        eml="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
/*
1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!
*/
// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// const {img, name} = person
// console.log(name)