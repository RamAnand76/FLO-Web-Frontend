import { FiHeart } from 'react-icons/fi';

export default function PortfolioCard({ title, views, likes }: { title: string; views: string; likes: number }) {
  return (
    <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-500/15 transition-all duration-300 cursor-pointer animate-scale-in hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-sm text-gray-400 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-2 mx-auto group-hover:shadow-md transition-all duration-300 animate-float">
              <span className="text-2xl">🎨</span>
            </div>
            <span className="text-xs font-medium">Preview</span>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-gray-600">
          <span className="relative flex h-2 w-2 mr-1 inline-block">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Live
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-sm text-gray-500 font-medium">{views}</p>
        </div>
        <div className="flex items-center space-x-1 bg-gray-50 px-3 py-1 rounded-full group-hover:bg-red-50 transition-colors duration-300">
          <FiHeart className="w-4 h-4 text-red-500 group-hover:fill-red-500 transition-all duration-300" />
          <span className="text-sm font-semibold text-gray-700">{likes}</span>
        </div>
      </div>
    </div>
  );
}