import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'

function FoodItem() {
  return (
    <div className='flex flex-wrap justify-center gap-10 lg:justify-start mx-6 my-10'>
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
        />)
      })}
      
    </div>
  )
}

export default FoodItem