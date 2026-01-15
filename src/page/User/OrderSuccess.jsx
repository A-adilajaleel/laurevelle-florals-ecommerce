import React from 'react'

import { useNavigate } from "react-router-dom"

const OrderSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8">
      <div className='bg-gray-100 shadow-2xl rounded-2xl px-4 py-4 w-115 h-100'>
       <div className="flex items-center justify-center gap-3 mb-6">
  <img
    className="w-10 h-10"
    src="https://cdn-icons-png.flaticon.com/128/2278/2278992.png"
    alt="Success"
  />
  <h1 className="text-3xl md:text-4xl font-bold text-green-600">
    Order Placed Successfully!
  </h1>
</div>

      
      <p className="text-lg mb-6 text-center">
        Thank you for your purchase. Your order has been placed successfully.
      </p>

      <button
        onClick={() => navigate("/orders")}
        className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition"
      >
        View My Orders
      </button>
      </div>
    </div>
  )
}

export default OrderSuccess

