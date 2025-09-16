import React from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import { LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/logotech.png" 
            alt="WomanInTech Logo" 
            className="h-10 w-10 rounded-lg"
          />
          <h1 className="text-2xl font-bold text-white">
            WomanInTech Analytics
          </h1>
        </div>
        
        {user && (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              {user.picture && (
                <img 
                  src={user.picture.data.url} 
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
              )}
              <span className="font-medium">{user.name}</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
