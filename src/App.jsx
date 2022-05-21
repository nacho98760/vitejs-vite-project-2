import { useState } from 'react'
import './stylesheets/App.css'
import Button from './components/button'
import Contador from './components/contador'

function App() {

  const [numOfClicks, setNumOfClicks] = useState(0); 

  const manageClick = () => {
    setNumOfClicks(numOfClicks + 1);
  }

  const resetCounter = () => {
    setNumOfClicks(0)
  }


  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador
          numOfClicks={numOfClicks}
        />
        <Button
          texto="Click"
          isClickButton={true}
          manageClick={manageClick}
        />
        <Button
          texto="Reset"
          isClickButton={false}
          manageClick={resetCounter}
        />
      </div>
    </div>
  )
}

export default App
