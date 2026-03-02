import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Oct', quotes: 4 },
  { month: 'Nov', quotes: 6 },
  { month: 'Dec', quotes: 5 },
  { month: 'Jan', quotes: 8 },
  { month: 'Feb', quotes: 10 },
  { month: 'Mar', quotes: 12 },
];

const coverageData = [
  { name: 'Homeowners', value: 35, color: '#1B3A6B' },
  { name: 'Auto', value: 28, color: '#F4B942' },
  { name: 'Bundle', value: 20, color: '#27AE60' },
  { name: 'Business', value: 10, color: '#2E5FA3' },
  { name: 'Other', value: 7, color: '#888888' },
];

const cityData = [
  { city: 'The Woodlands', pct: 32 },
  { city: 'Spring', pct: 24 },
  { city: 'Humble', pct: 20 },
  { city: 'Magnolia', pct: 12 },
  { city: 'Tomball', pct: 8 },
  { city: 'Conroe', pct: 4 },
];

const topStats = [
  { icon: '👁️', value: '847', label: 'Total Visitors This Month', change: '+23%' },
  { icon: '📋', value: '12', label: 'Quote Form Submissions', change: '+3' },
  { icon: '💬', value: '34', label: 'WhatsApp Button Clicks', change: '+8' },
  { icon: '📞', value: '21', label: 'Phone Number Clicks', change: '+5' },
];

export default function AdminJenkinsAnalyticsPage() {
  return (
    <div>
      <h1 className="font-montserrat font-bold text-[28px] mb-6" style={{ color: '#1B3A6B' }}>
        Website Analytics
      </h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {topStats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm p-5">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="font-montserrat font-extrabold text-[28px]" style={{ color: '#1B3A6B' }}>
              {stat.value}
            </div>
            <div className="font-opensans text-[13px] text-gray-500 mt-1">{stat.label}</div>
            <div className="font-opensans text-[12px] font-semibold mt-1" style={{ color: '#27AE60' }}>
              {stat.change} this month
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="font-montserrat font-bold text-[18px] mb-6" style={{ color: '#1B3A6B' }}>
            Monthly Quote Requests
          </h2>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={monthlyData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontFamily: 'Open Sans', fontSize: 12, fill: '#888' }} />
              <YAxis tick={{ fontFamily: 'Open Sans', fontSize: 12, fill: '#888' }} />
              <Tooltip
                contentStyle={{ fontFamily: 'Open Sans', fontSize: 13, borderRadius: 8, border: '1px solid #e5e7eb' }}
              />
              <Bar dataKey="quotes" fill="#F4B942" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="font-montserrat font-bold text-[18px] mb-6" style={{ color: '#1B3A6B' }}>
            Leads by Coverage Type
          </h2>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={coverageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {coverageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value}%`, '']}
                  contentStyle={{ fontFamily: 'Open Sans', fontSize: 13, borderRadius: 8 }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {coverageData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  <span className="font-opensans text-[13px] text-gray-600 flex-1">{item.name}</span>
                  <span className="font-opensans font-bold text-[13px]" style={{ color: '#1B3A6B' }}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leads by City */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="font-montserrat font-bold text-[18px] mb-6" style={{ color: '#1B3A6B' }}>
          Leads by City
        </h2>
        <div className="space-y-4">
          {cityData.map((item) => (
            <div key={item.city} className="flex items-center gap-4">
              <div className="w-32 font-opensans text-[14px] text-gray-600 flex-shrink-0">{item.city}</div>
              <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-700"
                  style={{ width: `${item.pct}%`, background: '#F4B942' }}
                />
              </div>
              <div className="w-10 font-montserrat font-bold text-[14px] text-right" style={{ color: '#1B3A6B' }}>
                {item.pct}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
