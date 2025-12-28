import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { UserContext } from "../Context/UserContext"

const ProductCard = ({ product, onEdit, onDelete }) => {
  const { user } = useContext(UserContext)
  const { addtoCart } = useContext(CartContext)
  const navigate = useNavigate()

  const isAdmin = user?.isAdmin

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login")
      return
    }
    addtoCart(product)
  }

  const handleBuy = () => {
    if (!user) {
      navigate("/login")
      return
    }
    navigate("/checkout")
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => navigate(`/product/${product.id}`)}
        className="w-full h-48 object-cover cursor-pointer"
      />

      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">₹ {product.price}</p>
        <p className="text-gray-500 text-sm mt-2">{product.subtype}</p>
      </div>

      <div className="p-4 flex gap-3">
        {isAdmin ? (
          <>
            <button
              onClick={() => onEdit(product)}
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-900 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuy}
              className="flex-1 bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-900 transition"
            >
              Buy
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ProductCard
