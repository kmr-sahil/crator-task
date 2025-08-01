import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DUMMY_REEL_DATA } from "@/constants/dummy-data"

export const HashtagsSection = forwardRef<HTMLDivElement>((ref) => {
  return (
    <div ref={ref} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Hashtag Analysis</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hashtags Used</CardTitle>
            <CardDescription>Hashtags in your reel caption</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {DUMMY_REEL_DATA.hashtags.used.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-blue-600 border-blue-200">
                  {tag}
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
          <CardContent className="space-y-3">
            {DUMMY_REEL_DATA.hashtags.trending.map((tag, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <span className="font-medium text-blue-600">{tag.tag}</span>
                  <p className="text-sm text-muted-foreground">{tag.posts}M posts</p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {tag.growth}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
})

HashtagsSection.displayName = "HashtagsSection"
