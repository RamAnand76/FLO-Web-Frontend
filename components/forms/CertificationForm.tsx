import { FiTrash, FiPlus, FiAward } from 'react-icons/fi';

export default function CertificationForm() {
  return (
    <div className="card p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
            <FiAward className="text-xl text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
            <p className="text-gray-600 text-sm">Showcase your professional certifications</p>
          </div>
        </div>
        <button className="btn-secondary flex items-center space-x-2">
          <FiPlus className="w-4 h-4" />
          <span>Add Certification</span>
        </button>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
            Active Certification
          </span>
          <button className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors duration-200">
            <FiTrash className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Certification Name *</label>
            <input className="input" placeholder="e.g., AWS Solutions Architect" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Issuing Organization *</label>
            <input className="input" placeholder="e.g., Amazon Web Services" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Issue Date</label>
            <input className="input" type="date" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Expiry Date</label>
            <input className="input" type="date" placeholder="Leave empty if no expiry" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">Credential URL</label>
            <input className="input" placeholder="https://credential-url.com" type="url" />
          </div>
        </div>
      </div>
    </div>
  );
}