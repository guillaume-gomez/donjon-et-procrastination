import React from 'react';
import "./RandomWord.css"

interface ButtondProps {
  onClick: () => void;
}

function Button({onClick} : ButtondProps) {
  return (
    <button id="button-container">
        Generate
    </button>
  );
}

export default Button;
