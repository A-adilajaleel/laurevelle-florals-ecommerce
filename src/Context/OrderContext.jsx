import { createContext,useEffect,useState } from "react";
export const OrderContext=createContext()

export const OrderProvider=({children})=>{

const[orders,setOrders]=useState(
   JSON.parse (localStorage.getItem("orders"))||[]
)

useEffect(()=>{
    localStorage.setItem("orders",JSON.stringify(orders))
},[orders])

const placeOrder=(userId,cart,total)=>{
const newOrder={
    id:Date.now(),
    userId:userId,
    items:cart,
    total:total,
    date:new Date().toLocaleString(),
    status:"placed"
}
setOrders(prev=>[...prev,newOrder])
}

const getUserOrders=(userId)=>{
return orders.filter(order=>order.userId===userId)
}
// const updateOrderStatus = (orderId, status) => {
//     setOrders(prev =>
//       prev.map(order =>
//         order.id === orderId ? { ...order, status } : order
//       )
//     )
//   }

return(
    <OrderContext.Provider value={{orders,placeOrder,
      getUserOrders}}>
        {children}
    </OrderContext.Provider>
)
}