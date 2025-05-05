export default function EducationForm() {
    return (
      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        <h3 className="font-semibold text-blue-700">🎓 Education</h3>
        <p className="text-sm text-gray-500">Add your educational qualifications in reverse chronological order</p>
        {["Post Graduation", "Graduation"].map((section) => (
          <div key={section}>
            <h4 className="font-semibold mb-2">{section}</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-2">
              <input className="input" placeholder="University name *" />
              <input className="input" placeholder={`e.g., ${section === 'Post Graduation' ? 'Master of Science' : 'Bachelor of Technology'} *`} />
              <input className="input" placeholder="Field of Study *" />
              <input className="input" placeholder="Year of Completion *" />
              <input className="input md:col-span-2" placeholder="Grade/CGPA" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  