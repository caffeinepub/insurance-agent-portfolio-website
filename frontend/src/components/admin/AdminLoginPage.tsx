import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminLoginPage() {
  const { login, loginStatus, identity } = useInternetIdentity();
  const navigate = useNavigate();

  useEffect(() => {
    if (identity) {
      navigate({ to: '/admin/dashboard' });
    }
  }, [identity, navigate]);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error('Failed to log in. Please try again.');
    }
  };

  const isLoggingIn = loginStatus === 'logging-in';

  return (
    <div className="min-h-screen bg-navy-primary flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-radial from-gold-accent/5 via-transparent to-transparent" />
      
      <Card className="w-full max-w-md bg-navy-secondary border-gold-accent/30 relative z-10">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gold-accent/10 rounded-full flex items-center justify-center border-2 border-gold-accent/30">
            <Shield className="w-8 h-8 text-gold-accent" />
          </div>
          <CardTitle className="text-2xl font-serif text-white">Admin Panel</CardTitle>
          <CardDescription className="text-white/70 font-sans">
            Sign in with Internet Identity to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="w-full bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-semibold py-6 shadow-glow-gold transition-all duration-300"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Logging in...
              </>
            ) : (
              'Sign In with Internet Identity'
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
