import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { XAxis, ResponsiveContainer, AreaChart, Area, ComposedChart, BarChart, Bar } from "recharts"
import {
  ENGAGEMENT_CHART_DATA,
  LIKES_OVER_TIME_DATA,
  FOLLOWER_GROWTH_DATA,
  COMMENTS_ANALYSIS_DATA,
  SHARES_SAVES_DATA,
  ENGAGEMENT_RATE_DATA,
  AUDIENCE_ACTIVITY_DATA,
} from "@/constants/dummy-data"

export const PerformanceSection = forwardRef<HTMLDivElement>((props, ref) => {
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
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={ENGAGEMENT_CHART_DATA}>
                <defs>
                  <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="likesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="commentsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#viewsGradient)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="likes"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#likesGradient)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="comments"
                  stroke="#22c55e"
                  fillOpacity={1}
                  fill="url(#commentsGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">Trending up by 12.3% this week</span>
              </div>
              <span className="text-xs text-muted-foreground">January - June 2024</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Likes Growth</CardTitle>
            <CardDescription>How likes accumulated over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={LIKES_OVER_TIME_DATA}>
                <defs>
                  <linearGradient id="likesGrowthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
                <Area
                  type="monotone"
                  dataKey="likes"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#likesGrowthGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">Trending up by 8.7% this week</span>
              </div>
              <span className="text-xs text-muted-foreground">Last 24 hours</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Follower Growth</CardTitle>
            <CardDescription>New followers gained after posting</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart data={FOLLOWER_GROWTH_DATA}>
                <defs>
                  <linearGradient id="followersGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
                <Bar dataKey="newFollowers" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
                <Area
                  type="monotone"
                  dataKey="followers"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#followersGradient)"
                  strokeWidth={2}
                />
              </ComposedChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-red-600">
                <TrendingDown className="h-4 w-4" />
                <span className="font-medium">Down by 5.5% unfollow in 1 week</span>
              </div>
              <span className="text-xs text-muted-foreground">Last 7 days</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comments & Replies</CardTitle>
            <CardDescription>Comment engagement throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={COMMENTS_ANALYSIS_DATA}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
                <Bar dataKey="comments" fill="#22c55e" radius={[2, 2, 0, 0]} />
                <Bar dataKey="replies" fill="#16a34a" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">Trending up by 15.2% this week</span>
              </div>
              <span className="text-xs text-muted-foreground">Last 24 hours</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shares & Saves</CardTitle>
            <CardDescription>How users interacted with your content</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={SHARES_SAVES_DATA}>
                <defs>
                  <linearGradient id="sharesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="savesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
                <Area
                  type="monotone"
                  dataKey="shares"
                  stroke="#8b5cf6"
                  fillOpacity={1}
                  fill="url(#sharesGradient)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="saves"
                  stroke="#f59e0b"
                  fillOpacity={1}
                  fill="url(#savesGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">Trending up by 9.4% this week</span>
              </div>
              <span className="text-xs text-muted-foreground">Last 24 hours</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Rate</CardTitle>
            <CardDescription>Engagement percentage over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={ENGAGEMENT_RATE_DATA}>
                <defs>
                  <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
                <Area
                  type="monotone"
                  dataKey="rate"
                  stroke="#f59e0b"
                  fillOpacity={1}
                  fill="url(#engagementGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">Trending up by 3.2% this week</span>
              </div>
              <span className="text-xs text-muted-foreground">Last 24 hours</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Audience Activity</CardTitle>
          <CardDescription>When your audience is most active (24-hour view)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={AUDIENCE_ACTIVITY_DATA}>
              <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
              <Bar dataKey="activity" fill="#6366f1" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-green-600">
              <TrendingUp className="h-4 w-4" />
              <span className="font-medium">Peak activity at 4:00 PM - 6:00 PM</span>
            </div>
            <span className="text-xs text-muted-foreground">Last 24 hours</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
})

PerformanceSection.displayName = "PerformanceSection"
