import { createContext,useEffect,useState } from "react";
export const OrderContext=createContext()

export const OrderProvider=({children})=>{

const[orders,setOrders]=useState(
   JSON.parse (localStorage.getItem("orders"))||[]
)

useEffect(()=>{
    localStorage.setItem("orders",JSON.stringify(orders))
},[orders])

const placeOrder=(userId,cart,total,shipping)=>{
const newOrder={
    id:Date.now(),
    userId:userId,
    items:cart,
    total:total,
    date:new Date().toLocaleString(),
    shipping: shipping,
    status:"placed"
}
setOrders(prev=>[...prev,newOrder])
}

const getUserOrders=(userId)=>{
return orders.filter(order=>order.userId===userId)
}
const deleteOrder = (orderId) => {

  const updatedOrders = orders.filter((order) => order.id !== orderId);
  
  setOrders(updatedOrders);
  
 
  localStorage.setItem("orders", JSON.stringify(updatedOrders));
}
const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    )
    toast.success(`Order status updated to ${newStatus}`)
  }
  

return(
    <OrderContext.Provider value={{orders,placeOrder,
      getUserOrders,setOrders,deleteOrder,updateOrderStatus}}>
        {children}
    </OrderContext.Provider>
)
}