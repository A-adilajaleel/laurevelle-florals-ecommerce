import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Navigate } from "react-router-dom";

const AdminPath = ({ children }) => {
  const { user } = useContext(UserContext);

 
  if (!user) {
    return <Navigate to="/login" />;
  }

  
  if (!user.isAdmin) {
    return <Navigate to="/dashboard" />; 
  }

  return children;
}

export default AdminPath;
