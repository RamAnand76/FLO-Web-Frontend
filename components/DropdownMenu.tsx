import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';
import { Settings, UserCircle } from 'lucide-react';

export default function DropdownMenu({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  const handleLogOut = () => {
    onClose();
    router.push('/login');
  };

  return (
    <div className="absolute right-0 top-8 w-48 bg-white shadow-md rounded-md overflow-hidden z-10">
      <div className="px-4 py-2 font-semibold border-b">Account</div>
      <button
        onClick={() => {
          router.push('/profile');
          onClose();
        }}
        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-sm"
      >
        <UserCircle size={16} /> Profile
      </button>
      <button
        onClick={() => {
          router.push('/settings');
          onClose();
        }}
        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-sm"
      >
        <Settings size={16} /> Settings
      </button>
      <button 
      onClick={handleLogOut}
      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-sm text-red-600">
        <FiLogOut size={16} /> Log out
      </button>
    </div>
  );
}