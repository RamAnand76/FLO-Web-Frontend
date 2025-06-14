import Header from "@/components/Header"
import ProfileForm from "@/components/forms/ProfileForm"
import EducationForm from "@/components/forms/EducationForm"
import ExperienceForm from "@/components/forms/ExperienceForm"
import CertificationForm from "@/components/forms/CertificationForm"
import { FileText, Save } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-8">
      <Header />

      {/* Header Section with Save Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Profile Builder</h1>
        <div className="flex items-center gap-3">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg shadow-blue-200">
            ⭐ Premium Active
          </span>
          <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg shadow-green-200 border-0">
            <Save className="w-4 h-4 mr-2" />
            Save Progress
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Resume Parser Section */}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-xl">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Resume Parser</h2>
            <span className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs px-3 py-1.5 rounded-full font-medium border border-blue-200">
              Premium Feature
            </span>
          </div>

          <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <div className="flex flex-col items-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 transform hover:-translate-y-0.5">
                Choose file
              </button>
              <p className="text-sm text-gray-600 max-w-md">
                Upload your resume (PDF, DOC, DOCX) to automatically fill your profile
              </p>
            </div>
          </div>
        </div>

        {/* Professional Profile Section */}
        <ProfileForm />

        {/* Technical Skills Section */}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200/50">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Technical Skills</h2>
          </div>

          <p className="text-gray-600 mb-6">Showcase your technical expertise and proficiency levels</p>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-800">Selected Skills</span>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg">
                + Select Skills
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="group">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-medium border border-blue-200 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
                  <span className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></span>
                  JavaScript
                  <button className="ml-1 text-blue-500 hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-200 hover:bg-blue-300 rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    ×
                  </button>
                </span>
              </div>
              <div className="group">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-medium border border-blue-200 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
                  <span className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></span>
                  React
                  <button className="ml-1 text-blue-500 hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-200 hover:bg-blue-300 rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    ×
                  </button>
                </span>
              </div>
              <div className="group">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-medium border border-blue-200 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
                  <span className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></span>
                  Node.js
                  <button className="ml-1 text-blue-500 hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-200 hover:bg-blue-300 rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    ×
                  </button>
                </span>
              </div>
              <button className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-600 px-5 py-2.5 rounded-full text-sm font-medium border-2 border-dashed border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md">
                <span className="text-lg leading-none">+</span>
                Add Skill
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white text-xs">💡</span>
              </div>
              <span className="text-sm font-semibold text-amber-800">Pro Tip</span>
            </div>
            <p className="text-sm text-amber-700 leading-relaxed">
              Add skills that are relevant to your target role. You can organize them by categories like Programming
              Languages, Frameworks, Tools, etc.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <EducationForm />

        {/* Experience Section */}
        <ExperienceForm />

        {/* Certifications Section */}
        <CertificationForm />

        {/* Bottom Save Button */}
        <div className="flex justify-center pt-8">
          <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 text-lg shadow-xl shadow-green-200/50 hover:shadow-2xl hover:shadow-green-300/50 transform hover:-translate-y-1 transition-all duration-200 border-0 rounded-xl">
            <Save className="w-5 h-5 mr-3" />
            Save Profile
          </Button>
        </div>
      </div>
    </div>
  )
}
