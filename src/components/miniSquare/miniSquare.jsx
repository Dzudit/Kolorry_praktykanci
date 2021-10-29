import React, {useEffect, useState} from "react";
import "./miniSquare.css";

export default function MiniSquare({setNumberToAdd}) {

    const [randomNumber, setRandomNumber] = useState(null);

    useEffect(()=>{
        setRandomNumber((Math.random() * 10 + 1).toFixed());
    }, []);

    return (
        <div className="MiniSquare" onClick={(event)=>{ event.stopPropagation(); setNumberToAdd(randomNumber);}}>
            {randomNumber}
        </div>
    )
}