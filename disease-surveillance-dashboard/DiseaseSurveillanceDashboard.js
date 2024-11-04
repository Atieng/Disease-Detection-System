import React, { useState } from 'react';
import Papa from 'papaparse';
import _ from 'lodash';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle } from 'lucide-react';

const SimplifiedDashboard = () => {
  const [data, setData] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Sample data for testing
  const sampleData = [
    { date: '2024-03-01', count: 3 },
    { date: '2024-03-02', count: 5 },
    { date: '2024-03-03', count: 12 }
  ];

  // Detect outbreaks function
  const detectOutbreaks = (dailyCounts) => {
    const counts = dailyCounts.map(d => d.count);
    const mean = _.mean(counts);
    const std = Math.sqrt(_.sum(_.map(counts, x => Math.pow(x - mean, 2))) / counts.length);
    const threshold = mean + 2 * std;
    
    const alerts = [];
    for (let i = 1; i < dailyCounts.length; i++) {
      const previousDay = dailyCounts[i - 1].count;
      const currentDay = dailyCounts[i].count;
      if (previousDay > 0 && (currentDay - previousDay) / previousDay * 100 >= 50) {
        alerts.push({
          date: dailyCounts[i].date,
          message: `Potential outbreak: ${currentDay} cases (${((currentDay - previousDay) / previousDay * 100).toFixed(1)}% increase)`,
          severity: currentDay > threshold ? 'high' : 'medium'
        });
      }
    }
    return alerts;
  };

  // Initialize with sample data
  React.useEffect(() => {
    setData(sampleData);
    setAlerts(detectOutbreaks(sampleData));
  }, []);

  return (
    <div className="p-6 space-y-6 bg-white rounded-lg shadow">
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          Outbreak Alerts
        </h2>
        
        <div className="space-y-2">
          {alerts.map((alert, i) => (
            <div key={i} className={`p-4 rounded-lg border ${alert.severity === 'high' ? 'border-red-500 bg-red-50' : 'border-yellow-500 bg-yellow-50'}`}>
              <div className="font-semibold">{new Date(alert.date).toLocaleDateString()}</div>
              <div>{alert.message}</div>
            </div>
          ))}
          {alerts.length === 0 && (
            <div className="text-gray-500">No significant alerts detected.</div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Disease Mention Trends</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => new Date(date).toLocaleDateString()} 
              />
              <YAxis />
              <Tooltip 
                labelFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="count" 
                stroke="#2563eb" 
                name="Disease Mentions" 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedDashboard;