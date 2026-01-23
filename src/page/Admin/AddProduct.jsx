import React, { useContext, useState } from "react"
import { ProductContext } from "../../Context/ProductContext"
import { toast } from "react-hot-toast"

const categories = [

  "Bouquets",
  "Roses",
  "Occasions",
  "Bridal",
  "Indoor Plants", 
  'Office Decor Flowers',
  'Event Floral Packages',
  'Pastel Arrangements',
]

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext)

  const [data, setData] = useState({
    name: "",
    price: "",
    category: "",
    subtype: "",
    description: "",
    image: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    if (Object.values(data).some(value => value === "")) {
      return toast.error("Fill all fields!!")
    }

    addProduct(data)
    setData({
      name: "",
      price: "",
      category: "",
      subtype: "",
      description: "",
      image: ""
    })
    toast.success("Product Added Successfully ✔")
  }

  return (
    <div className="p-4 md:p-10 max-w-2xl mx-auto">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Add New Product</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Product Name</label>
              <input
                name="name"
                type="text"
                value={data.name}
                onChange={handleInput}
                placeholder="e.g. Red Velvet Roses"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Price (€)</label>
              <input
                name="price"
                type="number"
                value={data.price}
                onChange={handleInput}
                placeholder="0.00"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Category</label>
              <select
                name="category"
                value={data.category}
                onChange={handleInput}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition bg-white"
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Subtype</label>
              <input
                name="subtype"
                type="text"
                value={data.subtype}
                onChange={handleInput}
                placeholder="e.g. Luxury Collection"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Image URL</label>
            <input
              name="image"
              type="text"
              value={data.image}
              onChange={handleInput}
              placeholder="https://example.com/flower.jpg"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Description</label>
            <textarea
              name="description"
              rows="3"
              value={data.description}
              onChange={handleInput}
              placeholder="Describe the floral arrangement..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-pink-800 transition shadow-lg active:scale-[0.98]"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
