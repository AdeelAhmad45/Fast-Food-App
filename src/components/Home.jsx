import React from "react";
import Navbar from "./Navbar";
import CategoryMenu from "./CategoryMenu";
import FoodItem from "./FoodItem";
import Cart from "./Cart";

function Home() {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </>
  );
}

export default Home;
