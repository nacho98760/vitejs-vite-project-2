import React from 'react';
import '../stylesheets/button.css';

function Button({ texto, isClickButton, manageClick }) {
  return (
    <button
      className={isClickButton ? 'button-click' : 'button-reset'}
      onClick={manageClick}
    >
      {texto}
    </button>
  );
}

export default Button;

