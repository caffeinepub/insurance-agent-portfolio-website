import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Auto', value: 45, color: '#3b82f6' },
  { name: 'Home', value: 30, color: '#10b981' },
  { name: 'Life', value: 15, color: '#8b5cf6' },
  { name: 'Commercial', value: 10, color: '#f59e0b' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-2 rounded-lg text-sm" style={{ background: '#0f3460', border: '1px solid #1a1a2e' }}>
        <p className="text-white font-bold">{payload[0].name}: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = () => (
  <div className="flex flex-col gap-1.5 mt-2">
    {data.map(d => (
      <div key={d.name} className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
          <span className="text-gray-400">{d.name}</span>
        </div>
        <span className="text-white font-semibold">{d.value}%</span>
      </div>
    ))}
  </div>
);

export default function PolicyPieChart() {
  return (
    <div className="rounded-xl p-4 md:p-5" style={{ background: '#1a1a2e', border: '1px solid #0f3460' }}>
      <div className="mb-3">
        <h3 className="text-white font-semibold text-sm md:text-base">Policy Mix</h3>
        <p className="text-gray-500 text-xs mt-0.5">By coverage type</p>
      </div>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={65}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <CustomLegend />
    </div>
  );
}
