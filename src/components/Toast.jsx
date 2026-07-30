export default function Toast({ show, message, type = 'success' }) {
  if (!show) return null;

  const icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    info: 'fa-info-circle'
  };

  return (
    <div className={`toast toast-${type} ${show ? 'show' : ''}`}>
      <i className={`fas ${icons[type]}`}></i>
      <span>{message}</span>
    </div>
  );
}