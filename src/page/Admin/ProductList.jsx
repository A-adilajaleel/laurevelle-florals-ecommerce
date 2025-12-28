import React, { useState, useContext } from "react"
import { ProductContext } from "../../Context/ProductContext"
import ProductCard from "../../Components/PorductCard"

const ProductList = () => {
  const { products, deleteProduct, updateProduct } =
    useContext(ProductContext)

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

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">All Products</h2>

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
    </div>
  )
}

export default ProductList
