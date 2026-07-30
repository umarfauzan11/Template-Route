import { useNavigate } from 'react-router-dom';

const TopBarHeader = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="header-top">
                <div className="headeFr-actions">
                    <button className="header-btn" onClick={() => history.back()} aria-label="Back">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <img
                        src="/icon/logo.svg"
                        alt="Route-Template"
                        className="logo"
                        onClick={() => navigate('/')}
                        style={{ filter: 'grayscale(100%) invert(1)' }}
                    />
                </div>
            </div>
        </header>
    )
}

export default TopBarHeader
