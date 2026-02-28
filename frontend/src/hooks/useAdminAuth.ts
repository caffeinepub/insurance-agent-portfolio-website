import { useCallback } from 'react';
import { useRouter } from '@tanstack/react-router';

const ADMIN_KEY = 'adminAuthenticated';

export function useAdminAuth() {
  const router = useRouter();

  const isAuthenticated = sessionStorage.getItem(ADMIN_KEY) === 'true';

  const login = useCallback((username: string, password: string): boolean => {
    if (username === 'admin' && password === 'conroe123') {
      sessionStorage.setItem(ADMIN_KEY, 'true');
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(ADMIN_KEY);
    router.navigate({ to: '/' });
  }, [router]);

  return { isAuthenticated, login, logout };
}
