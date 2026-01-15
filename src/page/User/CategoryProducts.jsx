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
    <div className="p-4 sm:p-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 mb-8 text-center">
        {name} 
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-base sm:text-lg">
          No Products Found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="cursor-pointer bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col"
            >
              <div className="h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-4 text-center flex-1">
                <h3 className=" sm:text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-pink-600 font-bold text-lg">
                  € {product.price}
                </p>
              </div>

              <div className="flex gap-3 p-4 pt-0">
                <button
                onClick={() => {
                if (!user) {
               navigate("/login")
                 return
                   }
                   addtoCart(product)
                         }}

                className="flex-1 bg-amber-800 text-white py-2 rounded-2xl font-semibold text-sm sm:text-base">
                  Add to Cart
                  
                </button>
                <button
                  className="flex-1 bg-amber-800 text-white py-2 rounded-2xl font-semibold text-sm sm:text-base"
                 onClick={() => {
                           if (!user) {
                navigate("/login")
                        return
                }
                    navigate("/checkout")
                       }}

                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
   
<button 
  onClick={() => navigate(-1)} 
  className="bg-amber-950 text-white font-mono rounded-full p-1 w-33 mt-4"
>
  Back
</button>
    </div>
  )
}

export default CategoryProducts
