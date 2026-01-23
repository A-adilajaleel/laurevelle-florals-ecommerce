import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useNavigate } from "react-router-dom"

const Cart = () => {
const navigate = useNavigate()
  const { cart, addtoCart, removefromCart, clearCart } = useContext(CartContext)

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-pink-700">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your Cart Is Empty!</p>
      ) : (
        <div className="max-w-5xl mx-auto">
          <div className="hidden md:grid grid-cols-5 bg-pink-100 p-4 font-bold rounded-t-xl text-center">
            <div>Image</div>
            <div>Product</div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Action</div>
          </div>

          <div className="bg-white shadow-lg rounded-b-xl overflow-hidden">
            {cart.map(item => (
              <div key={item.id} className="flex flex-col md:grid md:grid-cols-5 border-t items-center p-6 md:p-4 text-center gap-4 md:gap-0">
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-14 md:h-14 object-cover rounded shadow-sm"
                  />
                </div>

                <div className="font-medium text-lg md:text-base">{item.name}</div>

                <div className="flex items-center justify-center">
                  <button 
                    className="bg-gray-200 w-10 h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-gray-300 text-xl md:text-base"
                    onClick={() => removefromCart(item)}
                  >
                    −
                  </button>
                  <span className="mx-4 font-bold text-lg md:text-base">{item.quantity}</span>
                  <button 
                    className="bg-gray-200 w-10 h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-gray-300 text-xl md:text-base"
                    onClick={() => addtoCart(item)}
                  >
                    +
                  </button>
                </div>

                <div className="font-semibold text-pink-600 md:text-black text-lg md:text-base">
                  € {item.price * item.quantity}
                </div>

                <div className="w-full md:w-auto">
                  <button 
                    className="w-full md:w-auto text-red-500 hover:text-red-700 font-semibold md:bg-red-50 md:px-3 md:py-1 md:rounded-lg transition"
                    onClick={() => removefromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6 bg-white p-6 rounded-xl shadow-md">
            <button 
              className='bg-pink-400 hover:bg-pink-500 rounded-2xl px-6 py-3 md:py-2 font-bold transition-colors w-full md:w-auto order-3 md:order-1' 
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <h2 className="text-2xl font-bold text-gray-800 order-1 md:order-2">
              Total: <span className="text-pink-700">€ {total}</span>
            </h2>

            <button 
              className="bg-green-600 hover:bg-green-700 rounded-2xl px-8 py-3 md:py-2 font-bold text-white transition-colors w-full md:w-auto order-2 md:order-3 shadow-lg"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => navigate(-1)} 
        className="bg-amber-950 hover:bg-amber-900 text-white font-mono rounded-full py-2.5 px-10 mt-6 block mx-auto md:mx-0 transition-all active:scale-95"
      >
        Back
      </button>
    </div>
  )
}

export default Cart
