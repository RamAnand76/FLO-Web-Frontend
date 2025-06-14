"use client"

import { GraduationCap, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface EducationEntry {
  id: string
  type: "postgrad" | "grad"
  university: string
  degree: string
  fieldOfStudy: string
  year: string
  grade: string
}

export default function EducationForm() {
  const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([
    {
      id: "1",
      type: "postgrad",
      university: "",
      degree: "",
      fieldOfStudy: "",
      year: "",
      grade: "",
    },
    {
      id: "2",
      type: "grad",
      university: "",
      degree: "",
      fieldOfStudy: "",
      year: "",
      grade: "",
    },
  ])

  const addEducationEntry = (type: "postgrad" | "grad") => {
    const newEntry: EducationEntry = {
      id: Date.now().toString(),
      type,
      university: "",
      degree: "",
      fieldOfStudy: "",
      year: "",
      grade: "",
    }
    setEducationEntries([...educationEntries, newEntry])
  }

  const removeEducationEntry = (id: string) => {
    setEducationEntries(educationEntries.filter((entry) => entry.id !== id))
  }

  const updateEducationEntry = (id: string, field: keyof EducationEntry, value: string) => {
    setEducationEntries(educationEntries.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)))
  }

  const postGradEntries = educationEntries.filter((entry) => entry.type === "postgrad")
  const gradEntries = educationEntries.filter((entry) => entry.type === "grad")

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
      </div>

      <p className="text-sm text-gray-600 mb-6">Add your educational qualifications in reverse chronological order</p>

      {/* Post Graduation Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Post Graduation</h3>
          <Button
            onClick={() => addEducationEntry("postgrad")}
            variant="outline"
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Post Graduation
          </Button>
        </div>

        {postGradEntries.map((entry, index) => (
          <div
            key={entry.id}
            className="mb-6 p-6 border border-gray-200 rounded-xl relative bg-gray-50/30 hover:bg-gray-50/50 transition-colors shadow-sm"
          >
            {postGradEntries.length > 1 && (
              <Button
                onClick={() => removeEducationEntry(entry.id)}
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">University/Institution *</label>
                <input
                  type="text"
                  value={entry.university}
                  onChange={(e) => updateEducationEntry(entry.id, "university", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                  placeholder="Enter university name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Degree *</label>
                <input
                  type="text"
                  value={entry.degree}
                  onChange={(e) => updateEducationEntry(entry.id, "degree", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                  placeholder="e.g., Master of Science"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Field of Study *</label>
                <input
                  type="text"
                  value={entry.fieldOfStudy}
                  onChange={(e) => updateEducationEntry(entry.id, "fieldOfStudy", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                  placeholder="e.g., Computer Science"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Year of Completion *</label>
                <input
                  type="text"
                  value={entry.year}
                  onChange={(e) => updateEducationEntry(entry.id, "year", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                  placeholder="YYYY"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-800 mb-3">Grade/CGPA</label>
              <input
                type="text"
                value={entry.grade}
                onChange={(e) => updateEducationEntry(entry.id, "grade", e.target.value)}
                className="w-full md:w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                placeholder="Enter your grade or CGPA"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Graduation Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Graduation</h3>
          <Button
            onClick={() => addEducationEntry("grad")}
            variant="outline"
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Graduation
          </Button>
        </div>

        {gradEntries.map((entry, index) => (
          <div
            key={entry.id}
            className="mb-6 p-6 border border-gray-200 rounded-xl relative bg-gray-50/30 hover:bg-gray-50/50 transition-colors shadow-sm"
          >
            {gradEntries.length > 1 && (
              <Button
                onClick={() => removeEducationEntry(entry.id)}
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">University/Institution *</label>
                <input
                  type="text"
                  value={entry.university}
                  onChange={(e) => updateEducationEntry(entry.id, "university", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                  placeholder="Enter university name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Degree *</label>
                <input
                  type="text"
                  value={entry.degree}
                  onChange={(e) => updateEducationEntry(entry.id, "degree", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                  placeholder="e.g., Bachelor of Technology"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Field of Study *</label>
                <input
                  type="text"
                  value={entry.fieldOfStudy}
                  onChange={(e) => updateEducationEntry(entry.id, "fieldOfStudy", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                  placeholder="e.g., Computer Science"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Year of Completion *</label>
                <input
                  type="text"
                  value={entry.year}
                  onChange={(e) => updateEducationEntry(entry.id, "year", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                  placeholder="YYYY"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-800 mb-3">Grade/CGPA</label>
              <input
                type="text"
                value={entry.grade}
                onChange={(e) => updateEducationEntry(entry.id, "grade", e.target.value)}
                className="w-full md:w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                placeholder="Enter your grade or CGPA"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
