import React from 'react';
import './App.css';
import logo from "./LOGO_1.png";
import subtitle from "./LOGO_2.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="body-container">
          <img src={logo} />
          <img src={subtitle} />
      </main>
    </div>
  );
}

export default App;
