import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FacebookUser, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<FacebookUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Facebook SDK
    const initializeFacebook = () => {
      if (window.FB) {
        window.FB.init({
          appId: '686477530448145', // Replace with your actual Facebook App ID
          cookie: true,
          xfbml: true,
          version: 'v18.0'
        });

        // Check login status
        window.FB.getLoginStatus((response: any) => {
          if (response.status === 'connected') {
            fetchUserProfile(response.authResponse.accessToken);
          } else {
            setIsLoading(false);
          }
        });
      } else {
        // Load Facebook SDK
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
        
        script.onload = () => {
          initializeFacebook();
        };
      }
    };

    initializeFacebook();
  }, []);

  const fetchUserProfile = (accessToken: string) => {
    window.FB.api('/me', { fields: 'id,name,email,picture' }, (response: FacebookUser) => {
      setUser(response);
      setIsLoading(false);
    });
  };

  const login = async (): Promise<void> => {
    return new Promise((resolve, reject) => {
      window.FB.login((response: any) => {
        if (response.authResponse) {
          fetchUserProfile(response.authResponse.accessToken);
          resolve();
        } else {
          reject(new Error('Login failed'));
        }
      }, {
        scope: 'public_profile,email,pages_read_engagement,pages_show_list'
      });
    });
  };

  const logout = () => {
    window.FB.logout(() => {
      setUser(null);
    });
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Extend Window interface for Facebook SDK
declare global {
  interface Window {
    FB: any;
  }
}
