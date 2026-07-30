import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from './Toast';

export default function Header() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setDeferredPrompt(null);
    setShowInstallBtn(false);
  };


  return (
    <>
      <header className="header">
        <div className="header-top">
          <img src="/favicon.png" alt="Route-Template" className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />

          <div className="header-actions">
              <button className="header-btn" aria-label="Login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
              </button>
          </div>
        </div>

        {showInstallBtn && (
          <button
            className="header-btn install-btn"
            onClick={handleInstall}
            title="Install aplikasi"
          >
            <i className="fas fa-download"></i>
            <span>Install</span>
          </button>
        )}

        <div className="category-tabs">
          {/* <button className="category-tab active" data-category="all">Semua</button> */}
        </div>
      </header>

      <Toast show={false} message="" type="success" />
    </>
  );
}
