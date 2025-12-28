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
   
    if ( data.name === "" ||
  data.price === "" ||
  data.category === "" ||
  data.subtype === "" ||
  data.description === "" ||
  data.image === "") {
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
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          type="text"
          value={data.name}
          onChange={handleInput}
          placeholder="Enter product name"
          className="w-full p-2 border rounded"
        />

        <input
          name="price"
          type="number"
          value={data.price}
          onChange={handleInput}
          placeholder="Enter product price"
          className="w-full p-2 border rounded"
        />

        <select
          name="category"
          value={data.category}
          onChange={handleInput}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          name="subtype"
          type="text"
          value={data.subtype}
          onChange={handleInput}
          placeholder="Enter product subtype"
          className="w-full p-2 border rounded"
        />

        <input
          name="description"
          type="text"
          value={data.description}
          onChange={handleInput}
          placeholder="Enter product description"
          className="w-full p-2 border rounded"
        />

        <input
          name="image"
          type="text"
          value={data.image}
          onChange={handleInput}
          placeholder="Enter product image URL"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-pink-700 text-white py-2 rounded hover:bg-pink-800"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
