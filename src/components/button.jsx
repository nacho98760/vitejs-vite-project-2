import React from 'react'

function Button({ texto, isClickButton, manageClick }) {
  return(
    <button
      className={isClickButton ? "button-click" : "button-reset"}
      onClick={manageClick}>
      {texto}
    </button>
  );
}

export default Button;