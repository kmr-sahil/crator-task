import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Hash } from "lucide-react"
import { DUMMY_REEL_DATA } from "@/constants/dummy-data"

export const HashtagsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Hashtag Analysis</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Used Hashtags</CardTitle>
            <CardDescription>Hashtags used in your reel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {DUMMY_REEL_DATA.hashtags.used.map((hashtag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  <Hash className="h-3 w-3 mr-1" />
                  {hashtag.replace("#", "")}
                </Badge>
              ))}
            </div>
            <h2 className="text-sm text-gray-600 mt-8 mb-4">Potential Hashtags to boost</h2>
            <div className="flex flex-wrap gap-2">
              {DUMMY_REEL_DATA.hashtags.used.map((hashtag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  <Hash className="h-3 w-3 mr-1" />
                  {hashtag.replace("#", "")}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trending Hashtags</CardTitle>
            <CardDescription>Popular hashtags in your niche</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {DUMMY_REEL_DATA.hashtags.trending.map((hashtag, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Hash className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">{hashtag.tag.replace("#", "")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{hashtag.posts}M posts</span>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {hashtag.growth}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
})

HashtagsSection.displayName = "HashtagsSection"
