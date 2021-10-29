import React from "react";
import { Square } from "../components/square/square";
import "./rectangle.css";


export function ColorSquares({setColor, setNumberToAdd}) {

    const colors = ["green", "red", "pink", "black", "blue", "grey"];

    return (
        <div className="squaresContainer">
            {colors.map(color => {
                return <Square color={color} setColor={setColor} setNumberToAdd={setNumberToAdd} />
            })}
        </div>
    )
}