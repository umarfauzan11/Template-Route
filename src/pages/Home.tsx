import { Link } from 'react-router-dom';
import { Layers, ShieldCheck, Zap, Globe, ArrowRight, Code2, Moon } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Home() {
  const showToastDemo = () => {
    toast.success('Welcome to Template Route! Everything is configured and ready.', {
      duration: 3000,
    });
  };

  const features = [
    {
      icon: Layers,
      title: 'Nested Layouts',
      description: 'Pre-configured root and auth layouts utilizing React Router v7 Outlet architecture.',
    },
    {
      icon: ShieldCheck,
      title: 'Protected Route Guards',
      description: 'Authentication state management with automatic redirect logic to secure private views.',
    },
    {
      icon: Zap,
      title: 'Dynamic Routing & Splitting',
      description: 'Code-splitting with React.lazy + Suspense, dynamic URL parameters (:id), and error boundaries.',
    },
    {
      icon: Moon,
      title: 'Dark Mode & Theming',
      description: 'Built-in ThemeContext with persistent localStorage and OS system preference detection.',
    },
    {
      icon: Globe,
      title: 'PWA & Netlify Ready',
      description: 'Zero-config offline capability via Vite-Plugin-PWA with pre-configured netlify.toml redirects.',
    },
    {
      icon: Code2,
      title: 'Full TypeScript Support',
      description: 'Strict type safety with module path aliases (@/*) and modern ESLint flat configuration.',
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          <span>Vite + React Router v7 + TypeScript</span>
        </div>
        <h1 className="hero-title">
          Build Faster with <span className="gradient-text">Template Route</span>
        </h1>
        <p className="hero-description">
          A production-ready starter template for React single-page applications. 
          Stop wasting hours configuring routes, layouts, dark mode, and auth guards from scratch.
        </p>

        <div className="hero-buttons">
          <Link to="/users" className="btn btn-primary btn-lg">
            <span>Explore Demo Routes</span>
            <ArrowRight size={18} />
          </Link>
          <Link to="/profile" className="btn btn-secondary btn-lg">
            <span>Test Protected Route</span>
          </Link>
          <button onClick={showToastDemo} className="btn btn-outline btn-lg">
            <span>Trigger Toast</span>
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="section-header text-center">
          <h2 className="section-title">Why Use This Template?</h2>
          <p className="section-subtitle">Everything you need to jumpstart your next React web project.</p>
        </div>

        <div className="features-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-wrapper">
                <feat.icon size={24} className="feature-icon" />
              </div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Test Links */}
      <section className="quick-links-section">
        <div className="quick-links-card">
          <h3 className="quick-links-title">Quick Routing Playground</h3>
          <p className="quick-links-desc">Test how different routing scenarios behave in this starter template:</p>
          <div className="playground-tags">
            <Link to="/users/1" className="playground-tag">Dynamic Route: /users/1</Link>
            <Link to="/users/42" className="playground-tag">Dynamic Route: /users/42</Link>
            <Link to="/profile" className="playground-tag">Guarded: /profile</Link>
            <Link to="/auth/login" className="playground-tag">Auth Layout: /auth/login</Link>
            <Link to="/random-broken-link" className="playground-tag">Test 404 Page</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
