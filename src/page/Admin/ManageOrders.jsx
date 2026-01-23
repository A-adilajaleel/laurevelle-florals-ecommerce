import { useContext } from "react"
import { OrderContext } from "../../Context/OrderContext"
import { UserContext } from "../../Context/UserContext"
import toast from "react-hot-toast"
const ManageOrders = () => {
const { orders, updateOrderStatus, deleteOrder } = useContext(OrderContext)
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
    if (status === "Placed") return "bg-blue-100 text-blue-800 border-blue-200";
    if (status === "Shipped") return "bg-yellow-100 text-yellow-800 border-yellow-200";
    if (status === "Delivered") return "bg-green-100 text-green-800 border-green-200";
    if (status === "Cancelled") return "bg-red-100 text-red-800 border-red-200";
    return "bg-gray-100 text-gray-800";
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 border-b pb-4 text-center md:text-left">
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
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold w-fit">User</span>
                  <h2 className="text-lg md:text-xl font-bold text-gray-700">
                    {user.name} <span className="text-gray-400 text-sm font-normal block sm:inline">({user.email})</span>
                  </h2>
                </div>

                <div className="grid gap-6">
                  {user.orders.map(order => (
                    <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      
                      {/* Header Section: flex-1 ensures the grid fills the space */}
                      <div className="bg-gray-50 px-4 md:px-6 py-4 border-b border-gray-200 flex flex-col lg:flex-row justify-between gap-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1 w-full">
                          <div>
                            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Order ID</p>
                            <p className="font-mono text-gray-800 font-semibold text-sm">#{order.id}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Date Placed</p>
                            <p className="text-gray-800 text-sm">{order.date}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Total Amount</p>
                            <p className="text-pink-600 font-bold text-base">€ {order.total}</p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
                          <div className="w-full sm:w-auto">
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1 block">Update Status</label>
                            <select 
                              value={order.status}
                              onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                              className={`w-full sm:w-auto px-4 py-2 rounded-lg font-bold border outline-none cursor-pointer transition text-sm ${getStatusColor(order.status)}`}
                            >
                              <option value="Placed">Placed</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </div>
                          <button 
                            onClick={() => handleDelete(order.id)}
                            className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white p-2.5 rounded-lg transition duration-200 flex items-center gap-2 border border-red-100"
                            title="Delete Order"
                          >
                            <span className="text-sm font-bold">Delete</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        <div>
                          <h3 className="font-bold text-gray-800 mb-3 text-sm md:text-base border-l-4 border-pink-500 pl-2">
                            Shipping Address
                          </h3>
                          {order.shipping ? (
                            <div className="text-xs md:text-sm text-gray-600 space-y-1 bg-gray-50 p-4 rounded-lg border border-gray-100">
                              <p className="font-bold text-gray-900 text-base">{order.shipping.fullName}</p>
                              <p className="break-all">{order.shipping.email}</p>
                              <hr className="my-2 border-gray-200"/>
                              <p>{order.shipping.address}</p>
                              <p>{order.shipping.city}, {order.shipping.zip}</p>
                              <p className="font-semibold text-gray-800">{order.shipping.country}</p>
                            </div>
                          ) : (
                            <p className="text-red-500 italic text-sm">Shipping details not available.</p>
                          )}
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-800 mb-3 text-sm md:text-base border-l-4 border-blue-500 pl-2">
                            Order Items
                          </h3>
                          <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex justify-between items-center p-3 border-b border-gray-200 last:border-0 bg-white sm:bg-transparent mb-1 sm:mb-0">
                                <div className="flex items-center gap-3">
                                  <span className="bg-pink-100 text-pink-700 w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold border border-pink-200">
                                    {item.quantity}
                                  </span>
                                  <span className="text-xs md:text-sm font-medium text-gray-700">{item.name}</span>
                                </div>
                                <span className="text-xs md:text-sm font-semibold text-gray-900">
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
