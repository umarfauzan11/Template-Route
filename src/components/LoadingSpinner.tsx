import { Loader2 } from 'lucide-react';

export default function LoadingSpinner({ message = 'Loading page...' }: { message?: string }) {
  return (
    <div className="loading-container">
      <Loader2 className="spinner-icon" size={36} />
      <p className="loading-text">{message}</p>
    </div>
  );
}
