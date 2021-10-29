import './App.css';
import { useState } from 'react';
import {ColorSquares} from './container/colorSquares'
import ResultRectangle from './container/resultRectangle'

function App() {

  const [rectColor, setRectColor] = useState("yellow");
  const [numberToAdd, setNumberToAdd] = useState(0);

  // useEffect(()=>{
  //   console.log("number to Add is changed", numberToAdd );
  // }, [numberToAdd]);

  return (
    <div className="App">
        <ColorSquares setColor={setRectColor} setNumberToAdd={setNumberToAdd}/>
        <ResultRectangle color={rectColor} numberToAddProps={numberToAdd}/>
    </div>
  );
}

export default App;
