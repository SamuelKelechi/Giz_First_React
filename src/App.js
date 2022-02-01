import './App.css';
import { useState } from 'react';

function App() {
  const [add, setAdd] = useState(5)


  function Add(){
    setAdd(add +1)
  }

  const Minus = ()=> {
    setAdd(add -1)
  }

  return (
    <div className="App">
      <button onClick={Add}>Add</button>
      <div>{add}</div>
      <button onClick={Minus}>Minus</button>
    </div>
  );
}

export default App;
