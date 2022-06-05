import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import RandomWord from "./RandomWord";
import "./RandomWords.css"

interface RandomWordsProps {
  words: string;
}

function RandomWords({ words } : RandomWordsProps) {

  return (
    <motion.div id="random-words-container">
      {
        words.split(" ").map((word, index) =>
          <RandomWord word={word} wordPosition={index} key={index}/>
        )
      }
    </motion.div>
  );
}

export default RandomWords;
