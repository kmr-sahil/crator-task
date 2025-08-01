import { forwardRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, AlertTriangle, Bot } from "lucide-react";
import { DUMMY_REEL_DATA } from "@/constants/dummy-data";

export const CommentsSection = forwardRef<HTMLDivElement>((props, ref) => {
  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const CommentList = ({
    comments,
  }: {
    comments: typeof DUMMY_REEL_DATA.comments.topEngaging;
  }) => (
    <div className="mt-4 max-h-60 overflow-y-auto space-y-4">
      {comments.map((comment, index) => (
        <div key={index} className="flex space-x-4 p-3  bg-gray-100/50 rounded-lg">
          <Avatar className="h-10 w-10">
            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
            <AvatarFallback>
              {comment.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold text-sm">@{comment.username}</span>
              <span className="text-xs text-gray-500">
                {formatTimeAgo(comment.timestamp)}
              </span>
            </div>

            <p className="text-sm text-gray-700 mb-3">{comment.text}</p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4 text-red-500" />
                <span className="text-xs text-gray-600">{comment.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4 text-blue-500" />
                <span className="text-xs text-gray-600">{comment.replies}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                Top Engaging
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div ref={ref} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Comment Analysis</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Total Comments */}
        <Card>
          <CardContent className="px-6 text-center">
            <div className="flex items-baseline gap-2 bg-blue-50 px-4 py-1 rounded-md">
              <MessageCircle className="h-5 w-5 text-blue-500" />
              <div className="text-2xl font-bold text-blue-600">
                {DUMMY_REEL_DATA.comments.total}
              </div>
              <div className="text-sm text-blue-600">Total Comments</div>
            </div>

            <div className="text-left mt-4">
              <CardTitle className="text-base">Top Engaging Comments</CardTitle>
               {/* <CardDescription className="text-sm">
                Top Comments with the most likes and replies
              </CardDescription>  */}
              <CommentList comments={DUMMY_REEL_DATA.comments.topEngaging} />
            </div>
          </CardContent>
        </Card>

        {/* Spam Comments */}
        <Card>
          <CardContent className="px-6 text-center">
            <div className="flex items-center gap-2 bg-orange-50 px-4 py-1 rounded-md pt-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <div className="text-2xl font-bold text-orange-600">
                {DUMMY_REEL_DATA.comments.spamDetected}
              </div>
              <div className="text-sm text-gray-600">Spam Detected</div>
            </div>

            <div className="text-left mt-4">
              <CardTitle className="text-base">Top Spam Comments</CardTitle>
              {/* <CardDescription className="text-sm">
                Comments with the most likes and replies
              </CardDescription> */}
              <CommentList comments={DUMMY_REEL_DATA.comments.topEngaging} />
            </div>
          </CardContent>
        </Card>

        {/* Bot Comments */}
        <Card>
          <CardContent className="px-6 text-center">
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-1 rounded-md pt-2">
              <Bot className="h-5 w-5 text-purple-500" />
              <div className="text-2xl font-bold text-purple-600">
                {DUMMY_REEL_DATA.comments.botComments}
              </div>
              <div className="text-sm text-purple-600">Bot Comments</div>
            </div>

            <div className="text-left mt-4">
              <CardTitle className="text-base">Recent Bot Comments</CardTitle>
              {/* <CardDescription className="text-sm">
                Comments with the most likes and replies
              </CardDescription> */}
              <CommentList comments={DUMMY_REEL_DATA.comments.topEngaging} />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Comment Word Cloud</CardTitle>
          <CardDescription>
            Most frequently used words in comments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {DUMMY_REEL_DATA.comments.wordCloud.map((word, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm"
                style={{
                  fontSize: `${Math.max(12, Math.min(20, word.count / 5))}px`,
                  opacity: Math.max(0.6, word.count / 100),
                }}
              >
                {word.word} ({word.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

CommentsSection.displayName = "CommentsSection";
