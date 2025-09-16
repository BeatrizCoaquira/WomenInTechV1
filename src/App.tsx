import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext.tsx';
import Navbar from './components/Navbar.tsx';
import LoginPage from './components/LoginPage.tsx';
import Dashboard from './components/Dashboard.tsx';
import { Loader2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading, login } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-secondary-600 to-purple-700">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-white animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Initializing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {isAuthenticated ? (
        <>
          <Navbar />
          <Dashboard />
        </>
      ) : (
        <LoginPage onLogin={login} isLoading={isLoading} />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
