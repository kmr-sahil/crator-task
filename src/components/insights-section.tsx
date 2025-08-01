import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Users, Globe, TrendingUp } from "lucide-react"
import { DUMMY_REEL_DATA } from "@/constants/dummy-data"

export const InsightsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Advanced Insights</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Optimal Posting Times</CardTitle>
            <CardDescription>Best times to post for maximum engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="font-medium">{DUMMY_REEL_DATA.insights.bestTimeToPost}</p>
                  <p className="text-sm text-gray-600">Peak engagement window</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium">{DUMMY_REEL_DATA.insights.optimalDays.join(", ")}</p>
                  <p className="text-sm text-gray-600">Best days to post</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Category</CardTitle>
            <CardDescription>Detected content type and virality score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="w-full  px-4 py-2 flex justify-between items-center">
                <p className="text-lg">{DUMMY_REEL_DATA.insights.contentCategory}</p>
                <div className="">
                <div className="text-xl font-bold text-blue-600">{DUMMY_REEL_DATA.insights.viralityScore}/10</div>
                
              </div>
              </Badge>

              <Badge variant="secondary" className="w-full  px-4 py-2 flex justify-between items-center">
                <p className="text-lg">Education</p>
                <div className="">
                <div className="text-xl font-bold text-blue-600">7.8/10</div>
                
              </div>
              </Badge>
             
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Similar Creators</CardTitle>
            <CardDescription>Creators with similar content and audience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {DUMMY_REEL_DATA.insights.similarCreators.map((creator, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="font-medium">@{creator.username}</span>
                  <Badge variant="outline" className="p-2">{(creator.similarity * 100).toFixed(0)}% similar</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Audience Demographics</CardTitle>
            <CardDescription>Your audience breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">

              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <Users className="h-4 w-4 mr-2 text-green-500" />
                  Age Groups
                </h4>
                <div className="space-y-2">
                  {DUMMY_REEL_DATA.insights.audienceInsights.ageGroups.map((group, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="whitespace-nowrap w-[3rem]">{group.range}</span>
                      <span className="w-full bg-gray-100 h-2 rounded-full mx-2">
                        <span
                          className="block h-2 bg-green-500 rounded-full"
                          style={{ width: `${group.percentage}%` }}
                        ></span>
                      </span>
                      <span className="font-medium w-[3rem]">{group.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
})

InsightsSection.displayName = "InsightsSection"
