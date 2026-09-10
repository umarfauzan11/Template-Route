import { useState, type FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogIn, Lock, Mail, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Login() {
  const [email, setEmail] = useState('demo@template-route.dev');
  const [password, setPassword] = useState('password123');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect back to intended target route if coming from a protected route
  const from = (location.state as { from?: { pathname?: string } })?.from?.pathname || '/profile';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please provide an email address');
      return;
    }

    login(email);
    toast.success(`Welcome back! Redirecting to ${from}...`);
    navigate(from, { replace: true });
  };

  return (
    <div className="login-card">
      <div className="login-header">
        <div className="login-icon-box">
          <LogIn size={26} />
        </div>
        <h1 className="login-title">Sign In</h1>
        <p className="login-subtitle">
          Test authentication guard redirection to protected views.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <div className="input-with-icon">
            <Mail size={18} className="input-icon" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="name@example.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <div className="input-with-icon">
            <Lock size={18} className="input-icon" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          <Sparkles size={16} /> Sign In (Demo Mode)
        </button>
      </form>

      <p className="auth-footnote">
        Any demo credentials will be accepted to simulate an active session.
      </p>
    </div>
  );
}
