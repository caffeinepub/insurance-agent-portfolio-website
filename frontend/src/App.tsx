import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet, redirect } from '@tanstack/react-router';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import PublicSite from './pages/PublicSite';
import AdminLoginPage from './components/admin/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminLeadsPage from './components/admin/AdminLeadsPage';
import AdminAppointmentsPage from './components/admin/AdminAppointmentsPage';
import AdminSettingsPage from './components/admin/AdminSettingsPage';

// Root route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Public route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: PublicSite,
});

// Admin login route
const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/login',
  component: AdminLoginPage,
});

// Protected admin layout route
const adminLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminLayoutWrapper,
});

function AdminLayoutWrapper() {
  const { identity } = useInternetIdentity();
  if (!identity) {
    window.location.href = '/admin/login';
    return null;
  }
  return <AdminLayout />;
}

// Admin child routes
const adminDashboardRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/',
  component: AdminDashboard,
});

const adminLeadsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/leads',
  component: AdminLeadsPage,
});

const adminAppointmentsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/appointments',
  component: AdminAppointmentsPage,
});

const adminSettingsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/settings',
  component: AdminSettingsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  adminLoginRoute,
  adminLayoutRoute.addChildren([
    adminDashboardRoute,
    adminLeadsRoute,
    adminAppointmentsRoute,
    adminSettingsRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
