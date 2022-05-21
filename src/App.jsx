import React from 'react'
import './stylesheets/App.css'
import Button from './components/button'

function App() {

  const manageClick = () => {
    console.log("Button clicked")
  }

  const resetCounter = () => {
    console.log("Counter reseted")
  }


  return (
    <div className="App">
      <div className="contenedor-principal">
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
