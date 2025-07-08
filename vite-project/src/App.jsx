import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  const addvalue = () => {
  setCounter(counter + 1)
  }

  const minuscount = () =>{
     const newCount = counter - 1;
  setCounter(newCount);

  if (newCount < 0) {
    alert("minus not allowed");
    return
    
  }
 
  }
  return (
    <>
  
     <h1>Welcome to React</h1>
     <h2>counter Value : {counter}</h2>
     <button onClick={addvalue} >Add Value</button>
     <br></br>
     <button onClick={minuscount}>Remove</button>
    </>
  )
}

export default App
