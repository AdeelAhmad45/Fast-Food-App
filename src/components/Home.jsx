import React from 'react'
import Navbar from './Navbar'
import CategoryMenu from './Categorymenu'
import FoodItem from './FoodItem'

function Home() {
  return (
    <>
    <Navbar />
    <CategoryMenu />
    <FoodItem />
    </>
  )
}

export default Home