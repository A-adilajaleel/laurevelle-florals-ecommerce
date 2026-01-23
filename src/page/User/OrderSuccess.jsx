import React from 'react'

import { useNavigate } from "react-router-dom"

const OrderSuccess = () => {
 const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 md:p-8">
      <div className='bg-white shadow-xl rounded-3xl px-8 py-10 w-full max-w-lg flex flex-col items-center border border-gray-100'>
        
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="bg-green-100 p-5 rounded-full">
            <img
              className="w-16 h-16"
              src="https://cdn-icons-png.flaticon.com/128/2278/2278992.png"
              alt="Success"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 text-center">
            Order Placed Successfully!
          </h1>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 font-medium">
            Thank you for your purchase.
          </p>
          <p className="text-gray-500 mt-2 overflow-hidden">
            Your order has been confirmed and is now being processed by our team.
          </p>
        </div>

        <button
          onClick={() => navigate("/orders")}
          className="w-full bg-pink-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:bg-pink-700 hover:shadow-lg transition-all active:scale-95"
        >
          View My Orders
        </button>

        <button 
          onClick={() => navigate("/")}
          className="mt-6 text-gray-400 hover:text-pink-600 font-semibold transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default OrderSuccess

