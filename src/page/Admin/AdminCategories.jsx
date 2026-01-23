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
  const { getProductsByCategory, deleteProduct, updateProduct } =
    useContext(ProductContext)

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
      <div className="p-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className="mb-6 px-4 py-2 bg-pink-600 text-white rounded-xl"
        >
          ← Back to Categories
        </button>

        <h2 className="text-3xl font-bold text-pink-700 mb-6">
          {selectedCategory} Products
        </h2>

        {products.length === 0 ? (
          <p className="text-gray-500">No products in this category</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product =>
              editId === product.id ? (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-2xl shadow"
                >
                  <input
                    name="name"
                    value={editData.name}
                    onChange={handleInput}
                    className="border px-3 py-2 w-full mb-2"
                  />

                  <input
                    name="price"
                    value={editData.price}
                    onChange={handleInput}
                    className="border px-3 py-2 w-full mb-2"
                  />

                  <div className="flex gap-2">
                    <button
                      onClick={handleUpdate}
                      className="flex-1 bg-pink-600 text-white py-2 rounded-xl"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setEditId(null)}
                      className="flex-1 bg-gray-300 py-2 rounded-xl"
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
    <div className="p-6">
      <h2 className="text-3xl font-bold text-pink-700 mb-8">
        Product Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map(cat => (
          <div
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className="bg-white rounded-2xl shadow hover:shadow-xl cursor-pointer"
          >
            <img
              src={cat.images}
              alt={cat.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminCategories
