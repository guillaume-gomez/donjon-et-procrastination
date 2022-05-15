import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import "./RandomWord.css"

interface RandomWordProps {
  word: string;
  position: number
}

function fromWordToThinking(word: string) {
  const array = word.split("");
  return array
    .map(() => ".")
    .join('')
    .toString();
}

function RandomWord({ word, position } : RandomWordProps) {
  const controls = useAnimation();
  useEffect(() => {
    controls.start('roll').then(() => {
      controls.set({rotateX: 0})
    })
  }, [word])

  return (
    <motion.div id="random-word-container"
          animate={controls}
          initial="initial"
          transition={
            { delay: position * 0.25, duration: 1, ease: 'easeOut' }
          }
          variants={{
            roll: { rotateX: 360 * 5  }
          }}
          >
        {word}
    </motion.div>
  );
}

export default RandomWord;
