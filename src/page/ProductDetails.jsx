import React from 'react'
import { useContext } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { ProductContext } from '../Context/ProductContext'
import { CartContext } from '../Context/CartContext'

const ProductDetails = () => {
    const{id}=useParams()
    const{products}=useContext(ProductContext)
    const{addtoCart}=useContext(CartContext)
    const navigate= useNavigate()
    const product=products.find(p=>p.id===Number(id))
    if(!product){
        return <p>Product Not Found</p>
    }

  return (
    <div  className="min-h-screen p-4 md:p-8 bg-gray-50 flex justify-center items-center" >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md md:max-w-xl overflow-hidden">
       <img 
          src={product.image}
          className="w-full h-64 md:h-96 object-cover"
          alt={product.name}
        />

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl md:text-2xl text-pink-600 font-semibold">₹ {product.price}</p>
          </div>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {product.description}
          </p>
<div className='flex flex-col sm:flex-row gap-4 font-bold pt-4 '>
<button
  onClick={() => addtoCart(product)}
  className="w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 cursor-pointer transition-colors"
>
Add to Cart</button>
<button
  
  className=" w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 cursor-pointer transition-colors"
>
Buy</button>
</div> 
<div className="flex justify-start sm:justify-start mt-4">
            <button 
              onClick={() => navigate(-1)} 
              className="bg-amber-950 text-white font-mono rounded-full py-2 px-8 hover:bg-amber-900 transition-colors w-full sm:w-auto"
            >
              Back
            </button>
          </div>
</div>

   </div>
   
    </div>
  )
}

export default ProductDetails
