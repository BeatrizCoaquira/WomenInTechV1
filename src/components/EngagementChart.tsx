import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { EngagementData } from '../types';

interface EngagementChartProps {
  data: EngagementData[];
}

const EngagementChart: React.FC<EngagementChartProps> = ({ data }) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
          <p className="text-gray-800 font-medium">{`Date: ${label}`}</p>
          <p className="text-primary-600">
            {`Engagement: ${payload[0].value.toLocaleString()}`}
          </p>
          <p className="text-secondary-600">
            {`Reach: ${payload[1].value.toLocaleString()}`}
          </p>
          <p className="text-gray-600">
            {`Impressions: ${payload[2].value.toLocaleString()}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-effect rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        📈 ENGAGEMENT TRENDS
      </h2>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="date" 
              stroke="rgba(255,255,255,0.6)"
              fontSize={12}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.6)"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="engagement" 
              stroke="#6366f1" 
              strokeWidth={3}
              dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#6366f1', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="reach" 
              stroke="#a855f7" 
              strokeWidth={3}
              dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#a855f7', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="impressions" 
              stroke="#8b5cf6" 
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
          <span className="text-white/80 text-sm">Engagement</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
          <span className="text-white/80 text-sm">Reach</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-white/80 text-sm">Impressions</span>
        </div>
      </div>
    </div>
  );
};

export default EngagementChart;
