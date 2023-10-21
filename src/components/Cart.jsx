import React from 'react'
import { IoMdClose } from 'react-icons/io'
import ItemCard from './ItemCard'

function Cart() {
  return (
    <>
    <div className='fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white'>
        <div className='flex justify-between items-center my-4'>
            <span className='font-bold text-gray-800 text-xl'>My Order</span>
            <IoMdClose className='border-2 border-gray-600 text-gray-600 font-bold rounded-md text-xl p-1 hover:text-red-300 hover:border-red-300 cursor-pointer'/>
        </div>
                <ItemCard />
                <ItemCard />
        <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-600'>Total Amount</h3>
            <h3 className='font-semibold text-gray-600'>Items :</h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2' />
            <button className='font-bold text-white bg-green-600 px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
        </div>
    </div>
    </>
  )
}

export default Cart