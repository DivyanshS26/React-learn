import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./Data";

// <Hero />
function App() {
  const DataElements = Data.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="crd-list">{DataElements}</section>
    </div>
  );
}

export default App;
