import React, { useState, useEffect } from "react"
import "./rectangle.css"
import axios from  "axios";

export default function ResultRectangle({color, numberToAddProps }) {

    const [number, setNumber] = useState(0);
    const [products, setProducts] = useState(undefined);
    const [error, setError] = useState("no error");

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
            .then(res=> {
                setProducts(res.data);
            })
            .catch(err=> {
                setError(err.message)
            })
    }, []);
    

    useEffect(()=>{
        setNumber( number => parseInt(numberToAddProps) + parseInt(number));
    }, [numberToAddProps]);


    const addProduct = (title) => {
        axios.post('https://fakestoreapi.com/products', {
            title: title,
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        })
    }
    
    return (
        <div className="Rectangle" style={{backgroundColor: color}}>
            Result: {number}

           <button onClick={() => {addProduct("Judyta")}}>add products</button>
    
            
            Products: 
                {products ? products.map(products => {
                    return <div style={{border: "2px solid white", padding: "50px"}}>{products.title} <img src={products.image} height="20px"></img></div>
                }) : "waiting for products..."}

                {error}
        </div>
    )
}