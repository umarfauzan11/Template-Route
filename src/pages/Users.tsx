import { Link } from 'react-router-dom';
import { User, ArrowRight, Sparkles } from 'lucide-react';
import { mockUsers } from '../data/mockUsers';

export default function Users() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="badge-inline">
          <Sparkles size={14} /> Dynamic Routing Demo
        </div>
        <h1 className="page-title">User Directory</h1>
        <p className="page-subtitle">
          Click on any user below to test dynamic URL parameters (<code>/users/:id</code>) and parameter retrieval with <code>useParams()</code>.
        </p>
      </div>

      <div className="users-list-grid">
        {mockUsers.map((u) => (
          <Link key={u.id} to={`/users/${u.id}`} className="user-card-link">
            <div className="user-card">
              <div className="user-avatar">
                <User size={24} />
              </div>
              <div className="user-info">
                <h3 className="user-name">{u.name}</h3>
                <span className="user-role">{u.role}</span>
                <span className="user-email">{u.email}</span>
              </div>
              <ArrowRight size={18} className="user-arrow-icon" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
