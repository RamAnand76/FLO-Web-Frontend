"use client"

import type { ReactNode } from "react"

interface ActionCardProps {
  icon: ReactNode
  label: string
  description: string
  color: "blue" | "green" | "purple" | "orange"
  onClick?: () => void
}

const colorClasses = {
  blue: "bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200",
  green: "bg-green-50 hover:bg-green-100 text-green-600 border-green-200",
  purple: "bg-purple-50 hover:bg-purple-100 text-purple-600 border-purple-200",
  orange: "bg-orange-50 hover:bg-orange-100 text-orange-600 border-orange-200",
}

export default function ActionCard({ icon, label, description, color, onClick }: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-md hover:scale-105 text-left ${colorClasses[color]}`}
    >
      <div className="mb-3">{icon}</div>
      <h4 className="font-semibold text-gray-900 mb-1">{label}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  )
}
