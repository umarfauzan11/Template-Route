import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <div className="not-found-badge">
          <Search size={32} className="text-primary" />
        </div>
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-desc">
          The route you are looking for does not exist or has been moved. This page demonstrates the catch-all wildcard (<code>*</code>) routing pattern in React Router.
        </p>

        <div className="not-found-actions">
          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            <ArrowLeft size={16} /> Go Back
          </button>
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
