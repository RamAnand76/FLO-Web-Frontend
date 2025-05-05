import Header from '../components/Header';
import ProfileForm from '../forms/ProfileForm';
import EducationForm from '../forms/EducationForm';
import ExperienceForm from '../forms/ExperienceForm';
import CertificationForm from '../forms/CertificationForm';
import { FiFile } from 'react-icons/fi';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-6 py-8 space-y-10">
      <Header />
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Profile Builder</h2>
        <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full">⭐ Premium Active</span>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="flex items-center gap-2 font-semibold text-blue-700">
          <FiFile /> Resume Parser <span className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Premium Feature</span>
        </h3>
        <div className="border-dashed border-2 border-gray-300 mt-4 p-4 rounded text-center">
          <input type="file" id="resume" className="hidden" />
          <label htmlFor="resume" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Choose file</label>
          <p className="text-sm text-gray-500 mt-2">Upload your resume (PDF, DOC, DOCX)</p>
        </div>
      </div>
      <ProfileForm />
      <EducationForm />
      <ExperienceForm />
      <CertificationForm />
    </div>
  );
}