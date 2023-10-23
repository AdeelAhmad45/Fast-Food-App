import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from 'react-hot-toast';

function FoodItem() {
  const handleToast = (name) => toast.success(`Added ${name} to cart`)
  return (
   <>
   <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className="flex flex-wrap justify-center gap-8 lg:justify-start mx-6 my-10 cursor-pointer">
      {FoodData.map((food) => {
        return (
          <FoodCard
            key={food.id}
            id={food.id}
            img={food.img}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            handleToast={handleToast}

          />
        );
      })}
    </div>
   </>
  );
}

export default FoodItem;
