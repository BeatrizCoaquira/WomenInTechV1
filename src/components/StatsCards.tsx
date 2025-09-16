import React from 'react';
import { AnalyticsData } from '../types';
import { BarChart3, Users, TrendingUp, Eye } from 'lucide-react';

interface StatsCardsProps {
  data: AnalyticsData;
}

const StatsCards: React.FC<StatsCardsProps> = ({ data }) => {
  const stats = [
    {
      title: 'Total Posts',
      value: data.totalPosts.toLocaleString(),
      icon: BarChart3,
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/20'
    },
    {
      title: 'Total Engagement',
      value: data.totalEngagement.toLocaleString(),
      icon: Users,
      color: 'text-secondary-400',
      bgColor: 'bg-secondary-500/20'
    },
    {
      title: 'Avg Engagement',
      value: `${data.averageEngagement}%`,
      icon: TrendingUp,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      title: 'Active Topics',
      value: data.trendingTopics.length.toString(),
      icon: Eye,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div 
            key={index}
            className="glass-effect rounded-2xl p-6 card-hover"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm font-medium mb-1">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-white">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-xl`}>
                <IconComponent className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
