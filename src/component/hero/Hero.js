import React from "react";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div>
      <div className="top-0  w-full  ">
        <img src={hero} alt="hero" className="h-screen w-full" />
      </div>
      <div className="top-44 left-24 absolute text-white space-y-5">
        <h1 className=" font-bold text-7xl">Gym</h1>
        <p className="text-4xl italic">
          Working up <br /> a sweat at the gym,
          <br /> sculpting <br /> both body and determination
        </p>
      </div>
    </div>
  );
};

export default Hero;
