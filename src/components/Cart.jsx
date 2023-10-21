import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";

function Cart() {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-4">
          <span className="font-bold text-gray-800 text-xl">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold rounded-md text-xl p-1 hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartItems.map((food) => {
          return (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          );
        })}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-600">Total Amount</h3>
          <h3 className="font-semibold text-gray-600">Items :</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button className="font-bold text-white bg-green-600 px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="rounded-full text-5xl shadow-md bg-white p-3 fixed bottom-10 right-3"
      />
    </>
  );
}

export default Cart;
