import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./Data";

// <Hero />
function App() {
  const DataElements = Data.map((data) => {
    return (
      <Card
        title={data.title}
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        price={data.price}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      {DataElements}
    </div>
  );
}

export default App;
