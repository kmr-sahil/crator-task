import { forwardRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Smile, Meh, Frown } from "lucide-react";
import { DUMMY_REEL_DATA, SENTIMENT_CHART_DATA } from "@/constants/dummy-data";

const SentimentStat = ({ icon: Icon, label, value, color }: any) => (
  <div className="w-full">
    <div className="flex items-center justify-between mb-1">
      <div className="flex items-center gap-2 text-sm">
        <Icon className="w-4 h-4" style={{ color }} />
        <span>{label}</span>
      </div>
      <span className="text-sm font-medium text-gray-700">{value}%</span>
    </div>
    <div className="w-full h-2 bg-gray-200 rounded-md overflow-hidden">
      <div
        className="h-full"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

export const SentimentSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Sentiment Analysis</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Combined Overall + Caption Sentiment */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Sentiment</CardTitle>
            <CardDescription>
              Breakdown of all comments and caption sentiment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Combined Pie Chart and Sentiment Stats */}
            <div className="flex items-center gap-6">
              {/* Pie chart */}
              <div className="w-[180px] h-[180px] rounded-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={SENTIMENT_CHART_DATA}
                      innerRadius={50}
                      outerRadius={65}
                      paddingAngle={4}
                      dataKey="count"
                    >
                      {SENTIMENT_CHART_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Sentiment breakdown with progress bars */}
              <div className="flex flex-col gap-4 w-full">
                <SentimentStat
                  icon={Smile}
                  label="Positive"
                  value={DUMMY_REEL_DATA.sentiment.comments.positive}
                  color="#0FBA83"
                />
                <SentimentStat
                  icon={Meh}
                  label="Neutral"
                  value={DUMMY_REEL_DATA.sentiment.comments.neutral}
                  color="#C7C8CE"
                />
                <SentimentStat
                  icon={Frown}
                  label="Negative"
                  value={DUMMY_REEL_DATA.sentiment.comments.negative}
                  color="#F7324C"
                />
              </div>
            </div>

            {/* Caption sentiment */}
            <div className="pt-4 border-t space-y-4">
              <div className="flex w-full justify-between items-start">
                <p className="text-muted-foreground text-sm pl-2">
                  Caption Sentiment Analysis
                </p>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  {(DUMMY_REEL_DATA.sentiment.caption.score * 100).toFixed(0)}% { ""}
                  {DUMMY_REEL_DATA.sentiment.caption.label}
                </Badge>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 italic">
                  "{DUMMY_REEL_DATA.sentiment.caption.text}"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Combined Positive + Improvement comments */}
        <Card>
          <CardHeader>
            <CardTitle>Top Feedback</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Positive Comments */}
            <div>
              <h4 className="font-medium text-sm text-green-700 mb-2">
                Positive Feedback
              </h4>
              <div className="space-y-3">
                {DUMMY_REEL_DATA.sentiment.comments.topPositive.map(
                  (comment, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg"
                    >
                      <Smile className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm text-gray-700">{comment}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Improvement Comments */}
            <div className="pt-4 border-t">
              <h4 className="font-medium text-sm text-orange-700 mb-2">
                Areas for Improvement
              </h4>
              <div className="space-y-3">
                {DUMMY_REEL_DATA.sentiment.comments.topNegative.map(
                  (comment, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg"
                    >
                      <Frown className="h-4 w-4 text-orange-500 mt-0.5" />
                      <p className="text-sm text-gray-700">{comment}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

SentimentSection.displayName = "SentimentSection";
