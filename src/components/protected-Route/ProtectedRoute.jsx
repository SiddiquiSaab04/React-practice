import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import authStore from '../../store/Auth';

const ProtectedRoute = () => {
    const token = authStore((state)=>state.token);
    if(!token){
      return  <Navigate to="/login" />
    }
        return <Outlet/>;
}

export default ProtectedRoute;