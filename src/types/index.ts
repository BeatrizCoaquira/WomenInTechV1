export interface FacebookUser {
  id: string;
  name: string;
  email?: string;
  picture?: {
    data: {
      url: string;
    };
  };
}

export interface AuthContextType {
  user: FacebookUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => void;
}

export interface TrendingTopic {
  hashtag: string;
  posts: number;
  growth: number;
  trend: 'up' | 'down' | 'stable';
}

export interface EngagementData {
  date: string;
  engagement: number;
  reach: number;
  impressions: number;
}

export interface ContentType {
  type: string;
  engagement: number;
  count: number;
}

export interface AnalyticsData {
  trendingTopics: TrendingTopic[];
  engagementTrends: EngagementData[];
  topContentTypes: ContentType[];
  totalPosts: number;
  totalEngagement: number;
  averageEngagement: number;
}
