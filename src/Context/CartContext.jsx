import { createContext, useState, useEffect } from "react"
import toast from "react-hot-toast"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )

  const [cartlength, setCartlength] = useState(0)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    let num = cart.reduce((a, b) => a + b.quantity, 0)
    setCartlength(num)
  }, [cart])

  const addtoCart = (product) => {
    const exist = cart.find((pro) => pro.id === product.id)

    if (!exist) {
      setCart((prev) => [...prev, { ...product, quantity: 1 }])
     toast.success("Product added to cart")
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
       
      )
      toast.success("Product quantity updated in cart")
    }
  }

  const removefromCart = (product) => {
    const exist = cart.find((x) => x.id === product.id)

    if (exist.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      )
    } else {
      setCart(cart.filter((x) => x.id !== product.id))
    }
  }

  const clearCart = () => {
    if (confirm("Are you sure you want to clear the cart?")) {
      setCart([])
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartlength,
        setCart,
        addtoCart,
        removefromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
