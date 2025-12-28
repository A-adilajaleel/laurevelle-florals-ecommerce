import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { ProductContext } from '../../Context/ProductContext'
import { OrderContext } from '../../Context/OrderContext'
import { UserContext } from '../../Context/UserContext'
import toast from 'react-hot-toast'

const Checkout = () => {
  const{cart,clearCart}=useContext(CartContext)
  const{user}=useContext(UserContext)
  const{placeOrder}=useContext(OrderContext)
  const navigate=useNavigate()
  const total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0)
  const handleOrder=()=>{
    if(cart.length===0){
      return toast("Cart is Empty!")
    }
    placeOrder(user.id,cart,total)
    clearCart()
    navigate("/success")
  }
  return (
    <div className="p-8 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Checkout</h1>

    <div className='mb-6'>
      {
        cart.length==0 ?(<p>
          Your Cart Is Empty!!
        </p>):(
          cart.map(item=>(
             <div
        key={item.id}
        className="flex justify-between items-center mb-3 border-b pb-2"
      >
        <div>
          <p className="font-semibold">{item.name}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <p>€ {item.price * item.quantity}</p>
      
      </div>
          ))
        )
      }

    </div>
     <div className="text-xl font-bold mb-6">Total: € {total}</div>
     <button onClick={ handleOrder}
     className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">Place Order</button> 
    </div>
  )
}

export default Checkout
