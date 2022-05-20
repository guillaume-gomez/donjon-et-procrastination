import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import "./RandomWord.css"

interface RandomWordProps {
  word: string;
}

function RandomWord({ word } : RandomWordProps) {
  const controls = useAnimation();
  useEffect(() => {
    controls.start('roll').then(() => {
      controls.set({rotateX: 0})
    })
  }, [controls, word])

  return (
    <motion.div id="random-word-container">
        {
          word.split("").map((letter, index) => {
            return (
              <motion.span
                animate={controls}
                initial="initial"
                transition={
                  { delay: 0.25 * (index *0.1), duration: 1, ease: 'easeOut' }
                }
                variants={{
                  roll: { rotateX: 360 * 5  }
                }}
                style={{padding: letter === " " ? "0 0.5rem" : 0 }}
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
