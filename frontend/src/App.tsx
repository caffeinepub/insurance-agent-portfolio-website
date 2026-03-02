import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet, Navigate } from '@tanstack/react-router';
import JenkinsPublicSite from './pages/JenkinsPublicSite';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminLayout from './components/admin/AdminLayout';
import AdminLeadsPage from './components/admin/AdminLeadsPage';

function ProtectedAdminRoute() {
  const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <AdminLayout />;
}

const rootRoute = createRootRoute({ component: Outlet });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: JenkinsPublicSite,
});

const adminLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: ProtectedAdminRoute,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/dashboard',
  component: AdminDashboard,
});

const adminLeadsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/leads',
  component: AdminLeadsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  adminLayoutRoute.addChildren([
    adminDashboardRoute,
    adminLeadsRoute,
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
