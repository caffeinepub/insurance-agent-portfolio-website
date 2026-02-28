import React from 'react';
import { Navigate, Outlet } from '@tanstack/react-router';

export default function ProtectedAdminRoute() {
  const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
