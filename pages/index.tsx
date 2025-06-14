import Header from "@/components/Header"
import ActionCard from "@/components/ActionCard"
import MetricCard from "@/components/MetricCard"
import PortfolioCard from "@/components/PortfolioCard"
import { Upload, Plus, Code, Coffee, TrendingUp, Eye, MousePointer, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <Header />

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Hello, Designer 👋</h2>
            <p className="text-blue-100 text-lg">Welcome to your creative workspace</p>
            <p className="text-blue-200 text-sm mt-1">Ready to create something amazing today?</p>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-6 py-3 text-lg shadow-md">
            <Plus className="w-5 h-5 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ActionCard
            icon={<Upload className="w-6 h-6" />}
            label="Upload Files"
            description="Import your designs"
            color="blue"
          />
          <ActionCard
            icon={<Plus className="w-6 h-6" />}
            label="Create New"
            description="Start from scratch"
            color="green"
          />
          <ActionCard
            icon={<Code className="w-6 h-6" />}
            label="Code Editor"
            description="Write custom code"
            color="purple"
          />
          <ActionCard
            icon={<Coffee className="w-6 h-6" />}
            label="Take Break"
            description="Relax and recharge"
            color="orange"
          />
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Analytics Overview</h3>
          <span className="text-sm text-gray-500">Last 30 days</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            icon={<Eye className="w-5 h-5" />}
            label="Total Views"
            value="1,892"
            change="+9%"
            trend="up"
            color="blue"
          />
          <MetricCard
            icon={<MousePointer className="w-5 h-5" />}
            label="Engagement"
            value="23.5%"
            change="+4%"
            trend="up"
            color="green"
          />
          <MetricCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="Conversions"
            value="842"
            change="+12%"
            trend="up"
            color="purple"
          />
          <MetricCard
            icon={<DollarSign className="w-5 h-5" />}
            label="Revenue"
            value="$12,450"
            change="+7%"
            trend="up"
            color="emerald"
          />
        </div>
      </div>

      {/* Portfolio Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Your Portfolios</h3>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <PortfolioCard
            title="Modern UI Kit"
            views="5.2K Views"
            likes={124}
            image="/placeholder.svg?height=200&width=300"
            category="UI Design"
            lastUpdated="2 days ago"
          />
          <PortfolioCard
            title="E-commerce Template"
            views="2.8K Views"
            likes={98}
            image="/placeholder.svg?height=200&width=300"
            category="Web Design"
            lastUpdated="1 week ago"
          />
          <PortfolioCard
            title="Dashboard System"
            views="3.1K Views"
            likes={213}
            image="/placeholder.svg?height=200&width=300"
            category="Dashboard"
            lastUpdated="3 days ago"
          />
          <PortfolioCard
            title="Finance App UI"
            views="1.7K Views"
            likes={76}
            image="/placeholder.svg?height=200&width=300"
            category="Mobile App"
            lastUpdated="5 days ago"
          />
          <PortfolioCard
            title="Social Media Kit"
            views="4.3K Views"
            likes={156}
            image="/placeholder.svg?height=200&width=300"
            category="Social Media"
            lastUpdated="1 day ago"
          />
          <PortfolioCard
            title="Brand Identity"
            views="2.1K Views"
            likes={89}
            image="/placeholder.svg?height=200&width=300"
            category="Branding"
            lastUpdated="4 days ago"
          />
        </div>
      </div>
    </div>
  )
}
