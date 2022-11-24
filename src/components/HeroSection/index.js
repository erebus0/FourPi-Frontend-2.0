import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">
          rewards for using decentralised finance and web3.
        </div>
        <Button buttonText="Check score at FourPi" />
      </div>
    </div>
  );
};

export default HeroSection;