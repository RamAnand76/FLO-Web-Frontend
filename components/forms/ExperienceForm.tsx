import { FiTrash, FiPlus } from 'react-icons/fi';

export default function ExperienceForm() {
  return (
    <div className="card p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">💼</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Work Experience</h3>
            <p className="text-gray-600 text-sm">Add your professional experience</p>
          </div>
        </div>
        <button className="btn-secondary flex items-center space-x-2">
          <FiPlus className="w-4 h-4" />
          <span>Add Experience</span>
        </button>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">
            Current Position
          </span>
          <button className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors duration-200">
            <FiTrash className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Company Name *</label>
            <input className="input" placeholder="e.g., Google Inc." />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Position *</label>
            <input className="input" placeholder="e.g., Senior Software Engineer" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Start Date *</label>
            <input className="input" type="date" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">End Date</label>
            <input className="input" type="date" placeholder="Leave empty if current" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">Job Description & Achievements *</label>
            <textarea 
              className="input min-h-32 resize-none" 
              placeholder="Describe your role, responsibilities, and key achievements. Use bullet points for better readability..."
              rows={4}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}