import { FiTrash } from 'react-icons/fi';
export default function ExperienceForm() {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-blue-700">📦 Experience</h3>
        <button className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">+ Add Experience</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input className="input" placeholder="Company Name" />
        <input className="input" placeholder="Position" />
        <textarea className="input md:col-span-2" placeholder="Job Description and Achievements..." rows={4}></textarea>
      </div>
      <button className="text-red-500 hover:underline flex items-center gap-1 text-sm">
        <FiTrash /> Delete
      </button>
    </div>
  );
}