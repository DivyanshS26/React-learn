import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katimg from "./components/images/image 12.png";

// <Hero />
function App() {
  return (
    <div className="App">
      <Navbar />
      <Card
        img={katimg}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zefferson"
        price={136}
      />
    </div>
  );
}

export default App;
