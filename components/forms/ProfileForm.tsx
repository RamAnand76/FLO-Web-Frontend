export default function ProfileForm() {
  return (
    <div className="card p-8 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
          <span className="text-xl">👤</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Professional Summary</h3>
          <p className="text-gray-600 text-sm">Tell your professional story</p>
        </div>
      </div>
      
      <textarea
        className="input min-h-32 resize-none"
        placeholder="Write a compelling professional summary that highlights your key strengths, achievements, and career goals. This will be the first thing visitors see on your profile..."
      ></textarea>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">GitHub Username *</label>
          <input className="input" placeholder="your-github-username" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">LinkedIn Username *</label>
          <input className="input" placeholder="your-linkedin-profile" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Instagram</label>
          <input className="input" placeholder="@your-instagram" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Email Address *</label>
          <input className="input" placeholder="your.email@example.com" type="email" />
        </div>
      </div>
    </div>
  );
}