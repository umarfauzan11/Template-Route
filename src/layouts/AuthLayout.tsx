import { Outlet, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AuthLayout() {
  return (
    <div className="layout-auth">
      <div className="auth-header">
        <Link to="/" className="auth-back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="auth-brand">
          <img src="/favicon.svg" alt="Template Route" className="brand-logo-img" />
          <span>TemplateRoute</span>
        </div>
      </div>
      <div className="auth-container">
        <Outlet />
      </div>
    </div>
  );
}
