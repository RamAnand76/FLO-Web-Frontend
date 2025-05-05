import Header from '../components/Header';
import ActionCard from '../components/ActionCard';
import MetricCard from '../components/MetricCard';
import PortfolioCard from '../components/PortfolioCard';
import { FiUpload, FiPlus, FiCode, FiCoffee } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-6 py-8">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-semibold">Hello, Designer</h2>
          <p className="text-gray-500">Welcome to your creative workspace</p>
        </div>
        <button onClick={() => router.push('/templates')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">New Project</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <ActionCard icon={<FiUpload />} label="Upload" onClick={() => router.push('/templates')} />
        <ActionCard icon={<FiPlus />} label="New" onClick={() => router.push('/templates')} />
        <ActionCard icon={<FiCode />} label="Code" />
        <ActionCard icon={<FiCoffee />} label="Break" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <MetricCard label="Total Views" value="1,892" change="+9%" />
        <MetricCard label="Engagement" value="23.5%" change="+4%" />
        <MetricCard label="Conversions" value="842" change="+12%" />
        <MetricCard label="Revenue" value="$12,450" change="+7%" />
      </div>
      <h3 className="text-lg font-semibold mb-4">Your Portfolios</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PortfolioCard title="Modern UI Kit" views="5.2K Views" likes={124} />
        <PortfolioCard title="E-commerce Template" views="2.8K Views" likes={98} />
        <PortfolioCard title="Dashboard System" views="3.1K Views" likes={213} />
        <PortfolioCard title="Finance App UI" views="1.7K Views" likes={76} />
      </div>
    </div>
  );
}