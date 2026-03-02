import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import JenkinsPublicSite from './pages/JenkinsPublicSite';
import AdminLoginPage from './components/admin/AdminLoginPage';
import AdminJenkinsLayout from './components/admin/AdminJenkinsLayout';
import AdminJenkinsDashboard from './components/admin/AdminJenkinsDashboard';
import AdminJenkinsQuotesPage from './components/admin/AdminJenkinsQuotesPage';
import AdminJenkinsReviewsPage from './components/admin/AdminJenkinsReviewsPage';
import AdminJenkinsContentPage from './components/admin/AdminJenkinsContentPage';
import AdminJenkinsContactPage from './components/admin/AdminJenkinsContactPage';
import AdminJenkinsServiceAreasPage from './components/admin/AdminJenkinsServiceAreasPage';
import AdminJenkinsAnalyticsPage from './components/admin/AdminJenkinsAnalyticsPage';
import AdminJenkinsSettingsPage from './components/admin/AdminJenkinsSettingsPage';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: JenkinsPublicSite,
});

// Public admin login route (no layout)
const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminLoginPage,
});

// Protected admin layout route with all child pages
const adminLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminJenkinsLayout,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/dashboard',
  component: AdminJenkinsDashboard,
});

const adminQuotesRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/quotes',
  component: AdminJenkinsQuotesPage,
});

const adminReviewsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/reviews',
  component: AdminJenkinsReviewsPage,
});

const adminContentRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/content',
  component: AdminJenkinsContentPage,
});

const adminContactRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/contact',
  component: AdminJenkinsContactPage,
});

const adminServiceAreasRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/service-areas',
  component: AdminJenkinsServiceAreasPage,
});

const adminAnalyticsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/analytics',
  component: AdminJenkinsAnalyticsPage,
});

const adminSettingsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/settings',
  component: AdminJenkinsSettingsPage,
});

adminLayoutRoute.addChildren([
  adminDashboardRoute,
  adminQuotesRoute,
  adminReviewsRoute,
  adminContentRoute,
  adminContactRoute,
  adminServiceAreasRoute,
  adminAnalyticsRoute,
  adminSettingsRoute,
]);

const routeTree = rootRoute.addChildren([
  indexRoute,
  adminLoginRoute,
  adminLayoutRoute,
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
