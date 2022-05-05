import React from 'react';
import { sample } from "lodash";
import "./Generator.css";
import RandomWord from "./RandomWord";
import Button from "./Button";

function mockRandomWord(): string {
  const words = ["lorem", "ispum", "opafk", "jfd", "fdljdjdjkf", "flg"];
  return sample(words);
}

function Generator() {
  const randomWords = ["Un", "Dinosaure", "necromancien", "sale", "avec", "un", "fleuret"]
  return (
    <div id="generator-container">
      <div id="words-container">
        {randomWords.map(word => <RandomWord word={word} />)}
      </div>
      <Button onClick={() => console.log("clicked")} />
    </div>
  );
}

export default Generator;
