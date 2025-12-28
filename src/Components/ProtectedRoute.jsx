import React from 'react'
import { UserContext } from '../Context/UserContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const{user}=useContext(UserContext)
    return user ? children : <Navigate to={'/login'} replace/>
  
}

export default ProtectedRoute
