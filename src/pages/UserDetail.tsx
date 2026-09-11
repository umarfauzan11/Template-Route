import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, Briefcase, Calendar, Shield } from 'lucide-react';
import { mockUsers } from '../data/mockUsers';

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const user = mockUsers.find((u) => u.id === id);

  return (
    <div className="page-container">
      <button onClick={() => navigate(-1)} className="btn btn-secondary back-btn">
        <ArrowLeft size={16} /> Back to Users
      </button>

      {user ? (
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar large">
              <User size={40} />
            </div>
            <div>
              <h1 className="profile-title">{user.name}</h1>
              <span className="profile-tag">User ID: #{id}</span>
            </div>
          </div>

          <div className="profile-details-grid">
            <div className="detail-item">
              <Briefcase size={18} className="detail-icon" />
              <div>
                <span className="detail-label">Role</span>
                <span className="detail-val">{user.role}</span>
              </div>
            </div>

            <div className="detail-item">
              <Mail size={18} className="detail-icon" />
              <div>
                <span className="detail-label">Email Address</span>
                <span className="detail-val">{user.email}</span>
              </div>
            </div>

            <div className="detail-item">
              <Calendar size={18} className="detail-icon" />
              <div>
                <span className="detail-label">Joined</span>
                <span className="detail-val">January 2026</span>
              </div>
            </div>

            <div className="detail-item">
              <Shield size={18} className="detail-icon" />
              <div>
                <span className="detail-label">Status</span>
                <span className="detail-val text-success">Active Member</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card text-center not-found-box">
          <h2>User with ID "{id}" Not Found</h2>
          <p>This dynamic route demonstrates handling missing IDs cleanly.</p>
          <Link to="/users" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
            View All Users
          </Link>
        </div>
      )}
    </div>
  );
}
