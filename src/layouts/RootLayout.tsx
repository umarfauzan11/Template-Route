import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <div className="layout-root">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      {/* ScrollRestoration ensures page scrolls to top when navigating */}
      <ScrollRestoration />
    </div>
  );
}
