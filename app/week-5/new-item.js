"use client";
import { useState } from "react";

export default function NewItemForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Item: ${name} | Quantity: ${quantity} | Category: ${category}\nAdded to cart.`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-300 rounded-2xl p-6 max-w-md mx-auto mt-8 shadow-md"
    >
      {/* Item Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Item Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border bg-white border-blue-500 rounded focus:outline-none focus:ring focus:ring-pink-200"
          required
        />
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity <= 1}
            className={`w-8 h-8 rounded-full text-white font-bold ${
              quantity <= 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-400 hover:bg-red-500 active:bg-yellow-200"
            }`}
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity >= 20}
            className={`w-8 h-8 rounded-full text-white font-bold ${
              quantity >= 20
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-400 hover:bg-blue-500 active:bg-yellow-200"
            }`}
          >
            +
          </button>
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-blue-500 rounded focus:outline-none focus:ring bg-white focus:ring-pink-200">
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
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
