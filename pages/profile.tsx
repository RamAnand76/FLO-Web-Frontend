import Header from '../components/Header';
import ProfileForm from '../components/forms/ProfileForm';
import EducationForm from '../components/forms/EducationForm';
import ExperienceForm from '../components/forms/ExperienceForm';
import CertificationForm from '../components/forms/CertificationForm';
import { FiFile, FiSave, FiEye, FiDownload, FiUpload } from 'react-icons/fi';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-8 max-w-6xl mx-auto">
      <Header />
      
      {/* Page Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Profile Builder</h2>
          <p className="text-gray-600">Create a comprehensive professional profile</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-semibold text-sm">
            <span>👑</span>
            <span>Premium Active</span>
          </div>
          <button className="btn-secondary flex items-center space-x-2">
            <FiEye className="w-4 h-4" />
            <span>Preview</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <FiSave className="w-4 h-4" />
            <span>Save Profile</span>
          </button>
        </div>
      </div>

      {/* Resume Parser Section */}
      <div className="card-premium p-8 mb-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <FiFile className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                AI Resume Parser
                <span className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-semibold">
                  Premium Feature
                </span>
              </h3>
              <p className="text-gray-600">Automatically extract information from your resume</p>
            </div>
          </div>
          <FiDownload className="text-gray-400 text-xl" />
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-gray-50/50 hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300">
          <input type="file" id="resume" className="hidden" />
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
            <FiUpload className="text-2xl text-gray-400" />
          </div>
          <label htmlFor="resume" className="btn-primary cursor-pointer inline-flex items-center space-x-2">
            <span>Choose Resume File</span>
          </label>
          <p className="text-sm text-gray-500 mt-4">
            Supports PDF, DOC, DOCX files up to 10MB
          </p>
        </div>
      </div>

      {/* Form Sections */}
      <div className="space-y-8">
        <ProfileForm />
        <EducationForm />
        <ExperienceForm />
        <CertificationForm />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-12 pt-8 border-t border-gray-200">
        <button className="btn-secondary">
          Save as Draft
        </button>
        <button className="btn-primary">
          Publish Profile
        </button>
      </div>
    </div>
  );
}