import React from "react";
import "./square.css";
import MiniSquare from "../miniSquare/miniSquare";

export function Square({color, setColor, setNumberToAdd}){

    return (
        <div className="square" style={{backgroundColor: color}} onClick={()=> {  setColor(color)}}>   
            <MiniSquare setNumberToAdd={setNumberToAdd}/> 
        </div>
    )
}