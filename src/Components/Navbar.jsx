import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'

const Navbar = () => {
  const { Themes, toggletheme } = useContext(ThemeContext)

  return (
    <nav className={`
      w-full flex justify-between items-center px-6 py-4 shadow-md transition-colors duration-300
      ${Themes ? 'bg-rose-900 text-rose-50' : 'bg-rose-200 text-rose-800'}
    `}>
      <Link to="/">
        <h1 className="text-2xl md:text-3xl font-serif font-bold">
          Laurevelle Florals
        </h1>
      </Link>

      <div className="flex gap-6 items-center font-medium">
        <Link to="/home">
          <span className="bg-red-950 rounded-2xl  p-2 cursor-pointer">
            Home
          </span>
        </Link>

        <Link to="/login">
          <span className="bg-red-950 rounded-2xl  p-2 cursor-pointer">
            Login
          </span>
        </Link>

        <Link to="/signup">
          <span className="bg-red-950 rounded-2xl  p-2  cursor-pointer">
            SignUp
          </span>
        </Link>

        <Link to="/about">
          <span className="bg-red-950 rounded-2xl  p-2 cursor-pointerr">
            About
          </span>
        </Link>

        <Link to="/contact">
          <span className="bg-red-950 rounded-2xl  p-2 cursor-pointer">
            Contact
          </span>
        </Link>

        <button 
          onClick={toggletheme} 
          className="px-3 py-2 rounded-lg border border-rose-700 hover:bg-rose-300 transition-colors"
        >
          Change
        </button>
      </div>
    </nav>
  )
}

export default Navbar
