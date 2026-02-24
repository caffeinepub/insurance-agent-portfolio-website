import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserRole } from '../../hooks/useAdminQueries';
import { Loader2, ShieldAlert } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

export default function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
  const { identity, isInitializing } = useInternetIdentity();
  const { data: userRole, isLoading: roleLoading, error } = useGetCallerUserRole();
  const [showAccessDenied, setShowAccessDenied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitializing && !identity) {
      navigate({ to: '/admin/login' });
    }
  }, [identity, isInitializing, navigate]);

  useEffect(() => {
    if (!roleLoading && userRole && userRole !== 'admin') {
      setShowAccessDenied(true);
    }
  }, [userRole, roleLoading]);

  // Still initializing identity
  if (isInitializing) {
    return (
      <div className="min-h-screen bg-navy-primary flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-gold-accent animate-spin" />
      </div>
    );
  }

  // Not authenticated
  if (!identity) {
    return (
      <div className="min-h-screen bg-navy-primary flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-gold-accent animate-spin" />
      </div>
    );
  }

  // Loading role
  if (roleLoading) {
    return (
      <div className="min-h-screen bg-navy-primary flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-gold-accent animate-spin" />
      </div>
    );
  }

  // Access denied
  if (showAccessDenied || (userRole && userRole !== 'admin')) {
    return (
      <div className="min-h-screen bg-navy-primary flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-navy-secondary border-gold-accent/30">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center border-2 border-red-500/30">
              <ShieldAlert className="w-8 h-8 text-red-500" />
            </div>
            <CardTitle className="text-2xl font-serif text-white">Access Denied</CardTitle>
            <CardDescription className="text-white/70 font-sans">
              You do not have permission to access the admin panel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => navigate({ to: '/' })}
              className="w-full bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-semibold"
            >
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Authorized
  return <>{children}</>;
}
