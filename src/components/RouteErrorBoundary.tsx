import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';

export default function RouteErrorBoundary() {
  const error = useRouteError();

  let errorMessage = 'An unexpected error occurred.';
  let statusText = 'Error';

  if (isRouteErrorResponse(error)) {
    statusText = `${error.status} ${error.statusText}`;
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="error-page">
      <div className="error-card">
        <div className="error-icon-wrapper">
          <AlertTriangle size={48} className="error-icon" />
        </div>
        <span className="error-status">{statusText}</span>
        <h1 className="error-title">Oops! Something went wrong</h1>
        <p className="error-desc">{errorMessage}</p>
        <div className="error-actions">
          <button onClick={() => window.location.reload()} className="btn btn-secondary">
            <RotateCcw size={16} /> Reload Page
          </button>
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
