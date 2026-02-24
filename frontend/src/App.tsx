import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet, Navigate } from '@tanstack/react-router';
import { Toaster } from '@/components/ui/sonner';
import { useEffect } from 'react';

// Public pages
import PublicSite from './pages/PublicSite';
import HoustonDemoPage from './pages/HoustonDemoPage';

// Admin pages
import AdminLoginPage from './components/admin/AdminLoginPage';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminLeadsPage from './components/admin/AdminLeadsPage';
import AdminAppointmentsPage from './components/admin/AdminAppointmentsPage';
import AdminSettingsPage from './components/admin/AdminSettingsPage';
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute';
import AdminLayout from './components/admin/AdminLayout';

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster />
    </>
  ),
});

// Public route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: PublicSite,
});

// Houston demo route
const houstonDemoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/houston-demo',
  component: HoustonDemoPage,
});

// Admin login route
const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/login',
  component: AdminLoginPage,
});

// Admin layout route (protected)
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: () => (
    <ProtectedAdminRoute>
      <AdminLayout />
    </ProtectedAdminRoute>
  ),
});

// Admin dashboard route
const adminDashboardRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/dashboard',
  component: AdminDashboard,
});

// Admin leads route
const adminLeadsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/leads',
  component: AdminLeadsPage,
});

// Admin appointments route
const adminAppointmentsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/appointments',
  component: AdminAppointmentsPage,
});

// Admin settings route
const adminSettingsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/settings',
  component: AdminSettingsPage,
});

// Admin index redirect component
function AdminIndexRedirect() {
  return <Navigate to="/admin/dashboard" />;
}

// Admin index redirect route
const adminIndexRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/',
  component: AdminIndexRedirect,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  houstonDemoRoute,
  adminLoginRoute,
  adminRoute.addChildren([
    adminIndexRoute,
    adminDashboardRoute,
    adminLeadsRoute,
    adminAppointmentsRoute,
    adminSettingsRoute,
  ]),
]);

// Create router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
