import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Clock, Target, Globe } from "lucide-react"
import { DUMMY_REEL_DATA } from "@/constants/dummy-data"

export const InsightsSection = forwardRef<HTMLDivElement>((ref) => {
  return (
    <div ref={ref} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Advanced Insights</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Optimal Posting Times</CardTitle>
            <CardDescription>Best times to post for maximum engagement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="font-medium">Best Time</span>
              </div>
              <p className="text-lg font-bold text-blue-600">{DUMMY_REEL_DATA.insights.bestTimeToPost}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Optimal Days</h4>
              <div className="flex flex-wrap gap-2">
                {DUMMY_REEL_DATA.insights.optimalDays.map((day, index) => (
                  <Badge key={index} variant="secondary">
                    {day}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="h-4 w-4 text-purple-600" />
                <span className="font-medium">Content Category</span>
              </div>
              <p className="text-purple-600 font-medium">{DUMMY_REEL_DATA.insights.contentCategory}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Similar Creators</CardTitle>
            <CardDescription>Creators with similar content and audience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {DUMMY_REEL_DATA.insights.similarCreators.map((creator, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{creator.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">@{creator.username}</span>
                </div>
                <Badge variant="secondary">{(creator.similarity * 100).toFixed(0)}% match</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Audience Demographics</CardTitle>
            <CardDescription>Who's engaging with your content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-3">Top Countries</h4>
                <div className="space-y-2">
                  {DUMMY_REEL_DATA.insights.audienceInsights.topCountries.map((country, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{country}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Age Groups</h4>
                <div className="space-y-2">
                  {DUMMY_REEL_DATA.insights.audienceInsights.ageGroups.map((group, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{group.range}</span>
                        <span>{group.percentage}%</span>
                      </div>
                      <Progress value={group.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Gender Split</h4>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Male</span>
                      <span>{DUMMY_REEL_DATA.insights.audienceInsights.gender.male}%</span>
                    </div>
                    <Progress value={DUMMY_REEL_DATA.insights.audienceInsights.gender.male} className="h-2" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Female</span>
                      <span>{DUMMY_REEL_DATA.insights.audienceInsights.gender.female}%</span>
                    </div>
                    <Progress value={DUMMY_REEL_DATA.insights.audienceInsights.gender.female} className="h-2" />
                  </div>
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
