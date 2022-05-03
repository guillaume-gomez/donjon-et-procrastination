import React from 'react';
import "./Generator.css";
import RandomWord from "./RandomWord";

function Generator() {
  const randomWords = ["Un", "Dinosaure", "necromancien", "sale", "avec", "un", "fleuret"]
  return (
    <div id="generator-container">
      {randomWords.map(word => <RandomWord word={word} />)}
    </div>
  );
}

export default Generator;
