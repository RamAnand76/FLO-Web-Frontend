"use client"

import { Bell, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import DropdownMenu from "./DropdownMenu"

export default function Header() {
  const router = useRouter()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="flex justify-between items-center mb-8 relative">
      <h1
        className="text-3xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
        onClick={() => router.push("/")}
      >
        FLO
      </h1>
      <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
        <div className="relative">
          <Bell className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-800 transition-colors" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
        <User
          className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        {dropdownOpen && <DropdownMenu onClose={() => setDropdownOpen(false)} />}
      </div>
    </div>
  )
}
