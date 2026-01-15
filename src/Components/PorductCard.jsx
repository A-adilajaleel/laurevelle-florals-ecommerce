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
    <div className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full border border-gray-100">
      
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
      </div>

      <div className="p-6 flex flex-col flex-1 items-center text-center">
        <p className="text-xs font-bold tracking-widest text-pink-600 uppercase mb-2">
          {product.subtype}
        </p>
        
        <h3 
          onClick={() => navigate(`/product/${product.id}`)}
          className="font-serif text-2xl font-medium text-gray-900 mb-2 cursor-pointer hover:text-pink-800 transition-colors"
        >
          {product.name}
        </h3>
        
        <p className="text-lg font-semibold text-gray-700 mb-4">
          € {product.price}
        </p>

        <div className="w-full mt-auto flex gap-3 pt-4 border-t border-gray-100">
          {isAdmin ? (
            <>
              <button
                onClick={() => onEdit(product)}
                className="flex-1 bg-slate-800 text-white py-2.5 rounded-full text-sm font-medium hover:bg-slate-900 hover:shadow-lg transition-all active:scale-95"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="flex-1 bg-red-500 text-white py-2.5 rounded-full text-sm font-medium hover:bg-red-600 hover:shadow-lg transition-all active:scale-95"
              >
                Delete
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-white border border-pink-900 text-pink-900 py-2.5 rounded-full text-sm font-bold hover:bg-pink-50 transition-colors active:scale-95"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuy}
                className="flex-1 bg-pink-900 text-white py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-pink-800 hover:shadow-xl transition-all active:scale-95"
              >
                Buy Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
