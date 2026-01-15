import { createContext, useState, useEffect } from 'react'
import { initialProducts } from './Data'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    const parsedProducts = savedProducts ? JSON.parse(savedProducts) : [];
    

    return parsedProducts.length > 0 ? parsedProducts : initialProducts;
  })

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  }, [products])

  const addProduct = product => {
    setProducts(prev => [...prev, { id: Date.now(), ...product }])
  }

  const deleteProduct = id => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  const updateProduct = (id, updatedData) => {
    setProducts(prev => prev.map(p => (p.id === id ? { ...p, ...updatedData } : p)))
  }

const getProductsByCategory = (category) => {
  if (!category) return []
  return products.filter(p => p.category === category)
}



  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProduct, getProductsByCategory }}>
      {children}
    </ProductContext.Provider>
  )
} 
