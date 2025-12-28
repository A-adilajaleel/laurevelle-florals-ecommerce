import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { OrderContext } from "../../Context/OrderContext";
import { useNavigate } from "react-router-dom";

import React from 'react'

const Orders = () => {
    const navigate=useNavigate()
    const{user}=useContext(UserContext)
    const{getUserOrders}=useContext(OrderContext)
     const orders=getUserOrders(user.id)
    
  return (
    <div className="p-8 max-w-3xl mx-auto">
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
                                 <p className="font-semibold">
                                      Status: <span className={order.status === "Placed" ? "text-blue-600" : "text-green-600"}>
                                          {order.status}
                                                </span>
                                                    </p>

                           </div>


                </div>
            ))
        )
      }
       






    </div>
  )
}

export default Orders
