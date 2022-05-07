import React from 'react';
import './App.scss';
import logo from "./images/LOGO_1.png";
import subtitle from "./images/LOGO_2.png";
import Generator from "./components/Generator";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="body-container">
          <div className="logo-container">
            <motion.div
              initial={{ y: -100, zIndex:2 }}
              animate={{ y: 55 }}
              transition={{ type: "spring", bounce: 0.35, duration: 2 }}
            >
              <img src={logo} />
              </motion.div>
            <motion.div
              initial={{ opacity: 0, zIndex: 1 }}
              animate={{ opacity: 1 }}
              transition={{  duration: 1 }}
            >
            < img src={subtitle} />
            </motion.div>
          </div>
          <Generator />
      </main>
    </div>
  );
}

export default App;
