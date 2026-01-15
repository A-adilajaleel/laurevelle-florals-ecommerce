import React, { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ProductContext } from "../../Context/ProductContext"
import { CartContext } from "../../Context/CartContext"
import { UserContext } from "../../Context/UserContext"



const CategoryProducts = () => {
    const { user } = useContext(UserContext)

  const { name } = useParams()
  const{ addtoCart}=useContext(CartContext)
  const navigate = useNavigate()

  const { getProductsByCategory } = useContext(ProductContext)
  const products = getProductsByCategory(name)

  return (
    <div className="p-6 sm:p-10 min-h-screen bg-gray-50 flex flex-col items-center">
      
      <h1 className="text-3xl sm:text-5xl font-serif font-bold text-pink-900 mb-2 mt-4 text-center tracking-wide">
        {name} Collection
      </h1>
      <div className="h-1 w-24 bg-pink-300 rounded-full mb-10"></div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <img 
            src="https://cdn-icons-png.flaticon.com/128/4076/4076432.png" 
            alt="No items" 
            className="w-24 h-24 opacity-50 mb-4"
          />
          <p className="text-center text-gray-500 text-xl font-light">
            No products found in this category yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
          {products.map(product => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100"
            >
              
              <div className="h-64 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
              </div>

             
              <div className="p-6 flex flex-col flex-1 items-center text-center">
                <h3 
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="text-xl font-serif font-medium text-gray-900 mb-2 cursor-pointer hover:text-pink-700 transition-colors"
                >
                  {product.name}
                </h3>
                
                <p className="text-2xl font-bold text-gray-800 mb-6">
                  € {product.price}
                </p>

               
                <div className="w-full mt-auto flex gap-3">
                  <button
                    onClick={() => {
                      if (!user) {
                        navigate("/login")
                        return
                      }
                      addtoCart(product)
                    }}
                    className="flex-1 bg-white border-2 border-amber-900 text-amber-900 py-2.5 rounded-full font-bold text-sm hover:bg-amber-50 transition-colors active:scale-95"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      if (!user) {
                        navigate("/login")
                        return
                      }
                      navigate("/checkout")
                    }}
                    className="flex-1 bg-amber-900 text-white py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-amber-800 hover:shadow-lg transition-all active:scale-95"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      
      <button
        onClick={() => navigate(-1)}
        className="mt-12 flex items-center gap-2 px-8 py-3 bg-white text-amber-900 border border-amber-900/30 font-semibold rounded-full hover:bg-amber-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
      >
        ← Back
      </button>
    </div>
  )
}

export default CategoryProducts
