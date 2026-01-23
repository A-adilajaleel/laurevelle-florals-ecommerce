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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "categories", label: "Categories" },
    { id: "products", label: "Products" },
    { id: "add", label: "Add Product" },
    { id: "orders", label: "Orders" },
    { id: "custom", label: "Custom Requests" },
    { id: "messages", label: "Messages" },
  ]

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setIsMobileMenuOpen(false) 
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      
      <div className="md:hidden flex items-center justify-between p-4 bg-pink-600 text-white shadow-lg">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-3xl">
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <div className={`
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 fixed md:relative z-50 w-64 h-full bg-pink-600 text-white p-6 flex flex-col space-y-4 shadow-xl rounded-r-3xl transition-transform duration-300 ease-in-out
      `}>
        <h1 className="hidden md:block text-2xl font-bold mb-6 text-center">Admin Panel</h1>

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabChange(item.id)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium
              transition duration-300 
              hover:bg-pink-700 hover:scale-105
              ${activeTab === item.id ? "bg-pink-700 shadow-lg" : ""}`}
          >
            {item.label}
          </button>
        ))}

        <button
          onClick={() => logout()}
          className="block w-full text-left px-4 py-3 rounded-lg font-medium transition duration-300 hover:bg-pink-700 hover:scale-105 mt-auto"
        >
          LogOut
        </button>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="flex-1 p-4 md:p-8 bg-gray-50 md:rounded-l-3xl shadow-inner transition-all duration-300 w-full overflow-x-hidden">
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
