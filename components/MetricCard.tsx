export default function MetricCard({ label, value, change }: { label: string; value: string; change: string; }) {
  const isPositive = change.startsWith('+');

  return (
    <div className="metric-card-premium group">
      <div className="metric-card-shine"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest letter-spacing">{label}</p>
          <div className={`w-2.5 h-2.5 rounded-full ${isPositive ? 'bg-emerald-400' : 'bg-rose-400'}`}></div>
        </div>
        <h4 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
          {value}
        </h4>
        <div className="flex items-center space-x-2">
          <span className={`text-sm font-bold ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
            {change}
          </span>
          <span className="text-xs text-gray-500">vs last month</span>
        </div>
      </div>
    </div>
  );
}