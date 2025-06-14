"use client"

import { useRouter } from "next/navigation"
import { LogOut, Settings, UserCircle } from "lucide-react"

export default function DropdownMenu({ onClose }: { onClose: () => void }) {
  const router = useRouter()

  const handleLogOut = () => {
    onClose()
    router.push("/login")
  }

  const handleNavigation = (path: string) => {
    onClose()
    router.push(path)
  }

  return (
    <div className="absolute right-0 top-8 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-20 border border-gray-200">
      <div className="px-4 py-3 font-semibold border-b border-gray-100 text-gray-900">Account</div>
      <button
        onClick={() => handleNavigation("/profile")}
        className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-700 transition-colors"
      >
        <UserCircle className="w-4 h-4" /> Profile
      </button>
      <button
        onClick={() => handleNavigation("/settings")}
        className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-700 transition-colors"
      >
        <Settings className="w-4 h-4" /> Settings
      </button>
      <div className="border-t border-gray-100">
        <button
          onClick={handleLogOut}
          className="w-full text-left px-4 py-3 hover:bg-red-50 flex items-center gap-3 text-sm text-red-600 transition-colors"
        >
          <LogOut className="w-4 h-4" /> Log out
        </button>
      </div>
    </div>
  )
}
