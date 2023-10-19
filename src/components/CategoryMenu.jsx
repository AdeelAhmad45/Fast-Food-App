import React from 'react'

function Categorymenu() {
  return (
    <div className='ml-6 '>
        <h3 className='text-xl font-semibold'>Find the best food</h3>
        <div className='my-5 flex gap-3 flex-wrap'>
            <button className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-400 hover:text-white'>
                All
            </button>
            <button className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-400 hover:text-white'>
                Lunch
            </button>
            <button className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-400 hover:text-white'>
            Breakfast
            </button>
            <button className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-400 hover:text-white'>
                Dinner
            </button>
            <button className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-400 hover:text-white'>
                Dinner
            </button>
            
            
        </div>
    </div>
  )
}

export default Categorymenu