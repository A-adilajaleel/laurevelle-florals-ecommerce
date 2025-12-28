import React from 'react'

import { useNavigate } from "react-router-dom"

const OrderSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8">
      <div>
      <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">
        <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/2278/2278992.png"/> Order Placed Successfully!
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
  )
}

export default OrderSuccess

