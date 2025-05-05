export default function PortfolioCard({ title, views, likes }: { title: string; views: string; likes: number }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <div className="h-40 bg-gray-200 rounded mb-3 flex items-center justify-center text-sm text-gray-400">400 x 320</div>
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-500">{views}</p>
          </div>
          <span className="text-sm text-gray-500">❤️ {likes}</span>
        </div>
      </div>
    );
  }