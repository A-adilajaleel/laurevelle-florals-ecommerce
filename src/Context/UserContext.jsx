import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { CartContext } from "./CartContext"

export const UserContext = createContext()


export const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  const { clearCart } = useContext(CartContext)

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  )

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])

  const logout = () => {
    clearCart()
    setUser(null)
    navigate("/login")
    
    toast.success("Logged Out")
  }

  const registerUser = (data) => {
    setUsers((prev) => [...prev, { id: Date.now(), ...data, isAdmin: false }])
    toast.success("Registered Successfully")
    navigate("/login")
  }

  const loginuser = (data) => {
    const exist = users.find((u) => u.email === data.email)

    if (!exist) {
      toast.error("User not found")
      return
    }

    if (exist.password !== data.password) {
      toast.error("Invalid password")
      return
    }

    setUser(exist)
    toast.success("Logged in")

    if (exist.isAdmin) {
      navigate("/admindashboard")
    } else {
      navigate("/dashboard")
    }
  }

  return (
    <UserContext.Provider
      value={{
        logout,
        registerUser,
        loginuser,
        users,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
