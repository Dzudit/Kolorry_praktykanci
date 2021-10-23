import React from "react"
import "./rectangle.css"

export default function ResultRectangle({color}) {
    return (<div className="Rectangle" style={{backgroundColor: color}}>
        Result: 
    </div>)
}