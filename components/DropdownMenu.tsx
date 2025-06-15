import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';
import { Settings, UserCircle, Crown, Palette } from 'lucide-react';

export default function DropdownMenu({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  return (
    <div className="absolute right-0 top-12 w-64 bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <UserCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">John Designer</p>
            <div className="flex items-center space-x-1">
              <Crown className="w-3 h-3 text-yellow-500" />
              <span className="text-xs text-gray-600 font-medium">Premium Member</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-2">
        <button
          onClick={() => {
            router.push('/profile');
            onClose();
          }}
          className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-3 text-sm font-medium text-gray-700 transition-colors duration-200"
        >
          <UserCircle size={18} className="text-gray-500" /> 
          Profile Settings
        </button>
        
        <button
          onClick={() => {
            router.push('/templates');
            onClose();
          }}
          className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-3 text-sm font-medium text-gray-700 transition-colors duration-200"
        >
          <Palette size={18} className="text-gray-500" /> 
          My Templates
        </button>
        
        <button
          onClick={() => {
            router.push('/settings');
            onClose();
          }}
          className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-3 text-sm font-medium text-gray-700 transition-colors duration-200"
        >
          <Settings size={18} className="text-gray-500" /> 
          Account Settings
        </button>
      </div>
      
      <div className="border-t border-gray-100 p-2">
        <button className="w-full text-left px-4 py-3 hover:bg-red-50 rounded-xl flex items-center gap-3 text-sm font-medium text-red-600 transition-colors duration-200">
          <FiLogOut size={18} /> 
          Sign Out
        </button>
      </div>
    </div>
  );
}