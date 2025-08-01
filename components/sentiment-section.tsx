import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"
import { DUMMY_REEL_DATA, SENTIMENT_CHART_DATA } from "@/constants/dummy-data"

export const SentimentSection = forwardRef<HTMLDivElement>((ref) => {
  return (
    <div ref={ref} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Sentiment Analysis</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall Sentiment Analysis</CardTitle>
            <CardDescription>Sentiment breakdown of comments and caption</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {DUMMY_REEL_DATA.sentiment.overall.score * 100}%
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {DUMMY_REEL_DATA.sentiment.overall.label}
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={SENTIMENT_CHART_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="count"
                  >
                    {SENTIMENT_CHART_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Caption Sentiment</CardTitle>
            <CardDescription>Analysis of your reel caption</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-800">Very Positive</span>
                <Badge variant="secondary">{(DUMMY_REEL_DATA.sentiment.caption.score * 100).toFixed(0)}%</Badge>
              </div>
              <p className="text-sm text-gray-700">{DUMMY_REEL_DATA.sentiment.caption.text}</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Top Positive Comments</h4>
              {DUMMY_REEL_DATA.sentiment.comments.topPositive.map((comment, index) => (
                <div key={index} className="p-3 bg-green-50 rounded-lg text-sm">
                  "{comment}"
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
})

SentimentSection.displayName = "SentimentSection"
