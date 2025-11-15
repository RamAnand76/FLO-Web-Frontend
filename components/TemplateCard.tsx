import { FiStar, FiEye, FiHeart } from 'react-icons/fi';
import { useState } from 'react';

interface Template {
  id: number;
  name: string;
  category: string;
  featured: boolean;
}

export default function TemplateCard({ template }: { template?: Template }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center transform transition-all duration-300 group-hover:scale-110">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 mx-auto group-hover:shadow-2xl transition-shadow duration-300">
              <span className="text-4xl">🎨</span>
            </div>
            <p className="text-sm font-semibold text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
              {template?.name || 'Template Preview'}
            </p>
          </div>
        </div>

        {template?.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg animate-pulse-subtle">
            <FiStar className="w-3 h-3" />
            <span>Featured</span>
          </div>
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <FiEye className="w-4 h-4" />
                <span className="text-sm font-medium">2.4k</span>
              </div>
              <div className="flex items-center space-x-1">
                <FiHeart className="w-4 h-4" />
                <span className="text-sm font-medium">342</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-200">
            Use Template
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
            {template?.name || 'Premium Template'}
          </h4>
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
            {template?.category || 'Design'}
          </span>
        </div>
        <p className="text-sm text-gray-600">
          Professional portfolio template with modern design
        </p>
      </div>
    </div>
  );
}