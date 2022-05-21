import React from 'react';
import '../stylesheets/contador.css'

function Contador({ numOfClicks}) {
  return (
    <div className="contador">
      {numOfClicks}
    </div>
  );
}

export default Contador;