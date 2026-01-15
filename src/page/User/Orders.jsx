import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { OrderContext } from "../../Context/OrderContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import React from 'react'

const Orders = () => {
    const navigate=useNavigate()
    const{user}=useContext(UserContext)
    const{getUserOrders,deleteOrder}=useContext(OrderContext)
     const orders=getUserOrders(user.id)
     const handleDelete = (orderId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this order?")
        if (confirmDelete) {
            deleteOrder(orderId)
            toast.success("Order deleted successfully")
        }
    }
    
  return (
    <div className="p-8 max-w-3xl mx-auto">
       <div>
   <Link to='/dashboard'> <button className="bg-pink-950 text-white rounded-full p-2">Back to Dashboard</button></Link>
  </div>
        <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

      {
        orders.length===0 ? (
           <p className="text-center text-gray-500">You have no orders yet.</p>  
        ):(
            orders.map(order=>(
                <div key={order.id}
                className="bg-white shadow-md p-6 rounded-xl mb-6 border-l-4 border-green-600"
                >
                    <div className="flex justify-between mb-2">
                    <p><b>Order ID:</b> {order.id}</p>
                        <p><b>Date:</b> {order.date}</p>
                           </div>


                           <div className="mb-2">
                            <b>Items:</b>
                            <ul className="list-disc list-inside">
                                {order.items.map(item => (
                                <li key={item.id}>
                                 {item.name} × {item.quantity} — € {item.price * item.quantity}
                                            </li>
                                                   ))}

                            </ul>
                                 <p className="mb-2"><b>Total:</b> € {order.total}</p>
                                 <p className="font-semibold mt-2">
                                     Status: 
                                               <span className={`ml-2 px-3 py-1 rounded-full text-sm ${
                                        order.status === "Delivered" ? "bg-green-100 text-green-700" :
                                       order.status === "Shipped" ? "bg-yellow-100 text-yellow-700" :
                                             order.status === "Cancelled" ? "bg-red-100 text-red-700" :
                                                  "bg-blue-100 text-blue-700" 
                                                          }`}>
                                                                     {order.status}
                                                                               </span>
                                                                                </p>
                                              <button 
                                        onClick={() => handleDelete(order.id)}
                                        className="bg-red-900 text-white rounded-full px-4 py-1.5 cursor-pointer hover:bg-red-700 transition mt-4"
                                    >
                                        Delete
                                    </button>

                           </div>



                </div>
            ))
        )
      }
       






    </div>
  )
}

export default Orders
