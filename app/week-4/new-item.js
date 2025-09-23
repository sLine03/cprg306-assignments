"use client";
import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
        setQuantity(quantity + 1);
        }
    }

    const decrement = () =>{
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    }

    let buttonIncrement = "bg-blue-300 active:bg-yellow-200 hover:bg-blue-500 transition-colors text-white rounded-full w-6 h-6 ml-8 cursor-pointer";
        if (quantity >= 20) {
            buttonIncrement = "text-white rounded-full w-6 h-6 ml-8 bg-gray-400"
        }

    let buttonDecrement = "bg-red-300 active:bg-yellow-200 hover:bg-red-500 transition-colors text-white rounded-full w-6 h-6 m-4 cursor-pointer";
        if (quantity <= 1) {
            buttonDecrement = "text-white rounded-full w-6 h-6 m-4 bg-gray-400"
        }
    
    return(
        <main>
            <div className="flex-wrap">
            <p className="bg-slate-200 rounded-2xl pt-3 pl-6 w-60 h-20">Quantity: {quantity}
            <button className={buttonIncrement} onClick={increment}> + </button>
            <button className={buttonDecrement} onClick={decrement}> - </button>
            </p>
            </div>
        </main>
    );
}