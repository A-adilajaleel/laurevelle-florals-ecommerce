import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { CategoryContext } from "../../Context/CategoryContext"
import { UserContext } from '../../Context/UserContext'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'



const Dashboard = () => {
  const { categories } = useContext(CategoryContext)
  const { user,logout } = useContext(UserContext)
  const { cartlength } = useContext(CartContext)

  const navigate = useNavigate()


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
   
     <div className='flex justify-between items-center'>
      <h1 className="text-4xl font-extrabold mb-8 text-pink-600">User Dashboard</h1>
      <div className='flex items-center mb-2'>
      <h2 className='text-pink-900 bg-pink-400 p-2 rounded-full font-bold cursor-pointer' onClick={()=>navigate("/orders")}>Your Orders</h2>
      </div>
      <div className=' flex items-center'>
       <button className='relative flex items-center bg-pink-800 px-4 rounded-4xl text-2xl text-white mb-3 cursor-pointer' onClick={() => navigate("/cart")}>
  Cart
  <CiShoppingCart className='ml-2' />
  {cartlength > 0 && (
    <span className='absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
      {cartlength}
    </span>
  )}
</button>

        </div>
        </div>

      <div className="bg-pink-100 p-6 rounded-xl mb-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className='flex flex-col justify-center'>
          <h2 className="text-2xl font-semibold flex items-center gap-3 text-pink-700">
            Welcome, {user?.name} 
            <img 
              className="w-7 h-7 rounded-full border-2 border-pink-400" 
              src="https://cdn-icons-png.flaticon.com/128/346/346167.png" 
              alt="user icon" 
            />
          </h2>
           {/* <button
          onClick={() => navigate("/profile")}
          className="mt-4 md:mt-0 px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition-all"
        >
          View Profile
        </button> */}
          <p className="text-gray-700 mt-2 font-mono text-sm md:text-base">
            Explore categories and shop your favourite flowers.
          </p>
        </div>
       
        <button
      onClick={logout}
      className="px-4 py-2 bg-pink-600 text-white rounded-xl"
    >
      Logout
    </button>
      </div>

      <h2 className="text-3xl font-semibold mb-6 text-pink-700">Our Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-4">
  {categories.map((cat) => (
    <div
      key={cat.id}
      onClick={() => navigate(`/category/${cat.name}`)}
      className="group cursor-pointer bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center overflow-hidden"
    >
     
      <div className="w-full h-40 sm:h-60 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-pink-900/10 z-10 transition-colors duration-300" />
        <img
          src={cat.images}
          alt={cat.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>

    
      <div className="p-5 w-full text-center">
       
        <div className="w-6 h-1 bg-pink-200 rounded-full mx-auto mb-3 transition-all duration-300 group-hover:w-12 group-hover:bg-pink-800" />
        
        <p className="text-lg sm:text-xl font-serif font-bold text-gray-800 group-hover:text-pink-900 transition-colors">
          {cat.name}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Dashboard
