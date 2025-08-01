import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Eye,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Zap,
  Target,
  Globe,
  SquareArrowOutUpRight,
  AudioLines,
} from "lucide-react";
import { DUMMY_REEL_DATA } from "@/constants/dummy-data";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function formatNumber(num: number) {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

function formatTimeAgo(timestamp: string) {
  const now = new Date();
  const then = new Date(timestamp);
  const diff = Math.floor((now.getTime() - then.getTime()) / 1000 / 60); // minutes

  if (diff < 1) return "just now";
  if (diff < 60) return `${diff} min ago`;
  const hours = Math.floor(diff / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

export function ReelStats() {
  return (
    <Card>
      <CardContent className="px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Reel preview */}
          <div className="w-full lg:w-[18rem] flex-shrink-0">
            <div className="w-full aspect-[9/16] bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="text-white text-center z-10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                </div>
                <p className="text-xs opacity-80">
                  {DUMMY_REEL_DATA.performance.duration}s
                </p>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 rounded flex items-center gap-1 cursor-pointer">
                Reel <SquareArrowOutUpRight className="w-3 text-gray-200" />
              </div>
            </div>
          </div>

          {/* Center section */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-2 max-w-[80%]">
              <span className="text-sm bg-gray-200/60 text-gray-500 rounded-md whitespace-nowrap inline-flex items-center gap-2 px-3 py-1.5 w-fit">
                <AudioLines className="w-4 h-4 text-gray-600" />
                {DUMMY_REEL_DATA.performance.audio}
              </span>
              <p className="text-gray-800 mt-2">{DUMMY_REEL_DATA.performance.caption}</p>
            </div>

            {/* Stats - Hardcoded */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md font-medium bg-blue-50 text-blue-700">
                <Eye className="w-5 h-5 text-blue-500" />
                <span>{formatNumber(DUMMY_REEL_DATA.performance.views)}</span>
                <span>Views</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md font-medium bg-red-50 text-red-700">
                <Heart className="w-5 h-5 text-red-500" />
                <span>{formatNumber(DUMMY_REEL_DATA.performance.likes)}</span>
                <span>Likes</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md font-medium bg-green-50 text-green-700">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span>{formatNumber(DUMMY_REEL_DATA.performance.comments)}</span>
                <span>Comments</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md font-medium bg-purple-50 text-purple-700">
                <Share2 className="w-5 h-5 text-purple-500" />
                <span>{formatNumber(DUMMY_REEL_DATA.performance.shares)}</span>
                <span>Shares</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md font-medium bg-orange-50 text-orange-700">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                <span>{DUMMY_REEL_DATA.performance.engagementRate}%</span>
                <span>Engagement</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md font-medium bg-yellow-50 text-yellow-700">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>{DUMMY_REEL_DATA.insights.viralityScore}/10</span>
                <span>Virality</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md font-medium bg-indigo-50 text-indigo-700">
                <Target className="w-5 h-5 text-indigo-500" />
                <span>{formatNumber(DUMMY_REEL_DATA.performance.saves)}</span>
                <span>Saves</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md font-medium bg-pink-50 text-pink-700">
                <Globe className="w-5 h-5 text-pink-500" />
                <span>{formatNumber(DUMMY_REEL_DATA.performance.reach)}</span>
                <span>Reach</span>
              </div>
            </div>
          </div>

          {/* Comments section */}
          <div className="w-full lg:w-[24rem] h-[32rem] overflow-hidden">
            <div className="mb-2">
              <CardTitle className="text-base">Recent Comments</CardTitle>
              <CardDescription className="text-sm">
                Comments with the relevance
              </CardDescription>
            </div>
            <div className="overflow-y-auto h-[calc(100%-3.5rem)] space-y-4 pr-2">
              {DUMMY_REEL_DATA.comments.topEngaging.map((comment, index) => (
                <div
                  key={index}
                  className="flex space-x-4 p-4 bg-gray-100/50 rounded-lg"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback>
                      {comment.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-sm">
                        @{comment.username}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatTimeAgo(comment.timestamp)}
                      </span>
                    </div>

                    <p className="text-sm text-gray-700 mb-3">{comment.text}</p>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-xs text-gray-600">
                          {comment.likes}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-xs text-gray-600">
                          {comment.replies}
                        </span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Top Engaging
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
