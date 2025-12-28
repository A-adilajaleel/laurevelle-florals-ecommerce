import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'

const Signup = () => {
  const { registerUser } = useContext(UserContext)

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    registerUser(data)
  }

  return (
    <div className="w-full min-h-screen bg-[url('https://i.pinimg.com/736x/a4/cc/c4/a4ccc4ca1cecde44d510d453540eb6db.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-14">

      <div className="bg-transparent rounded-[2.5rem] shadow-2xl w-full max-w-md flex overflow-hidden border border-white/30">

        <div className="flex-1 p-8 flex flex-col gap-6 justify-center">

          <h2 className="text-4xl font-extrabold text-rose-700 text-center tracking-wide">
            Create Account
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={data.name}
            onChange={handleInput}
            className="bg-white/90 border border-rose-200 px-4 py-3 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-rose-300/50 transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleInput}
            className="bg-white/90 border border-rose-200 px-4 py-3 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-rose-300/50 transition-all"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleInput}
            className="bg-white/90 border border-rose-200 px-4 py-3 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-rose-300/50 transition-all"
          />

          <button 
            type="submit"
            onClick={handleSubmit}
            className="mt-1 bg-rose-900 text-white py-3 rounded-xl font-bold cursor-pointer hover:shadow-rose-500/40 hover:scale-[1.01] transition-all duration-300"
          >
            Register
          </button>

          <p className="text-center text-white text-sm">
            Already have an account?
            <a href="/login" className="text-rose-700 font-semibold ml-1 hover:underline">
              Login
            </a>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Signup
