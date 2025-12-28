import React from 'react'
import Welcome from './page/Welcome'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import { Toaster } from 'react-hot-toast'
import Dashboard from './page/User/Dashboard'
import AdminDashboard from './page/Admin/AdminDashboard'
import Login from './page/Login'
import Signup from './page/Signup'
import ProtectedRoute from './Components/ProtectedRoute'
import AdminPath from './Components/AdminPath'


import Checkout from './page/User/Checkout'
import OrderSuccess from './page/User/OrderSuccess'



import ProductDetails from './page/ProductDetails'
import CategoryProducts from './page/User/CategoryProducts'
import Cart from './page/User/Cart'
import Orders from './page/User/Orders'
import CustomOrders from './page/CustomOrders'



const App = () => {
  return (
    <div>
      
      <Toaster/>
      <Navbar/>
       
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>


        <Route path="/dashboard" element={
          
          <ProtectedRoute role="user">
          
          <Dashboard/>
          
          </ProtectedRoute>
          }/>

        <Route path="/admindashboard" element={
         <AdminPath>
          
          <AdminDashboard/>
          </AdminPath>
          
          }/>
          
       

        <Route path="/login" element={<Login/>}/>

        <Route path="/signup"element={<Signup/>}/>

  <Route path="/cart" element={<Cart/>}/>
  <Route path="/category/:name" element={<CategoryProducts />} />
  <Route path='/product/:id' element={<ProductDetails/>}/>

  <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
  <Route path="/success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
  <Route path='orders' element={<Orders/>}/>
<Route path='/custom' element={<CustomOrders/>}/> 
      </Routes>
      
    </div>
  )
}

export default App
