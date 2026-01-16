import React, { useContext, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import { CiMenuBurger } from "react-icons/ci"

const Navbar = () => {
  const { Themes, toggletheme } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <nav
      className={`
        w-full px-6 py-4 shadow-md transition-colors duration-300
        ${Themes ? 'bg-rose-900 text-rose-50' : 'bg-rose-200 text-rose-800'}
      `}
    >
     
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-serif font-bold">
            Laurevelle Florals
          </h1>
        </Link>

       
        <div className="hidden md:flex gap-6 items-center font-medium">
          <NavLinks toggletheme={toggletheme} />
        </div>

       
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-red-950 text-white"
        >
          <CiMenuBurger className="text-2xl" />
        </button>
      </div>

     
      {open && (
        <div
          ref={menuRef}
          className={`
            md:hidden mt-4 flex flex-col gap-4 font-medium p-4 rounded-xl
            ${Themes ? 'bg-rose-900' : 'bg-rose-200'}
          `}
        >
          <NavLinks toggletheme={toggletheme} closeMenu={() => setOpen(false)} />
        </div>
      )}
    </nav>
  )
}

const NavLinks = ({ toggletheme, closeMenu }) => (
  <>
    <Link to="/home" onClick={closeMenu}>
      <span className="bg-red-950 rounded-2xl p-2 block text-white">
        Home
      </span>
    </Link>

    <Link to="/login" onClick={closeMenu}>
      <span className="bg-red-950 rounded-2xl p-2 block text-white">
        Login
      </span>
    </Link>

    <Link to="/signup" onClick={closeMenu}>
      <span className="bg-red-950 rounded-2xl p-2 block text-white">
        SignUp
      </span>
    </Link>

    <Link to="/about" onClick={closeMenu}>
      <span className="bg-red-950 rounded-2xl p-2 block text-white">
        About
      </span>
    </Link>

    <Link to="/contact" onClick={closeMenu}>
      <span className="bg-red-950 rounded-2xl p-2 block text-white">
        Contact
      </span>
    </Link>

    <button
      onClick={toggletheme}
      className="px-3 py-2 rounded-lg border border-rose-700 hover:bg-rose-300 transition-colors"
    >
      Theme
    </button>
  </>
)

export default Navbar
