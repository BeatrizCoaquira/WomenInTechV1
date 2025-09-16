import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ContentType } from '../types';

interface ContentTypesProps {
  contentTypes: ContentType[];
}

const ContentTypes: React.FC<ContentTypesProps> = ({ contentTypes }) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
          <p className="text-gray-800 font-medium">{`Content Type: ${label}`}</p>
          <p className="text-primary-600">
            {`Engagement: ${payload[0].value}%`}
          </p>
          <p className="text-gray-600">
            {`Posts: ${payload[1].value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-effect rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        🎯 TOP PERFORMING CONTENT TYPES
      </h2>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={contentTypes} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="type" 
              stroke="rgba(255,255,255,0.6)"
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.6)"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="engagement" 
              fill="#6366f1"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 space-y-3">
        {contentTypes.map((content, index) => (
          <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
              <span className="text-white font-medium">{content.type}</span>
            </div>
            <div className="text-right">
              <div className="text-white font-semibold">{content.engagement}% avg engagement</div>
              <div className="text-white/60 text-sm">{content.count} posts</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentTypes;
