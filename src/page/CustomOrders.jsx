import React, { useState } from "react"

const CustomOrders = () => {
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
    console.log("Form submitted:", formData)
    alert("Form submitted! Check console for data.")
  }

  return (
    <div className="bg-pink-200 p-8 rounded-2xl max-w-md mx-auto my-10 shadow-lg">
      <h2 className="text-pink-800 text-2xl font-semibold mb-6 text-center">
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
    </div>
  )
}

export default CustomOrders
