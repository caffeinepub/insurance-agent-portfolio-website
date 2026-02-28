import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', leads: 18 },
  { day: 'Tue', leads: 22 },
  { day: 'Wed', leads: 19 },
  { day: 'Thu', leads: 25 },
  { day: 'Fri', leads: 21 },
  { day: 'Sat', leads: 23 },
  { day: 'Sun', leads: 24 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-2 rounded-lg text-sm" style={{ background: '#0f3460', border: '1px solid #1a1a2e' }}>
        <p className="text-gray-300">{label}</p>
        <p className="text-green-400 font-bold">{payload[0].value} leads</p>
      </div>
    );
  }
  return null;
};

export default function LeadsChart() {
  return (
    <div className="rounded-xl p-4 md:p-5 h-full" style={{ background: '#1a1a2e', border: '1px solid #0f3460' }}>
      <div className="mb-4">
        <h3 className="text-white font-semibold text-sm md:text-base">Leads This Week</h3>
        <p className="text-gray-500 text-xs mt-0.5">Daily lead volume — last 7 days</p>
      </div>
      <div className="h-48 md:h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#0f3460" />
            <XAxis dataKey="day" tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ fill: '#10b981', r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#10b981' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
