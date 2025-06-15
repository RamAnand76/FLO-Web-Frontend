export default function MetricCard({ label, value, change }: { label: string; value: string; change: string; }) {
  const isPositive = change.startsWith('+');
  
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{label}</p>
        <div className={`w-2 h-2 rounded-full ${isPositive ? 'bg-green-400' : 'bg-red-400'}`}></div>
      </div>
      <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {value}
      </h4>
      <div className="flex items-center space-x-1">
        <span className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
        <span className="text-xs text-gray-400">vs last month</span>
      </div>
    </div>
  );
}