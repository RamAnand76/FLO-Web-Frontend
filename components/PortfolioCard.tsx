import { Heart, Eye, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PortfolioCardProps {
  title: string
  views: string
  likes: number
  image: string
  category: string
  lastUpdated: string
}

export default function PortfolioCard({ title, views, likes, image, category, lastUpdated }: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
      {/* Image */}
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3">
          <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="font-semibold text-gray-900 mb-2 text-lg">{title}</h4>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likes}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Updated {lastUpdated}</span>
          <Button variant="outline" size="sm">
            View Project
          </Button>
        </div>
      </div>
    </div>
  )
}
