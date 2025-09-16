import React from 'react';
import { Facebook, BarChart3, TrendingUp, Users } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  isLoading: boolean;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, isLoading }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/logotech.png" 
              alt="WomanInTech Logo" 
              className="h-20 w-20 rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            WomanInTech Analytics
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Connect with Facebook to access analytics dashboard
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass-effect rounded-2xl p-6 text-center">
            <BarChart3 className="h-12 w-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Analytics Dashboard</h3>
            <p className="text-white/70">Comprehensive insights into your Facebook content performance</p>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 text-center">
            <TrendingUp className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Trending Topics</h3>
            <p className="text-white/70">Discover what's trending in the WomenInTech community</p>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Users className="h-12 w-12 text-primary-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Engagement Insights</h3>
            <p className="text-white/70">Understand your audience engagement patterns</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onLogin}
            disabled={isLoading}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 mx-auto"
          >
            <Facebook size={24} />
            <span>
              {isLoading ? 'Connecting...' : 'Login with Facebook'}
            </span>
          </button>
          
          <p className="text-white/60 text-sm mt-4">
            We only access public content and your basic profile information
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
