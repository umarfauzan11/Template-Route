/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense, type ComponentType } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from './ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';
import RouteErrorBoundary from '../components/RouteErrorBoundary';

// Lazy-loaded route components for optimal bundle splitting
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Users = lazy(() => import('../pages/Users'));
const UserDetail = lazy(() => import('../pages/UserDetail'));
const Profile = lazy(() => import('../pages/Profile'));
const Login = lazy(() => import('../pages/auth/Login'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Helper wrapper to ensure Suspense fallback on lazy routes
const withSuspense = (Component: ComponentType) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: 'about',
        element: withSuspense(About),
      },
      {
        path: 'users',
        element: withSuspense(Users),
      },
      {
        path: 'users/:id',
        element: withSuspense(UserDetail),
      },
      // Protected routes wrapped in ProtectedRoute guard
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'profile',
            element: withSuspense(Profile),
          },
        ],
      },
    ],
  },
  // Auth Layout (Clean container without main site navigation)
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: 'login',
        element: withSuspense(Login),
      },
    ],
  },
  // Catch-all 404 route
  {
    path: '*',
    element: withSuspense(NotFound),
  },
]);
