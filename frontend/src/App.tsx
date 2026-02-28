import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet, Navigate } from '@tanstack/react-router';
import PublicSite from './pages/PublicSite';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminLayout from './components/admin/AdminLayout';
import AdminLeadsPage from './components/admin/AdminLeadsPage';
import AdminPolicyManagementPage from './components/admin/AdminPolicyManagementPage';
import AdminLeadAssignmentPage from './components/admin/AdminLeadAssignmentPage';
import AdminAnalyticsPage from './components/admin/AdminAnalyticsPage';
import AdminPDFInvoicesPage from './components/admin/AdminPDFInvoicesPage';

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
  component: PublicSite,
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

const adminPolicyRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/policy-management',
  component: AdminPolicyManagementPage,
});

const adminLeadAssignmentRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/lead-assignment',
  component: AdminLeadAssignmentPage,
});

const adminAnalyticsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/analytics',
  component: AdminAnalyticsPage,
});

const adminPDFInvoicesRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/pdf-invoices',
  component: AdminPDFInvoicesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  adminLayoutRoute.addChildren([
    adminDashboardRoute,
    adminLeadsRoute,
    adminPolicyRoute,
    adminLeadAssignmentRoute,
    adminAnalyticsRoute,
    adminPDFInvoicesRoute,
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
