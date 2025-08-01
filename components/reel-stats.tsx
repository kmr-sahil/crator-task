import { Card, CardContent } from "@/components/ui/card"
import { Eye, Heart, MessageCircle, Share2, TrendingUp, Zap, Target, Globe } from "lucide-react"
import { DUMMY_REEL_DATA } from "@/constants/dummy-data"

export function ReelStats() {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex items-start space-x-6">
          {/* Reel Thumbnail */}
          <div className="flex-shrink-0">
            <div className="w-32 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="text-white text-center z-10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                </div>
                <p className="text-xs opacity-80">{DUMMY_REEL_DATA.performance.duration}s</p>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Reel</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Eye className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{formatNumber(DUMMY_REEL_DATA.performance.views)}</div>
              <div className="text-sm text-blue-700">Views</div>
            </div>

            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{formatNumber(DUMMY_REEL_DATA.performance.likes)}</div>
              <div className="text-sm text-red-700">Likes</div>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-lg">
              <MessageCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">
                {formatNumber(DUMMY_REEL_DATA.performance.comments)}
              </div>
              <div className="text-sm text-green-700">Comments</div>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Share2 className="h-6 w-6 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">
                {formatNumber(DUMMY_REEL_DATA.performance.shares)}
              </div>
              <div className="text-sm text-purple-700">Shares</div>
            </div>

            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">{DUMMY_REEL_DATA.performance.engagementRate}%</div>
              <div className="text-sm text-orange-700">Engagement</div>
            </div>

            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Zap className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-600">{DUMMY_REEL_DATA.insights.viralityScore}/10</div>
              <div className="text-sm text-yellow-700">Virality</div>
            </div>

            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <Target className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">
                {formatNumber(DUMMY_REEL_DATA.performance.saves)}
              </div>
              <div className="text-sm text-indigo-700">Saves</div>
            </div>

            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <Globe className="h-6 w-6 text-pink-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-pink-600">{formatNumber(DUMMY_REEL_DATA.performance.reach)}</div>
              <div className="text-sm text-pink-700">Reach</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
