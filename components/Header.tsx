import { Bell, User } from 'lucide-react';
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
    <div className="flex justify-between items-center mb-6 relative">
      <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => router.push('/')}>FLO</h1>
      <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
        <Bell className="w-5 h-5 cursor-pointer" />
        <User className="w-5 h-5 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)} />
        {dropdownOpen && <DropdownMenu onClose={() => setDropdownOpen(false)} />}
      </div>
    </div>
  );
}