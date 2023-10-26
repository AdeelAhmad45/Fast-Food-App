import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

function Success() {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
     setLoading(false)
    },2000)
  }, [])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ? <PropagateLoader color="#36d7b7" /> :
        <div>
          <h1 className='tet-3xl font-semibold mb-3 text-center'>Order Successful</h1>
      <p>Your Order has Successfully Placed</p>
        </div>
      }
      
    </div>
  )
}

export default Success