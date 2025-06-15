export default function ActionCard({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void; }) {
  return (
    <div 
      onClick={onClick} 
      className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      <div className="text-3xl mb-3 text-gray-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <span className="font-semibold text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}