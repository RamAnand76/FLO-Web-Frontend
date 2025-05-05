export default function ActionCard({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void; }) {
    return (
      <div onClick={onClick} className="bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center text-gray-600 hover:bg-blue-50 transition cursor-pointer">
        <div className="text-2xl mb-2">{icon}</div>
        <span className="font-medium">{label}</span>
      </div>
    );
  }