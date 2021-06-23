import { useEffect, useContext } from 'react';
import './App.css';
import Context from './context/Context';

function App() {
  const TEN_SECONDS = 10000;
  const { number, setNumber} = useContext(Context);

  useEffect(() => { 
    setInterval( () => {
      setNumber(Math.random()*10);
    }, TEN_SECONDS)
  })
  return (
    <div className="App">
      <h1> {number}</h1>
    </div>
  );
}

export default App;
