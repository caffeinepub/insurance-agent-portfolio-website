import React from 'react';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';

export default function ProtectedAdminRoute() {
  const { identity, isInitializing } = useInternetIdentity();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isInitializing && !identity) {
      navigate({ to: '/admin/login' });
    }
  }, [identity, isInitializing, navigate]);

  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!identity) {
    return null;
  }

  return <Outlet />;
}
