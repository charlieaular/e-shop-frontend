import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../stores/useAuthStore'
import { Roles } from '../types/Roles'

const AdminRoute = () => {

  const user = useAuthStore(state => state.user)

  if (user?.role != Roles.ADMIN) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default AdminRoute