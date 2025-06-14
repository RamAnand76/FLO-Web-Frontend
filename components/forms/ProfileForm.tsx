import { User } from "lucide-react"

export default function ProfileForm() {
  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 rounded-xl">
          <User className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Professional Profile</h2>
        <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium border border-gray-300">
          Premium
        </span>
      </div>

      <p className="text-gray-600 mb-8">Complete your professional profile to showcase your expertise</p>

      {/* Profile Photo Upload */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4 shadow-inner border-4 border-white shadow-lg">
          <User className="w-10 h-10 text-gray-400" />
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 transform hover:-translate-y-0.5">
          Choose file
        </button>
        <p className="text-xs text-gray-500 mt-3 text-center max-w-xs">
          Upload a professional headshot (Recommended size: 400×400px)
        </p>
      </div>

      {/* Career Objective */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-800 mb-3">Career Objective *</label>
        <textarea
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
          rows={4}
          placeholder="Write a compelling professional summary that highlights your key strengths and career goals..."
        />
        <p className="text-xs text-gray-500 mt-2">Be concise and highlight your key professional achievements</p>
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-3">GitHub Username *</label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
            placeholder="your-github"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-3">LinkedIn Username *</label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
            placeholder="your-linkedin"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-3">Instagram</label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
            placeholder="your-instagram"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-3">Email Address *</label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
            placeholder="your@email.com"
          />
        </div>
      </div>
    </div>
  )
}
