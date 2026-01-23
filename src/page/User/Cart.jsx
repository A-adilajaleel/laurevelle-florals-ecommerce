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
          <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100">
            <table className="w-full bg-white min-w-[600px]">
              <thead className="bg-pink-100 text-pink-800">
                <tr>
                  <th className="p-4 text-sm uppercase tracking-wider">Image</th>
                  <th className="p-4 text-sm uppercase tracking-wider text-left">Product</th>
                  <th className="p-4 text-sm uppercase tracking-wider">Quantity</th>
                  <th className="p-4 text-sm uppercase tracking-wider">Price</th>
                  <th className="p-4 text-sm uppercase tracking-wider">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {cart.map(item => (
                  <tr key={item.id} className="text-center hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-xl shadow-sm mx-auto"
                      />
                    </td>

                    <td className="p-4 font-bold text-gray-800 text-left">{item.name}</td>

                    <td className="p-4">
                      <div className="flex items-center justify-center gap-3">
                        <button 
                          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-pink-200 transition-colors font-bold"
                          onClick={() => removefromCart(item)}
                        >
                          −
                        </button>
                        
                        {/* Fixed: Used min-w-5 to remove the arbitrary value warning */}
                        <span className="font-mono font-bold text-lg min-w-5">{item.quantity}</span>
                        
                        <button 
                          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-pink-200 transition-colors font-bold"
                          onClick={() => addtoCart(item)}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="p-4 font-black text-gray-900">
                      € {(item.price * item.quantity).toFixed(2)}
                    </td>

                    <td className="p-4">
                      <button 
                        className="text-red-500 hover:text-red-700 font-bold text-sm uppercase tracking-tight transition-colors"
                        onClick={() => removefromCart(item)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <button 
              className='w-full sm:w-auto bg-pink-100 text-pink-700 hover:bg-pink-200 rounded-2xl px-6 py-3 font-bold transition-all active:scale-95' 
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <div className="text-center sm:text-right">
              <p className="text-gray-400 text-xs uppercase font-bold tracking-widest mb-1">Total Amount</p>
              <h2 className="text-3xl font-black text-pink-700">
                € {total.toFixed(2)}
              </h2>
            </div>

            <button 
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white rounded-2xl px-10 py-3 font-bold shadow-lg shadow-green-200 transition-all active:scale-95"
              onClick={() => navigate("/checkout")}
            >
              Checkout Now
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => navigate(-1)} 
        className="bg-gray-800 hover:bg-black text-white font-bold rounded-full py-2 px-8 mt-8 transition-all flex items-center gap-2 mx-auto sm:mx-0"
      >
        ← Back
      </button>
    </div>
  )
}

export default Cart
