
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ROICalculator: React.FC = () => {
  const [revenue, setRevenue] = useState(100000000); 
  const [waste, setWaste] = useState(15);

  const potentialSavings = (revenue * (waste / 100)) * 0.4; 
  
  const data = [
    { name: 'Current Waste', amount: revenue * (waste / 100) / 1000000, color: '#64748B' },
    { name: 'With KiliGrid', amount: (revenue * (waste / 100) - potentialSavings) / 1000000, color: '#7DD3FC' },
  ];

  return (
    <div className="bg-white dark:bg-deep/50 rounded-3xl p-8 shadow-2xl border border-blue-100 dark:border-white/5 backdrop-blur-xl">
      <h3 className="text-2xl font-bold text-ocean dark:text-white mb-6">Savings Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-semibold text-gray-500 dark:text-blue-100/40 mb-4">Annual Revenue</label>
            <input 
              type="range" 
              min="10000000" 
              max="1000000000" 
              step="10000000"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full h-2 bg-blue-50 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-glacier"
            />
            <div className="text-xl font-bold mt-2 text-ocean dark:text-white">
              {(revenue / 1000000).toLocaleString()}M Units
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-500 dark:text-blue-100/40 mb-4">Process Waste (%)</label>
            <input 
              type="range" 
              min="5" 
              max="40" 
              value={waste}
              onChange={(e) => setWaste(Number(e.target.value))}
              className="w-full h-2 bg-blue-50 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-glacier"
            />
            <div className="text-xl font-bold mt-2 text-ocean dark:text-white">{waste}%</div>
          </div>

          <div className="bg-blue-50 dark:bg-glacier/10 p-6 rounded-2xl border border-blue-100 dark:border-glacier/20">
            <p className="text-sm font-medium text-ocean dark:text-glacier mb-1">Potential Annual Savings</p>
            <p className="text-3xl font-black text-ocean dark:text-white">
              {(potentialSavings / 1000000).toFixed(1)}M <span className="text-sm opacity-50 font-normal">Units</span>
            </p>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                formatter={(value: number) => [`${value.toFixed(1)}M`, 'Amount']} 
              />
              <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center text-[10px] text-gray-400 dark:text-blue-100/20 mt-4 italic">*Estimates based on typical enterprise ERP deployment metrics.</p>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
