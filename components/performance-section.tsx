import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  ComposedChart,
  BarChart,
  Bar,
} from "recharts"
import {
  ENGAGEMENT_CHART_DATA,
  LIKES_OVER_TIME_DATA,
  FOLLOWER_GROWTH_DATA,
  COMMENTS_ANALYSIS_DATA,
  SHARES_SAVES_DATA,
  ENGAGEMENT_RATE_DATA,
  AUDIENCE_ACTIVITY_DATA,
} from "@/constants/dummy-data"

export const PerformanceSection = forwardRef<HTMLDivElement>((ref) => {
  return (
    <div ref={ref} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Performance Analytics</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Over Time</CardTitle>
            <CardDescription>Views, likes, and comments throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ENGAGEMENT_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} name="Views" />
                <Line type="monotone" dataKey="likes" stroke="#ef4444" strokeWidth={2} name="Likes" />
                <Line type="monotone" dataKey="comments" stroke="#22c55e" strokeWidth={2} name="Comments" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Likes Growth</CardTitle>
            <CardDescription>How likes accumulated over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={LIKES_OVER_TIME_DATA}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="likes" stroke="#ef4444" fill="#ef444420" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Follower Growth</CardTitle>
            <CardDescription>New followers gained after posting</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={FOLLOWER_GROWTH_DATA}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="right" dataKey="newFollowers" fill="#8b5cf6" name="New Followers" />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="followers"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Total Followers"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comments & Replies</CardTitle>
            <CardDescription>Comment engagement throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={COMMENTS_ANALYSIS_DATA}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="comments" fill="#22c55e" name="Comments" />
                <Bar dataKey="replies" fill="#16a34a" name="Replies" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shares & Saves</CardTitle>
            <CardDescription>How users interacted with your content</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={SHARES_SAVES_DATA}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="shares" stroke="#8b5cf6" strokeWidth={2} name="Shares" />
                <Line type="monotone" dataKey="saves" stroke="#f59e0b" strokeWidth={2} name="Saves" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Rate</CardTitle>
            <CardDescription>Engagement percentage over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={ENGAGEMENT_RATE_DATA}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, "Engagement Rate"]} />
                <Area type="monotone" dataKey="rate" stroke="#f59e0b" fill="#f59e0b20" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Audience Activity</CardTitle>
          <CardDescription>When your audience is most active (24-hour view)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={AUDIENCE_ACTIVITY_DATA}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, "Activity"]} />
              <Bar dataKey="activity" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
})

PerformanceSection.displayName = "PerformanceSection"
