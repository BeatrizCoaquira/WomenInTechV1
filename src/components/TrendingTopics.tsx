import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { TrendingTopic } from '../types';

interface TrendingTopicsProps {
  topics: TrendingTopic[];
}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ topics }) => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-400" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-400" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="glass-effect rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        🔍 TRENDING TOPICS (Last 7 Days)
      </h2>
      
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div 
            key={index}
            className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-primary-400">
                  #{topic.hashtag}
                </span>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(topic.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(topic.trend)}`}>
                    {topic.growth > 0 ? '+' : ''}{topic.growth}%
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-white font-semibold">
                  {topic.posts.toLocaleString()} posts
                </div>
                <div className="text-white/60 text-sm">
                  {topic.trend === 'up' ? 'Growing' : topic.trend === 'down' ? 'Declining' : 'Stable'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
