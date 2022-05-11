import React from 'react';
import './App.scss';
import logo from "./images/LOGO_1.png";
import subtitle from "./images/LOGO_2.png";
import Generator from "./components/Generator";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
        <motion.div
          animate={{ y: ["1px", "4px", "10px"] }}
          style={{position: "absolute", width: "100%", height: "100%", zIndex:-1 }}
          transition={{
            duration: 2,
            yoyo: Infinity,
            ease: "easeOut"
          }}
        >
          <div className="background-castle" />
        </motion.div>
        <div className="background-cloud1" />
        <div className="background-cloud2" />
      <div className="main-container">
        <header className="App-header">
        </header>
        <main className="body-container">
            <div className="logo-container">
              <motion.div
                initial={{ y: -100, zIndex:2 }}
                animate={{ y: "15%" }}
                transition={{ type: "spring", bounce: 0.40, duration: 2 }}
              >
                <img src={logo} width="100%"/>
                </motion.div>
              <motion.div
                initial={{ opacity: 0, zIndex: 1 }}
                animate={{ opacity: 1 }}
                transition={{  duration: 1 }}
              >
              < img src={subtitle} width="100%" />
              </motion.div>
            </div>
            <Generator />
            <div className="footer">
              Générateur d'idées "Donjon & Procrastination" par
              <a href="https://www.instagram.com/pomyad/">Pomyad</a> et
              <a href="https://github.com/guillaume-gomez">Guillaume Gomez</a>
            </div>
        </main>
      </div>
    </div>
  );
}

export default App;
