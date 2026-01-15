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
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between border-b py-2 text-sm"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p>€ {item.price * item.quantity}</p>
            </div>
          ))
        )}

        <div className="text-right text-lg font-bold mt-4">
          Total: € {total}
        </div>
      </div>

    
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="mt-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
  <select
    name="country"
    value={formData.country}
    onChange={handleChange}
    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
  >
    <option value="">Select Country</option>
    
    <option value="India">India</option>
    <option value="United States">United States</option>
  
    <option value="Germany">Germany</option>
    <option value="Canada">Canada</option>
    <option value="Australia">Australia</option>
  </select>
</div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Cash on Delivery</option>
            <option>Card Payment</option>
            <option>UPI</option>
          </select>
        </div>
      </div>

      
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Back
        </button>

        <button
          onClick={handleOrder}
          className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

export default Checkout
