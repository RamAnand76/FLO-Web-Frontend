import Header from '../components/Header';
import ActionCard from '../components/ActionCard';
import MetricCard from '../components/MetricCard';
import PortfolioCard from '../components/PortfolioCard';
import { FiUpload, FiPlus, FiCode, FiCoffee, FiTrendingUp, FiUsers, FiDollarSign, FiEye } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-8 max-w-7xl mx-auto">
      <Header />
      
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 rounded-3xl shadow-xl mb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex justify-between items-center text-white">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back, Designer! 👋</h2>
            <p className="text-blue-100 text-lg font-medium">Ready to create something amazing today?</p>
          </div>
          <button 
            onClick={() => router.push('/templates')} 
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 font-semibold border border-white/20 hover:scale-105"
          >
            Start New Project ✨
          </button>
        </div>
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      {/* Quick Actions */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></span>
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ActionCard icon={<FiUpload />} label="Upload Assets" onClick={() => router.push('/templates')} />
          <ActionCard icon={<FiPlus />} label="New Project" onClick={() => router.push('/templates')} />
          <ActionCard icon={<FiCode />} label="Code Editor" />
          <ActionCard icon={<FiCoffee />} label="Take a Break" />
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3"></span>
            Analytics Overview
          </h3>
          <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard label="Total Views" value="12,847" change="+23%" />
          <MetricCard label="Engagement Rate" value="8.4%" change="+12%" />
          <MetricCard label="New Followers" value="1,284" change="+18%" />
          <MetricCard label="Revenue" value="$4,250" change="+31%" />
        </div>
      </div>

      {/* Portfolio Showcase */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></span>
            Your Portfolio Showcase
          </h3>
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline transition-all duration-200">
            View All Projects →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PortfolioCard title="Modern UI Kit" views="8.2K Views" likes={342} />
          <PortfolioCard title="E-commerce Platform" views="5.7K Views" likes={198} />
          <PortfolioCard title="Dashboard Analytics" views="4.1K Views" likes={156} />
          <PortfolioCard title="Mobile App Design" views="3.8K Views" likes={124} />
          <PortfolioCard title="Brand Identity" views="2.9K Views" likes={89} />
          <PortfolioCard title="Web3 Interface" views="2.1K Views" likes={67} />
        </div>
      </div>
    </div>
  );
}