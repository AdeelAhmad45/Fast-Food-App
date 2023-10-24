import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { setCategory } from "../slice/CategorySlice";
import { useDispatch, useSelector } from "react-redux";

function Categorymenu() {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  const selectedCategory = useSelector((state) => state.category.category)

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="ml-6 ">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 flex-wrap">
      <button
              onClick={() => dispatch(setCategory("All"))}
              className={`px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-400 hover:text-white ${selectedCategory === "All" && 'bg-green-500 text-white'}`}
            >
              All
            </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-400 hover:text-white ${selectedCategory === category && 'bg-green-500 text-white'}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Categorymenu;
