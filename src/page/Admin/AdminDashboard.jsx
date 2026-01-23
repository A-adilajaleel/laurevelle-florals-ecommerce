import { useState } from "react"
import AddProduct from "./AddProduct"
import ProductList from "./ProductList"
import Messages from "./Messages"
import AdminCategories from "./AdminCategories"
import ManageOrders from "./ManageOrders"
import { UserContext } from "../../Context/UserContext"
import React from 'react'
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AdminCustomRequests from "./AdminCustomRequests"

const AdminDashboard = () => {
  const navigate = useNavigate()
  const { logout } = useContext(UserContext)
  const [activeTab, setActiveTab] = useState("categories")

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="w-full md:w-64 bg-pink-600 text-white p-6 flex flex-col shadow-xl md:rounded-r-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>

        <div className="flex flex-row md:flex-col flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
          <button
            onClick={() => setActiveTab("categories")}
            className={`px-5 py-2 md:py-3 rounded-lg font-medium transition duration-300 hover:bg-pink-700 
              ${activeTab === "categories" ? "bg-pink-700 shadow-lg" : ""} md:w-full text-center md:text-left`}
          >
            Categories
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className={`px-5 py-2 md:py-3 rounded-lg font-medium transition duration-300 hover:bg-pink-700 
              ${activeTab === "products" ? "bg-pink-700 shadow-lg" : ""} md:w-full text-center md:text-left`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("add")}
            className={`px-5 py-2 md:py-3 rounded-lg font-medium transition duration-300 hover:bg-pink-700 
              ${activeTab === "add" ? "bg-pink-700 shadow-lg" : ""} md:w-full text-center md:text-left`}
          >
            Add Product
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`px-5 py-2 md:py-3 rounded-lg font-medium transition duration-300 hover:bg-pink-700 
              ${activeTab === "orders" ? "bg-pink-700 shadow-lg" : ""} md:w-full text-center md:text-left`}
          >
            Orders
          </button>

          <button
            onClick={() => setActiveTab("custom")}
            className={`px-5 py-2 md:py-3 rounded-lg font-medium transition duration-300 hover:bg-pink-700 
              ${activeTab === "custom" ? "bg-pink-700 shadow-lg" : ""} md:w-full text-center md:text-left`}
          >
            Custom
          </button>

          <button
            onClick={() => setActiveTab("messages")}
            className={`px-5 py-2 md:py-3 rounded-lg font-medium transition duration-300 hover:bg-pink-700 
              ${activeTab === "messages" ? "bg-pink-700 shadow-lg" : ""} md:w-full text-center md:text-left`}
          >
            Messages
          </button>

          <button
            onClick={() => logout()}
            className="px-5 py-2 md:py-3 rounded-lg font-medium transition duration-300 hover:bg-pink-800 md:w-full text-center md:text-left mt-2 md:mt-10 bg-pink-900/30"
          >
            LogOut
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8 bg-gray-50 md:rounded-l-3xl shadow-inner overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {activeTab === "products" && <ProductList />}
          {activeTab === "add" && <AddProduct />}
          {activeTab === "categories" && <AdminCategories />}
          {activeTab === "orders" && <ManageOrders />}
          {activeTab === "messages" && <Messages />}
          {activeTab === "custom" && <AdminCustomRequests />}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
