"use client"

import { Briefcase, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ExperienceEntry {
  id: string
  companyName: string
  position: string
  startDate: string
  endDate: string
  isCurrentJob: boolean
  description: string
}

export default function ExperienceForm() {
  const [experiences, setExperiences] = useState<ExperienceEntry[]>([
    {
      id: "1",
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      isCurrentJob: false,
      description: "",
    },
  ])

  const addExperience = () => {
    const newExperience: ExperienceEntry = {
      id: Date.now().toString(),
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      isCurrentJob: false,
      description: "",
    }
    setExperiences([...experiences, newExperience])
  }

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const updateExperience = (id: string, field: keyof ExperienceEntry, value: string | boolean) => {
    setExperiences(experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
        </div>
        <Button
          onClick={addExperience}
          variant="outline"
          size="sm"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Experience
        </Button>
      </div>

      <p className="text-sm text-gray-600 mb-6">Add your work experience in reverse chronological order</p>

      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          className="mb-6 p-6 border border-gray-200 rounded-xl relative bg-gray-50/30 hover:bg-gray-50/50 transition-colors shadow-sm"
        >
          {experiences.length > 1 && (
            <Button
              onClick={() => removeExperience(experience.id)}
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">Company Name *</label>
              <input
                type="text"
                value={experience.companyName}
                onChange={(e) => updateExperience(experience.id, "companyName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">Position *</label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) => updateExperience(experience.id, "position", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                placeholder="Position"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">Start Date *</label>
              <input
                type="month"
                value={experience.startDate}
                onChange={(e) => updateExperience(experience.id, "startDate", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">End Date</label>
              <input
                type="month"
                value={experience.endDate}
                onChange={(e) => updateExperience(experience.id, "endDate", e.target.value)}
                disabled={experience.isCurrentJob}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm disabled:bg-gray-100"
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id={`current-${experience.id}`}
                  checked={experience.isCurrentJob}
                  onChange={(e) => updateExperience(experience.id, "isCurrentJob", e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor={`current-${experience.id}`} className="text-sm text-gray-600">
                  I currently work here
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-3">Job Description and Achievements *</label>
            <textarea
              value={experience.description}
              onChange={(e) => updateExperience(experience.id, "description", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm resize-none"
              rows={4}
              placeholder="Describe your role, responsibilities, and key achievements..."
            />
          </div>
        </div>
      ))}
    </div>
  )
}
