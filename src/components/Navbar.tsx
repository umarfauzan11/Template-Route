import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, LogIn, LogOut, Menu, X, Shield, Users, Info, Home } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const navItems = [
    { to: '/', label: 'Home', icon: Home, end: true },
    { to: '/about', label: 'About', icon: Info },
    { to: '/users', label: 'Dynamic Route', icon: Users },
    { to: '/profile', label: 'Protected Area', icon: Shield },
  ];

  return (
    <header className="site-header">
      <div className="nav-container">
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <img src="/favicon.png" alt="Template Route Logo" className="brand-logo-img" />
          <span className="brand-name">Template<span className="text-primary">Route</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <item.icon size={15} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {isAuthenticated ? (
            <div className="user-profile-widget">
              <span className="user-badge">{user?.name}</span>
              <button onClick={handleLogout} className="btn-auth btn-logout" title="Log out">
                <LogOut size={15} />
                <span className="hide-mobile">Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/auth/login" className="btn-auth btn-login">
              <LogIn size={15} />
              <span>Login</span>
            </Link>
          )}

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              <item.icon size={17} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
