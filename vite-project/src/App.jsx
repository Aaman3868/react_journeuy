import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(5);

  const addvalue = () => {
    const newCount = counter + 1;

    if (newCount > 20) {
      setCounter(1);
    } else {
      setCounter(newCount);
    }
  };

  const minuscount = () => {
    const newCount = counter - 1;

    if (newCount < 0) {
      alert("Minus not allowed. Resetting to 1.");
      setCounter(1);
    } else {
      setCounter(newCount);
    }
  };

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={minuscount}>Remove</button>
    </>
  );
}

export default App;
