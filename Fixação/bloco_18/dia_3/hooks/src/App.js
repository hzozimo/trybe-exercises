import { useEffect, useContext } from 'react';
import './App.css';
import HookContext from './context/HookContext';

function App() {
  const TEN_SECONDS = 10000;
  const { number, setNumber } = useContext(HookContext);

  useEffect(() => { 
    setInterval( () => {
      setNumber(Math.random()*100);
    }, TEN_SECONDS)
  },[number])

  return (
    <div className="App">
      <h1> {number} </h1>
    </div>
  );
}

export default App;
