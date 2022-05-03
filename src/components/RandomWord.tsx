import React from 'react';
import "./RandomWord.css"

interface RandomWordProps {
  word: string;
}

function RandomWord({word} : RandomWordProps) {
  return (
    <div id="random-word-container">
      {word}
    </div>
  );
}

export default RandomWord;
