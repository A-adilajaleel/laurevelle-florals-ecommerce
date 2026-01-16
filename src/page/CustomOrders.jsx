import React, { useContext,useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { OrderContext } from "../Context/OrderContext"

const CustomOrders = () => {
  const navigate = useNavigate()
  const { addCustomRequest } = useContext(OrderContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vision: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
  addCustomRequest(formData)
    toast.success("Form submitted successfully!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      vision: ""
    })
  }

  return (
    <div className="bg-pink-200 p-6 md:p-8 rounded-2xl max-w-md w-[90%] mx-auto my-10 shadow-lg">
      <h2 className="text-pink-800 text-xl md:text-2xl font-semibold mb-6 text-center">
        INTERESTED IN A CUSTOM ARRANGEMENT?
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border-none outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border-none outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border-none outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm"
        />
        <textarea
          name="vision"
          placeholder="Tell Us Your Vision"
          value={formData.vision}
          onChange={handleChange}
          rows={4}
          required
          className="p-3 rounded-lg border-none outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm resize-vertical"
        />
        <button
          type="submit"
          className="p-3 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors duration-300"
        >
          SUBMIT
        </button>
      </form>
       <button 
              onClick={() => navigate(-1)} 
              className="bg-pink-900 text-white font-mono rounded-full py-2 px-8 hover:bg-amber-900 transition-colors w-full sm:w-auto mt-3 cursor-pointer"
            >
              Back
            </button>
    </div>
  )
}

export default CustomOrders
