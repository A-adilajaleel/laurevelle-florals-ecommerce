import { useContext } from "react"
import { OrderContext } from "../../Context/OrderContext"
import { UserContext } from "../../Context/UserContext"
import toast from "react-hot-toast"
const ManageOrders = () => {
  
  const { orders,updateOrderStatus,deleteOrder } = useContext(OrderContext)
  const { users } = useContext(UserContext)

 
  const ordersByUser = users.map(user => {
    return {
      ...user,
      orders: orders.filter(order => order.userId === user.id)
    }
  })
  const handleDelete = (orderId) => {
    if (window.confirm("Are you sure you want to permanently delete this order?")) {
      deleteOrder(orderId)
      toast.success("Order deleted successfully")
    }
  }
  const getStatusColor = (status) => {
      if(status === "Placed") return "bg-blue-100 text-blue-800 border-blue-200";
      if(status === "Shipped") return "bg-yellow-100 text-yellow-800 border-yellow-200";
      if(status === "Delivered") return "bg-green-100 text-green-800 border-green-200";
      if(status === "Cancelled") return "bg-red-100 text-red-800 border-red-200";
      return "bg-gray-100 text-gray-800";
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
          Order Management
        </h1>

        {orders.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-xl shadow">
            <p className="text-gray-500 text-lg">No orders found in the system.</p>
          </div>
        ) : (
          ordersByUser.map(user => (
            user.orders.length > 0 && (
              <div key={user.id} className="mb-10">
                
               
                <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 p-2 rounded-full text-sm">User</span>
                  {user.name} <span className="text-gray-400 text-sm font-normal">({user.email})</span>
                </h2>

                <div className="grid gap-6">
                  {user.orders.map(order => (
                    <div
                      key={order.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                    >
                     
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex flex-wrap justify-between items-center gap-4">
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Order ID</p>
                          <p className="font-mono text-gray-800 font-semibold">#{order.id}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Date Placed</p>
                          <p className="text-gray-800">{order.date}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Total Amount</p>
                          <p className="text-pink-600 font-bold text-lg">€ {order.total}</p>
                        </div>
                       <div className="flex flex-col">
                            <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Update Status</label>
                            <select 
                                value={order.status}
                                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                                className={`px-4 py-2 rounded-lg font-bold border outline-none cursor-pointer transition ${getStatusColor(order.status)}`}
                            >
                                <option value="Placed">Placed</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                         <button 
                          onClick={() => handleDelete(order.id)}
                          className="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white p-2 rounded-lg transition duration-200 flex items-center gap-2"
                          title="Delete Order"
                        >
                          
                          <span className="text-sm font-bold hidden sm:inline">Delete</span>
                        </button>
                      </div>
                          
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
       
                        <div>
                          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                         Shipping Address
                          </h3>
                          {order.shipping ? (
                            <div className="text-sm text-gray-600 space-y-1 bg-gray-50 p-4 rounded-lg border border-gray-100">
                              <p className="font-bold text-gray-900 text-base">{order.shipping.fullName}</p>
                              <p>{order.shipping.email}</p>
                              <hr className="my-2 border-gray-200"/>
                              <p>{order.shipping.address}</p>
                              <p>{order.shipping.city}, {order.shipping.zip}</p>
                              <p className="font-semibold">{order.shipping.country}</p>
                            </div>
                          ) : (
                            <p className="text-red-500 italic text-sm">Shipping details not available for this order.</p>
                          )}
                        </div>

      
                        <div>
                          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            Order Items
                          </h3>
                          <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex justify-between items-center p-3 border-b border-gray-200 last:border-0">
                                <div className="flex items-center gap-3">
                                  <span className="bg-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold border text-gray-500">
                                    {item.quantity}
                                  </span>
                                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-900">
                                  € {item.price * item.quantity}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))
        )}
      </div>
    </div>
  )
}

export default ManageOrders
