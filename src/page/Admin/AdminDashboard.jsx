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
  const navigate=useNavigate()
  const{logout}=useContext(UserContext)
  const [activeTab, setActiveTab] = useState("categories")
  return (
    <div className="flex min-h-screen bg-gray-100">

      
      <div className="w-64 bg-pink-600 text-white p-6 flex flex-col space-y-4 shadow-xl rounded-r-3xl">

        <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>

        <button
          onClick={() => setActiveTab("categories")}
          className={`block w-full text-left px-4 py-3 rounded-lg font-medium
            transition duration-300 
            hover:bg-pink-700 hover:scale-105
            ${activeTab === "categories" ? "bg-pink-700 shadow-lg" : ""}`}
        >
          Categories
        </button>

        <button
          onClick={() => setActiveTab("products")}
          className={`block w-full text-left px-4 py-3 rounded-lg font-medium
            transition duration-300 
            hover:bg-pink-700 hover:scale-105
            ${activeTab === "products" ? "bg-pink-700 shadow-lg" : ""}`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("add")}
          className={`block w-full text-left px-4 py-3 rounded-lg font-medium
            transition duration-300 
            hover:bg-pink-700 hover:scale-105
            ${activeTab === "add" ? "bg-pink-700 shadow-lg" : ""}`}
        >
          Add Product
        </button>

        <button
          onClick={() => setActiveTab("orders")}
          className={`block w-full text-left px-4 py-3 rounded-lg font-medium
            transition duration-300 
            hover:bg-pink-700 hover:scale-105
            ${activeTab === "orders" ? "bg-pink-700 shadow-lg" : ""}`}
        >
          Orders
        </button>
         <button
          onClick={() => setActiveTab("custom")}
          className={`block w-full text-left px-4 py-3 rounded-lg font-medium
            transition duration-300 
            hover:bg-pink-700 hover:scale-105
            ${activeTab === "custom" ? "bg-pink-700 shadow-lg" : ""}`}
        >
          Custom Requests
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`block w-full text-left px-4 py-3 rounded-lg font-medium
            transition duration-300 
            hover:bg-pink-700 hover:scale-105
            ${activeTab === "messages" ? "bg-pink-700 shadow-lg" : ""}`}
        >
          Messages
        </button>
          <button
          onClick={() => logout()}
          className={`block w-full text-left px-4 py-3 rounded-lg font-medium
            transition duration-300 
            hover:bg-pink-700 hover:scale-105
            ${activeTab === "Logout" ? "bg-pink-700 shadow-lg" : ""}`}
        >
          LogOut
        </button>

      </div>

      
      <div className="flex-1 p-8 bg-gray-50 rounded-l-3xl shadow-inner transition-all duration-300">
        {activeTab === "products" && <ProductList />}
        {activeTab === "add" && <AddProduct />}
        {activeTab === "categories" && <AdminCategories />}
        {activeTab === "orders" && <ManageOrders />}
        {activeTab === "messages" && <Messages />}
        {activeTab === "custom" && <AdminCustomRequests />}
      </div>

    </div>
  )
}

export default AdminDashboard
