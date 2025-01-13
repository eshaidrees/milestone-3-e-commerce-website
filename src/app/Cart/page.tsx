"use client";

import { useCart } from "@/context/CartContext";
import { ImBin } from "react-icons/im";
import Image from "next/image";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total , item) => total + item.price * item.quantity, 0)
  }

  const handleRemove = (id:string) => {
    removeFromCart(id);
    alert("Item removed from cart!");
  };

  return (
    <div className="container mx-auto pb-10">
      <h1 className="text-3xl text-center font-bold p-6">Shopping Cart</h1>
     
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex gap-16">
      <div>
        <ul >
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between w-full items-center mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>Price: Rs. {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 hover:text-red-700 lg:pl-[400px]"
                aria-label="Remove item"
              >
                <ImBin className="text-sm " />
              </button>
            </li>
          ))}
        </ul>
        </div>
        {/* Cart Totals */}
        <div className="w-full lg:w-1/4 h-52 lg:mx-10 px-10 bg-orange-50 shadow-md p-4 rounded-lg">
          <h1 className="text-xl font-bold mb-4">Cart Totals</h1>
          <p className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>{calculateTotal().toLocaleString()}</span>
          </p>
          <p className="flex justify-between text-sm text-yellow-500 mb-4">
            <span>Total</span>
            <span>{calculateTotal().toLocaleString()}</span>
          </p>
          <button className="w-full text-center bg-black text-white hover:bg-yellow-400 px-4 py-2 rounded-lg">
            Check Out
          </button>
        </div>
    </div>
      )}
      
    </div>
  );
};

export default CartPage;
