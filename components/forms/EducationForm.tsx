export default function EducationForm() {
  return (
    <div className="card p-8 space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
          <span className="text-xl">🎓</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Education</h3>
          <p className="text-gray-600 text-sm">Add your educational qualifications in reverse chronological order</p>
        </div>
      </div>
      
      {["Post Graduation", "Graduation"].map((section, index) => (
        <div key={section} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">{section}</h4>
            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
              {index === 0 ? 'Latest' : 'Previous'}
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">University Name *</label>
              <input className="input" placeholder="Enter university name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Degree *</label>
              <input className="input" placeholder={`e.g., ${section === 'Post Graduation' ? 'Master of Science' : 'Bachelor of Technology'}`} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Field of Study *</label>
              <input className="input" placeholder="e.g., Computer Science" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Year of Completion *</label>
              <input className="input" placeholder="e.g., 2023" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">Grade/CGPA</label>
              <input className="input" placeholder="e.g., 8.5/10 or 3.8/4.0" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}