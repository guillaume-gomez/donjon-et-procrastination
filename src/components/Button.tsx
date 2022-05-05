import React from 'react';
import "./Button.scss";
import logo from "../images/button_image.png";

interface ButtondProps {
  onClick: () => void;
}

function Button({onClick} : ButtondProps) {
  return (
    <button id="button-container" className="pixel-borders pixel-borders-custom" onClick={onClick}>
        <img src={logo}/>
    </button>
  );
}

export default Button;
