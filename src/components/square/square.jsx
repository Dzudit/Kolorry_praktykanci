import React from "react";
import "./square.css";
//  (props) props.color albo {color, innaZmienna} -- destrukturyzacja w JS poczytac 
export function Square({color, setColor}){

    return (
        <div className="square" style={{backgroundColor: color}} onClick={()=> { console.log("clicked", color); setColor(color)}}>    
        </div>
    )
}