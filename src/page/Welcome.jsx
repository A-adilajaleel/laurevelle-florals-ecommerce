import React from "react"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-16 relative bg-[url('/images/welcomerose.jpg')] "
      
    >
      <div className="text-center">
      <h1 className="text-6xl text-white font-bold font-mono mb-20 cursor-pointer"> Laurevelle Florals </h1>


     <Link  to="/home" className = "text-yellow-950 text-2xl font-bold font-mono p-1 bg-white"> <button className="cursor-pointer">SHOP NOW...</button></Link>
     </div>
    </div>
  )
}

export default Welcome
