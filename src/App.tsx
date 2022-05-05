import React from 'react';
import './App.scss';
import logo from "./images/LOGO_1.png";
import subtitle from "./images/LOGO_2.png";
import Generator from "./components/Generator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="body-container">
          <img src={logo} />
          <img src={subtitle} />
          <Generator />
      </main>
    </div>
  );
}

export default App;
