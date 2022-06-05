import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import "./RandomWord.css"

interface RandomWordProps {
  word: string;
  wordPosition: number
}

function RandomWord({ word, wordPosition } : RandomWordProps) {
  const controls = useAnimation();
  useEffect(() => {
    console.log("fj")
    controls.start('roll').then(() => {
      controls.set({rotateX: 0})
    })
  }, [controls, word])

  const wordSplitted = word.split("").map((letter, index) => {
    return (
      <motion.span
        key={index}
        animate={controls}
        initial="initial"
        transition={
          { delay: 0.25 * (wordPosition * index * 0.1), duration: 1, ease: 'easeOut' }
        }
        variants={{
          roll: { rotateX: 360 * 5  }
        }}
      >
      {letter}
      </motion.span>
    );
  })

  return (<span className="random-word-container">{wordSplitted}</span>);
}

export default RandomWord;
