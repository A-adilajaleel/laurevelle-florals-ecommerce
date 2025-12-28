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
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-pink-700">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your Cart Is Empty!</p>
      ) : (
        <>
          <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
            <thead className="bg-pink-100">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cart.map(item => (
                <tr key={item.id} className="border-t text-center">
                  <td className="p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded mx-auto"
                    />
                  </td>

                  <td className="p-3 font-medium">{item.name}</td>

                  <td className="p-3">
                    <button onClick={() => removefromCart(item)}>−</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => addtoCart(item)}>+</button>
                  </td>

                  <td className="p-3 font-semibold">
                    € {item.price * item.quantity}
                  </td>

                  <td className="p-3">
                    <button onClick={() => removefromCart(item)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-6">
            <button className='bg-pink-400 rounded-2xl p-2 font-bold' onClick={clearCart}>
              Clear Cart
            </button>

            <h2 className="text-xl font-bold">
              Total: € {total}
            </h2>

            <button className="bg-green-600 rounded-2xl p-2 font-bold text-white"onClick={() => navigate("/checkout")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
