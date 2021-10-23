import './App.css';
import { useState } from 'react';
import {ColorSquares} from './container/colorSquares'
import ResultRectangle from './container/resultRectangle'

function App() {

  const [rectColor, setRectColor] = useState("yellow");

  return (
    <div className="App">
        <ColorSquares setColor={setRectColor}/>
        <ResultRectangle color={rectColor}/>
    </div>
  );
}

export default App;
