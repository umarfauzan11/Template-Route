import { useAuth } from '../context/AuthContext';
import { ShieldCheck, User, Mail, LogOut, Key, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Successfully logged out!');
  };

  return (
    <div className="page-container">
      <div className="guarded-banner">
        <ShieldCheck size={20} className="text-success" />
        <span>Protected Area — Accessible only when authenticated!</span>
      </div>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar large">
            <User size={40} />
          </div>
          <div>
            <h1 className="profile-title">{user?.name}</h1>
            <span className="profile-tag text-success">Authenticated Session</span>
          </div>
        </div>

        <div className="profile-details-grid">
          <div className="detail-item">
            <Mail size={18} className="detail-icon" />
            <div>
              <span className="detail-label">Email</span>
              <span className="detail-val">{user?.email}</span>
            </div>
          </div>
          <div className="detail-item">
            <Key size={18} className="detail-icon" />
            <div>
              <span className="detail-label">Access Level</span>
              <span className="detail-val">Administrator</span>
            </div>
          </div>
        </div>

        <div className="route-explanation-box">
          <h3>How this Protected Route works:</h3>
          <ul className="guide-checklist">
            <li>
              <CheckCircle size={16} className="text-success" />
              <span>Wrapped in <code>&lt;ProtectedRoute /&gt;</code> in the router table.</span>
            </li>
            <li>
              <CheckCircle size={16} className="text-success" />
              <span>If you are not logged in, you get redirected to <code>/auth/login</code> automatically.</span>
            </li>
            <li>
              <CheckCircle size={16} className="text-success" />
              <span>The intended destination URL is saved in React Router state so login redirects you right back.</span>
            </li>
          </ul>
        </div>

        <div className="profile-actions">
          <button onClick={handleLogout} className="btn btn-danger">
            <LogOut size={16} /> Log Out Now
          </button>
        </div>
      </div>
    </div>
  );
}
