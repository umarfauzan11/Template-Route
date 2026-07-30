import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="bottom-nav">
      <a 
        href="#" 
        className={`nav-item ${isActive('/') ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}
      >
        <i className="fas fa-home"></i>
        <span>Home</span>
      </a>
      <a 
        href="#" 
        className={`nav-item ${isActive('/categories') ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}
      >
        <i className="fas fa-th-large"></i>
        <span>Kategori</span>
      </a>
      <a 
        href="#" 
        className={`nav-item ${isActive('/cart') ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          navigate('/cart');
        }}
      >
        <i className="fas fa-shopping-cart"></i>
        <span>Keranjang</span>
      </a>
      <a 
        href="#" 
        className={`nav-item ${isActive('/wishlist') ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          navigate('/wishlist');
        }}
      >
        <i className="fas fa-heart"></i>
        <span>Wishlist</span>
      </a>
      <a 
        href="#" 
        className={`nav-item ${isActive('/account') ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          navigate('/account');
        }}
      >
        <i className="fas fa-user"></i>
        <span>Akun</span>
      </a>
    </nav>
  );
}