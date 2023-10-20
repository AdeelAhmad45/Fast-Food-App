import React from 'react'
import {AiFillStar} from 'react-icons/ai'

function FoodCard({id, img, name, price, desc, rating}) {
  return (
    <div className='font-bold flex flex-col w-[250px] bg-white p-5 rounded-lg'>
      <img src={img}
      className='w-auto  h-[130px] hover:scale-110 transition-all duration-500 ease-in-out'
      />

      <div className='text-sm flex  justify-between'>
        <h2>{name}</h2>
        <span className='text-green-500'>₹{price}</span>
      </div>
      <p className='text-sm font-normal'>{desc.slice(0,50)}</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
          <AiFillStar className='mr-1 text-yellow-500'/> {rating}
        </span>
        <button className='p-1 bg-green-400 hover:bg-green-500 rounded-lg m-1 text-sm'>Add to cart</button>
      </div>
    </div>
  )
}

export default FoodCard