import { useContext } from "react"
import { OrderContext } from "../../Context/OrderContext"
import { UserContext } from "../../Context/UserContext"

const ManageOrders = () => {
  const { orders } = useContext(OrderContext) 
  const { users } = useContext(UserContext)   

  const getUserById = (userId) => {
    return users.find(u => u.id === userId) || { name: "Unknown", email: "" }
  }


  const ordersByUser = users.map(user => {
    return {
      ...user,
      orders: orders.filter(order => order.userId === user.id)
    }
  })

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-pink-700 text-center">All User Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders yet.</p>
      ) : (
        ordersByUser.map(user => (
          <div key={user.id} className="mb-8">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">
              {user.name} ({user.email})
            </h2>

            {user.orders.length === 0 ? (
              <p className="text-gray-500 mb-4">No orders yet.</p>
            ) : (
              user.orders.map(order => (
                <div
                  key={order.id}
                  className="bg-white shadow-md p-4 mb-4 rounded-xl border-l-4 border-pink-600"
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
                  </div>

                  <p className="mb-2"><b>Total:</b> € {order.total}</p>
                  <p className="font-semibold">
                    Status: <span className={order.status === "placed" ? "text-blue-600" : "text-green-600"}>
                      {order.status}
                    </span>
                  </p>
                </div>
              ))
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default ManageOrders
