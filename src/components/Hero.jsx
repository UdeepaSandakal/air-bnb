import React from "react";
import PhotoGrid from "../assets/photo_grid.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero--img">
        <img src={PhotoGrid} />
      </div>
      <div className="hero--content">
        <h1 className="hero--head">Online Experiences</h1>
        <p className="hero--paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
