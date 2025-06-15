import { Bell, User, Search } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-8">
        <h1 
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-200" 
          onClick={() => router.push('/')}
        >
          FLO
        </h1>
        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search projects, templates..." 
            className="pl-12 pr-4 py-3 w-80 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:outline-none transition-all duration-200"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors duration-200" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="relative">
          <div 
            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <User className="w-5 h-5 text-white" />
          </div>
          {dropdownOpen && <DropdownMenu onClose={() => setDropdownOpen(false)} />}
        </div>
      </div>
    </div>
  );
}