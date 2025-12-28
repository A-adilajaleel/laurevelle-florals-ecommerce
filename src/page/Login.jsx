import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const { loginuser } = useContext(UserContext)

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    loginuser(data)
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center 
      bg-[url('https://i.pinimg.com/736x/31/fb/e9/31fbe9006fba48f8ef76aaa670b6750e.jpg')] 
      bg-cover bg-center p-6">

      <div className="flex flex-col border-0 shadow-2xl rounded-3xl 
        overflow-hidden bg-white/85
        w-full max-w-sm mx-auto">

        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-8">

          <h2 className="text-3xl font-extrabold 
            text-orange-600 text-center tracking-wide">
            Welcome Back
          </h2>

          <p className="text-center text-orange-500 
            flex justify-center items-center gap-2 text-sm">
            Sign in to continue
            <img 
              src="https://cdn-icons-png.flaticon.com/128/346/346167.png"
              alt="flower icon"
              className="w-4 h-4"
            />
          </p>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleInput}
            className="border border-orange-300 p-3 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-orange-400 
              shadow-sm transition-all"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleInput}
            className="border border-orange-300 p-3 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-orange-400 
              shadow-sm transition-all"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white 
              p-3 rounded-xl font-semibold shadow-md 
              hover:shadow-lg transition-all"
              // onClick={()=>navigate("/dashboard")}
          >
            Login
          </button>

          <p className="text-center text-orange-600 text-sm">
            Don't have an account?
            <a 
              href="/signup" 
              className="font-medium ml-1 underline hover:text-orange-700"
            >
              Sign Up
            </a>
          </p>

        </form>

      </div>
    </div>
  )
}

export default Login
