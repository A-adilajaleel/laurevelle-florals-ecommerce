import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { OrderContext } from '../../Context/OrderContext'
import { UserContext } from '../../Context/UserContext'
import toast from 'react-hot-toast'

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const { placeOrder } = useContext(OrderContext)
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    country: 'UK',
    payment: 'Cash on Delivery',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleOrder = (e) => {
    e.preventDefault()
    if (cart.length === 0) return toast.error("Cart is Empty!")
    if (window.confirm("Confirm order placement?")) {
      placeOrder(user.id, cart, total, formData)
      clearCart()
      toast.success("Order Placed Successfully!")
      navigate("/success")
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="bg-white shadow-md rounded-xl p-4 md:p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Order Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-3">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center py-2 text-sm md:text-base border-b border-gray-50 last:border-0">
                <div className="pr-4">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-gray-700 whitespace-nowrap">€ {item.price * item.quantity}</p>
              </div>
            ))}
          </div>
        )}
        <div className="text-right text-lg md:text-xl font-bold mt-4 pt-2 text-pink-700">
          Total: € {total}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-4 md:p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Delivery Details</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
              >
                <option value="">Select Country</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="Germany">Germany</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
          
          <textarea
            name="address"
            placeholder="Delivery Address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">Payment Method</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-pink-500"
            >
              <option>Cash on Delivery</option>
              <option>Card Payment</option>
              <option>UPI</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 font-medium transition"
        >
          Back
        </button>

        <button
          onClick={handleOrder}
          className="w-full sm:w-auto px-10 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition shadow-lg"
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

export default Checkout
