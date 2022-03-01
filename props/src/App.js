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
