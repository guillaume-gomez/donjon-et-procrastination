import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import "./RandomWord.css"

interface RandomWordProps {
  word: string;
  position: number
}

/*function fromWordToThinking(word: string) {
  const array = word.split("");
  return array
    .map(() => ".")
    .join('')
    .toString();
}*/

function RandomWord({ word, position } : RandomWordProps) {
  const controls = useAnimation();
  useEffect(() => {
    controls.start('roll').then(() => {
      controls.set({rotateX: 0})
    })
  }, [word, controls])

  return (
    <motion.div id="random-word-container">
        {
          word.split("").map((letter, index) => {
            return (
              <motion.span
                animate={controls}
                initial="initial"
                transition={
                  { delay: position * 0.25 * (index *0.1), duration: 1, ease: 'easeOut' }
                }
                variants={{
                  roll: { rotateX: 360 * 5  }
                }}
              >
              {letter}
              </motion.span>
            );
          })
        }
    </motion.div>
  );
}

export default RandomWord;
