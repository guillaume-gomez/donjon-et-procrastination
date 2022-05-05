import React, { useState } from 'react';
import { sample } from "lodash";
import "./Generator.css";
import RandomWord from "./RandomWord";
import Button from "./Button";

function mockRandomWord(): string {
  const words = ["lorem", "ispum", "opafk", "jfd", "fdljdjdjkf", "flg"];
  return sample(words) as string;
}

function Generator() {
  const [words, setWords] = useState<string[]>(["Un", "Dinosaure", "necromancien", "sale", "avec", "un", "fleuret"]);

  function generate() {
    const newWords = words.map(_ => mockRandomWord());
    setWords(newWords);
  }

  return (
    <div id="generator-container">
      <div id="words-container" className="">
        {words.map((word, index) => <RandomWord key={index} word={word} />)}
      </div>
      <Button onClick={generate} />
    </div>
  );
}

export default Generator;
