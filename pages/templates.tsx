import Navigation from '../components/Navigation';
import TemplateCard from '../components/TemplateCard';
import { FiUpload, FiPlus, FiStar, FiTrendingUp, FiZap } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function TemplatesPage() {
  const router = useRouter();

  const templates = [
    { id: 1, name: 'Minimalist Pro', category: 'Professional', featured: true },
    { id: 2, name: 'Creative Studio', category: 'Creative', featured: true },
    { id: 3, name: 'Tech Developer', category: 'Technical', featured: false },
    { id: 4, name: 'Designer Portfolio', category: 'Design', featured: false },
    { id: 5, name: 'Modern Business', category: 'Business', featured: false },
    { id: 6, name: 'Photography Pro', category: 'Photography', featured: false },
  ];

  return (
    <div className="page-layout">
      <div className="layout-container">
        <Navigation />

        <div className="welcome-section spacing-section">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="welcome-content">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Choose Your Perfect Template</h2>
              <p className="text-blue-100 text-base md:text-lg font-medium">
                Handcrafted designs to showcase your work beautifully
              </p>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
              <FiStar className="text-yellow-300" />
              <span className="text-sm font-semibold text-white">{templates.length} Premium Templates</span>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="spacing-section">
          <div className="section-header">
            <h3 className="section-title">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-premium p-6 md:p-8 group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                  <FiPlus className="text-xl text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Template Creation</p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Create Your Own</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Start with a blank canvas and build a unique portfolio that reflects your personal style and creativity.
              </p>
              <button
                onClick={() => router.push('/profile')}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <span>Start Creating</span>
                <FiZap className="w-4 h-4" />
              </button>
            </div>

            <div className="card-premium p-6 md:p-8 group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
                  <FiUpload className="text-xl text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Import Option</p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Import Template</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Upload your existing design or import from external sources to get started quickly with your portfolio.
              </p>
              <button className="btn-secondary w-full flex items-center justify-center space-x-2">
                <span>Import Now</span>
                <FiUpload className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="spacing-section">
          <div className="section-header">
            <h3 className="section-title">Featured Templates</h3>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg shadow-orange-500/30">
              <FiTrendingUp className="w-4 h-4" />
              <span>Most Popular</span>
            </div>
          </div>
          <div className="template-grid">
            {templates
              .filter((t) => t.featured)
              .map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
          </div>
        </div>

        <div className="spacing-section">
          <div className="section-header">
            <h3 className="section-title">All Templates</h3>
            <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500">
              <option>All Categories</option>
              <option>Professional</option>
              <option>Creative</option>
              <option>Technical</option>
              <option>Business</option>
            </select>
          </div>
          <div className="template-grid">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}