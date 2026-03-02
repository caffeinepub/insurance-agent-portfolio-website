import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  exiting?: boolean;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t));
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 300);
  }, []);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 3000);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg pointer-events-auto min-w-[280px] max-w-[380px] ${
              toast.exiting ? 'toast-exit' : 'toast-enter'
            } ${
              toast.type === 'success' ? 'bg-jenkins-navy text-white border-l-4 border-jenkins-gold' :
              toast.type === 'error' ? 'bg-red-600 text-white border-l-4 border-red-300' :
              'bg-blue-600 text-white border-l-4 border-blue-300'
            }`}
          >
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-jenkins-gold flex-shrink-0" />}
            {toast.type === 'error' && <XCircle className="w-5 h-5 text-red-300 flex-shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-blue-300 flex-shrink-0" />}
            <span className="text-sm font-semibold flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
