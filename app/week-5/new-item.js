"use client";
import { useState } from "react";




export default function NewItem_w5(){

    const [name, setName] = useState("");
    const [counter, setCounter] = useState("");
    const [category, setCategory] = useState("");



    const handleName = (event) => setName(event.target.value);
    const handleCategory = (event) => setCategory(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();

        let itemObj = {
            name: name,
            quantity: quantity,
            category: category
        }
        
        alert(`Item: ${itemObj.name} Quantity: ${itemObj.quantity} Category: ${itemObj.category}. Added to Cart`);

    }

    let inputStyles="bg-white inline-block w-40 border-blue-500 rounded px-2 py-1 focus:bg-pink-100";
    let labelStyles = "inline-block w-40";
    let divStyles="m-4";

 return(
    <form className="bg-violet-300 rounded-2xl justify-center p-4 mb-auto ml-50 mr-50" onSubmit={handleSubmit}>
        <div className={divStyles}>
            <label className={labelStyles}>Item name:</label>
            <input className={inputStyles} type="text" onChange={handleName} value={name}/>
        </div>

        <div>
            <label className={labelStyles}>Number of items</label>
        </div>

        <div>
            <label className={labelStyles}>Category</label>
            <select className={inputStyles} value={category} onChange={handleCategory}> 
                <option value="">Select Category</option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozenFoods">Frozen Foods</option>
                <option value="cannedGoods">Canned Goods</option>
                <option value="dryGoods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="houseHold">Household</option>
                <option value="cother">Other..</option>
        </select>
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
 );
}