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
    <div  className="min-h-screen p-8 bg-gray-50 flex justify-center" >
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full">
        <img src={product.image}
          className="w-full h-72 object-cover rounded-t-2xl"
/>
<div className="p-6 space-y-4">
 <h1 className="text-3xl font-bold">{product.name}</h1>
   <p className="text-xl text-pink-600">₹ {product.price}</p>
<p className="text-gray-600">{product.description}</p>
<div className='flex gap-65 font-bold '>
<button
  onClick={() => addtoCart(product)}
  className="w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 cursor-pointer"
>
Add to Cart</button>
<button
  
  className=" w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 cursor-pointer"
>
Buy</button>
</div> 
<button 
  onClick={() => navigate(-1)} 
  className="bg-amber-950 text-white font-mono rounded-full p-1 w-33 mt-4"
>
  Back
</button>
</div>

   </div>
   
    </div>
  )
}

export default ProductDetails
