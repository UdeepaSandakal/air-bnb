import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <section className="card--list">{cards}</section>
    </div>
  );
}

export default App;
