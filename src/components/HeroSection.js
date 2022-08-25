import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="home">
    <div className="hero-container">
      {/* <video src='/videos/dust.mp4' autoPlay loop muted /> */}
      <h2>Giving your car the best Service</h2>
      <h1>Shiny, spotless cars for days</h1>
              <h2>IT EVER HAD</h2>
      <p>Share your location we will reach out you</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Book Now
        </Button>
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
