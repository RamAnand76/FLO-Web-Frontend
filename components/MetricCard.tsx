export default function MetricCard({ label, value, change }: { label: string; value: string; change: string; }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">{label}</p>
        <h4 className="text-xl font-bold">{value}</h4>
        <p className="text-sm text-green-600 font-semibold">{change}</p>
      </div>
    );
  }