import axios from "axios";
import React from "react";
import { useState } from "react";

const Exercises = () => {
  const [joker, setJoker] = useState("");
  const [joke, setJoke] = useState("");

  const JokeData = () => {
    axios(" https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        console.log(response);
        setJoker(response.data.setup);
        setJoke(response.data.punchline);
        console.log(joker);
      }
    );
  };

  return (
    <div className="w-full text-white bg-[#333] ">
      <div className="w-[60%] h-56 bg-purple-900  mx-auto p-10 space-y">
        <div className="flex gap-5">
          <h1>{joker}</h1>
          <h1>{joke}</h1>
        </div>
        <button
          onClick={JokeData}
          className="bg-[#FFA500] px-4 py-1 rounded-r-2xl text-white"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Exercises;
