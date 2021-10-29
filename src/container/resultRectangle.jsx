import React, { useState, useEffect } from "react"
import "./rectangle.css"

export default function ResultRectangle({color, numberToAddProps }) {
    const [number, setNumber] = useState(0);
    

    useEffect(()=>{
        setNumber( number => parseInt(numberToAddProps) + parseInt(number));
    }, [numberToAddProps]);
    
    return (
        <div className="Rectangle" style={{backgroundColor: color}}>
            Result: {number}
        </div>
    )
}