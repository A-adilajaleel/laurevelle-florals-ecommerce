import React, { useState, useContext } from "react"
import { ProductContext } from "../../Context/ProductContext"
import ProductCard from "../../Components/PorductCard"

const ProductList = () => {
const { products, deleteProduct, updateProduct } = useContext(ProductContext)

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
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">All Products</h2>
        <span className="bg-pink-100 text-pink-600 px-6 py-1.5 rounded-full text-sm font-bold shadow-sm">
          {products.length} Items Total
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {products.map(product =>
          editId === product.id ? (
            <div key={product.id} className="bg-white p-5 rounded-2xl shadow-xl border-2 border-pink-500 animate-pulse-once flex flex-col h-full">
              <h3 className="text-pink-600 font-bold mb-4 text-sm uppercase tracking-wide">Editing Product</h3>
              
              <div className="space-y-4 flex-1">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase ml-1">Name</p>
                  <input
                    name="name"
                    value={editData.name}
                    onChange={handleInput}
                    placeholder="Product Name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase ml-1">Price (€)</p>
                    <input
                      name="price"
                      type="number"
                      value={editData.price}
                      onChange={handleInput}
                      placeholder="Price"
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase ml-1">Category</p>
                    <input
                      name="category"
                      value={editData.category}
                      onChange={handleInput}
                      placeholder="Category"
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase ml-1">Subtype</p>
                  <input
                    name="subtype"
                    value={editData.subtype}
                    onChange={handleInput}
                    placeholder="Subtype"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase ml-1">Description</p>
                  <textarea
                    name="description"
                    value={editData.description}
                    onChange={handleInput}
                    placeholder="Description"
                    rows="3"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 outline-none resize-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase ml-1">Image URL</p>
                  <input
                    name="image"
                    value={editData.image}
                    onChange={handleInput}
                    placeholder="Image URL"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4">
                  <button
                    onClick={handleUpdate}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl text-sm font-bold transition-all active:scale-95"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div key={product.id} className="h-full">
              <ProductCard
                product={product}
                onEdit={() => handleEditClick(product)}
                onDelete={() => deleteProduct(product.id)}
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default ProductList
