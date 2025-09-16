import React, { useState, useEffect } from 'react';
import { AnalyticsData } from '../types';
import StatsCards from './StatsCards.tsx';
import TrendingTopics from './TrendingTopics.tsx';
import EngagementChart from './EngagementChart.tsx';
import ContentTypes from './ContentTypes.tsx';
import { Loader2 } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch analytics data
    const fetchAnalyticsData = async () => {
      setIsLoading(true);
      
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock data - in real app, this would come from your Facebook API integration
      const mockData: AnalyticsData = {
        trendingTopics: [
          { hashtag: 'WomenInTech', posts: 1245, growth: 15.2, trend: 'up' },
          { hashtag: 'TechBootcamp', posts: 892, growth: 8.7, trend: 'up' },
          { hashtag: 'CodingLife', posts: 673, growth: -2.1, trend: 'down' },
          { hashtag: 'WomenInSTEM', posts: 534, growth: 12.4, trend: 'up' },
          { hashtag: 'TechCareer', posts: 456, growth: 5.8, trend: 'up' },
          { hashtag: 'Programming', posts: 389, growth: -1.3, trend: 'down' }
        ],
        engagementTrends: [
          { date: '2024-01-01', engagement: 1200, reach: 8500, impressions: 12000 },
          { date: '2024-01-02', engagement: 1350, reach: 9200, impressions: 13500 },
          { date: '2024-01-03', engagement: 1180, reach: 7800, impressions: 11000 },
          { date: '2024-01-04', engagement: 1420, reach: 9800, impressions: 14500 },
          { date: '2024-01-05', engagement: 1680, reach: 11200, impressions: 16800 },
          { date: '2024-01-06', engagement: 1520, reach: 10500, impressions: 15200 },
          { date: '2024-01-07', engagement: 1890, reach: 12800, impressions: 18900 }
        ],
        topContentTypes: [
          { type: 'Tutorial Videos', engagement: 89, count: 45 },
          { type: 'Success Stories', engagement: 76, count: 32 },
          { type: 'Career Tips', engagement: 65, count: 28 },
          { type: 'Tech News', engagement: 58, count: 41 },
          { type: 'Community Posts', engagement: 52, count: 67 }
        ],
        totalPosts: 12450,
        totalEngagement: 156780,
        averageEngagement: 68.5
      };
      
      setData(mockData);
      setIsLoading(false);
    };

    fetchAnalyticsData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-white animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading analytics data...</p>
          <p className="text-white/60 text-sm mt-2">
            Fetching data from Facebook API
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl">Failed to load analytics data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-secondary-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            📊 WOMANINTECH ANALYTICS DASHBOARD
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full"></div>
        </div>

        <StatsCards data={data} />

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <TrendingTopics topics={data.trendingTopics} />
          <ContentTypes contentTypes={data.topContentTypes} />
        </div>

        <EngagementChart data={data.engagementTrends} />

        <div className="mt-8 glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            🔒 Privacy & Data Protection
          </h3>
          <p className="text-white/80 leading-relaxed">
            Users can filter data by date ranges and content categories. All analysis is performed on 
            aggregated public data with full privacy protection. No personal information is stored or 
            processed beyond what is necessary for analytics purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
