import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { Navigate } from 'react-router-dom'

const AdminPath = ({ children }) => {
  const { user } = useContext(UserContext)
  return user 
    ? user.isAdmin 
      ? children 
      : <Navigate to="/dashboard" replace /> 
    : <Navigate to="/login" replace />
}

export default AdminPath
