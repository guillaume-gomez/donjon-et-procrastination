import React, { useState } from 'react';
import { sample } from "lodash";
import {
  PronoumColumn,
  ClassColumn,
  RaceColumn,
  CaracteristicsColumn,
  SpecialItemColumn
} from "../dictionnary";
import "./Generator.css";
import RandomWord from "./RandomWord";
import Button from "./Button";

function mockRandomWord(): string {
  const words = ["lorem", "ispum", "opafk", "jfd", "fdljdjdjkf", "flg"];
  return sample(words) as string;
}

function pickRandomItem(list: string[]) : string {
  return sample(list) as string;
}


function Generator() {
  const [words, setWords] = useState<string[]>(["Un", "Dinosaure", "necromancien", "sale", "avec", "un fleuret"]);


  function generate() {
    const newWords = [
      pickRandomItem(PronoumColumn),
      pickRandomItem(ClassColumn),
      pickRandomItem(RaceColumn),
      pickRandomItem(CaracteristicsColumn),
      "avec",
      pickRandomItem(SpecialItemColumn)
    ]
    setWords(newWords);
  }

  return (
    <div id="generator-container">
      <div id="words-container" className="">
        {words.map((word, index) => <RandomWord key={index} word={word} position={index} />)}
      </div>
      <Button onClick={generate} />
    </div>
  );
}

export default Generator;
