import React, { useContext, useState } from "react"
import { ProductContext } from "../../Context/ProductContext"
import ProductCard from "../../Components/PorductCard"

const categories = [
 { name: "Bouquets", images: "/images/Bouquets.jpg" },
  { name: "Roses", images: "/images/Roses.jpg" },
  { name: "Occasions", images: "/images/Occasions.jpg" },
  { name: "Bridal", images: "/images/WeddingB.jpg" },
  { name: "Indoor Plants", images: "/images/indoor.jpg" },
  { name: "Office Decor Flowers", images: "/images/Office Decor Flowers.jpg" },
  { name: "Event Floral Packages", images: "/images/event floral package.jpg" },
  { name: "Pastel Arrangements", images: "/images/Pastel Arrangements.jpg" },
]

const AdminCategories = () => {
  const { getProductsByCategory, deleteProduct, updateProduct } = useContext(ProductContext)

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState({})

  const handleEditClick = product => {
    setEditId(product.id)
    setEditData(product)
  }

  const handleInput = e => {
    const { name, value } = e.target
    setEditData(prev => ({ ...prev, [name]: value }))
  }

  const handleUpdate = () => {
    updateProduct(editId, editData)
    setEditId(null)
  }

  if (selectedCategory) {
    const products = getProductsByCategory(selectedCategory)

    return (
      <div className="p-4 md:p-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className="mb-6 px-5 py-2.5 bg-pink-600 text-white rounded-xl font-semibold shadow-md hover:bg-pink-700 transition w-full sm:w-auto"
        >
          ← Back to Categories
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-6 text-center sm:text-left">
          {selectedCategory} Products
        </h2>

        {products.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-2xl shadow-sm border">
             <p className="text-gray-500">No products in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map(product =>
              editId === product.id ? (
                <div
                  key={product.id}
                  className="bg-white p-5 rounded-2xl shadow-lg border-2 border-pink-500"
                >
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Product Name</label>
                  <input
                    name="name"
                    value={editData.name}
                    onChange={handleInput}
                    className="border border-gray-300 px-3 py-2 w-full mb-3 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                  />

                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Price (€)</label>
                  <input
                    name="price"
                    type="number"
                    value={editData.price}
                    onChange={handleInput}
                    className="border border-gray-300 px-3 py-2 w-full mb-4 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                  />

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={handleUpdate}
                      className="flex-1 bg-pink-600 text-white py-2 rounded-xl font-bold hover:bg-pink-700 transition"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-bold hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEdit={() => handleEditClick(product)}
                  onDelete={() => deleteProduct(product.id)}
                />
              )
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-8 text-center sm:text-left">
        Product Categories
      </h2>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {categories.map(cat => (
          <div
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className="group bg-white rounded-3xl shadow hover:shadow-2xl cursor-pointer transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="relative overflow-hidden">
              <img
                src={cat.images}
                alt={cat.name}
                className="w-full h-48 md:h-52 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminCategories
