# Template Route

> A modern, production-ready routing starter template for **React 19 + Vite + TypeScript**.

[![React](https://img.shields.io/badge/React-19-blue.svg?logo=react)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-red.svg?logo=reactrouter)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

When running `npm create vite@latest`, you get a blank canvas without routes, layouts, dark mode, or auth guards. **Template Route** provides a clean, battle-tested boilerplate so you can jump straight into building your application features.

---

## Features

- **Nested Layouts**: Hierarchical routing with separate `RootLayout` (Navbar + Footer) and `AuthLayout` using React Router's `<Outlet />`.
- **Protected Route Guards**: Reusable `<ProtectedRoute />` component that restricts unauthorized access and preserves redirect history.
- **Code Splitting & Lazy Loading**: Every route chunk is dynamically loaded with `React.lazy()` and `<Suspense fallback={<LoadingSpinner />} />`.
- **Dynamic Routing**: Pre-configured dynamic parameters (`/users/:id`) demonstrating parameter retrieval via `useParams()`.
- **Route Error Boundaries**: Global and route-level error boundaries (`errorElement: <RouteErrorBoundary />`) and catch-all 404 page (`*`).
- **Light & Dark Theme**: Built-in `ThemeContext` with auto-detection of system preferences and `localStorage` persistence.
- **PWA Ready**: Automated service worker generation and caching using `vite-plugin-pwa`.
- **SPA Deploy Ready**: Pre-configured `netlify.toml` for seamless client-side single page app routing.
- **Clean Icons & Feedback**: Integrated with `lucide-react` and `react-hot-toast`.
- **TypeScript Path Aliases**: Clean imports via `@/*` pointing to `src/*`.

---

## Project Structure

```text
├── public/
│   ├── favicon.png          # Default favicon
│   └── manifest.json        # Web app manifest
├── src/
│   ├── components/          # Reusable UI elements
│   │   ├── Footer.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── Navbar.tsx
│   │   └── RouteErrorBoundary.tsx
│   ├── context/             # Global React Contexts
│   │   ├── AuthContext.tsx  # Authentication demo state
│   │   └── ThemeContext.tsx # Light/Dark mode state
│   ├── data/                # Mock data & types
│   │   └── mockUsers.ts
│   ├── layouts/             # Router Layout Wrappers
│   │   ├── AuthLayout.tsx   # Clean layout for sign-in/register
│   │   └── RootLayout.tsx   # Main layout with Navbar & Footer
│   ├── pages/               # Route View Components
│   │   ├── auth/
│   │   │   └── Login.tsx
│   │   ├── About.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx     # 404 Not Found
│   │   ├── Profile.tsx      # Protected route view
│   │   ├── UserDetail.tsx   # Dynamic parameter view
│   │   └── Users.tsx
│   ├── routes/              # Routing Configuration
│   │   ├── ProtectedRoute.tsx
│   │   └── index.tsx        # createBrowserRouter table
│   ├── index.css            # Modern CSS design system
│   ├── main.tsx             # App entry point + PWA registration
│   └── App.tsx              # Context providers & RouterProvider
├── netlify.toml             # SPA redirection rules
├── tsconfig.json            # Strict TypeScript configuration
└── vite.config.js           # Vite plugins & path aliases
```

---

## Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/umarfauzan11/Template-Route.git my-app
cd my-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

Visit `http://localhost:2600` in your browser!

---

## Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Start local Vite development server |
| `npm run build` | Type-check and compile optimized production bundle |
| `npm run lint` | Run ESLint with TypeScript and React rules |
| `npm run typecheck` | Run TypeScript compiler validation without emitting files |
| `npm run preview` | Preview production build locally |

---

## Routing Cheat Sheet

### 1. Adding a New Public Page
1. Create your component in `src/pages/MyNewPage.tsx`.
2. Add the route definition inside `src/routes/index.tsx`:

```tsx
const MyNewPage = lazy(() => import('../pages/MyNewPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // ... existing routes
      {
        path: 'my-new-page',
        element: withSuspense(MyNewPage),
      },
    ],
  },
]);
```

### 2. Adding a Protected (Auth-Guarded) Route
Wrap your route inside the `ProtectedRoute` child array in `src/routes/index.tsx`:

```tsx
{
  element: <ProtectedRoute />,
  children: [
    {
      path: 'dashboard',
      element: withSuspense(Dashboard),
    },
  ],
}
```

### 3. Reading Dynamic URL Parameters
In your component:

```tsx
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  return <h1>Viewing item ID: {id}</h1>;
}
```

---

## License

This project is licensed under the [MIT License](LICENSE) — free to use for both personal and commercial projects.