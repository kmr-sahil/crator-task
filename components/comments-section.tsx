import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart, MessageCircle, AlertTriangle, Bot } from "lucide-react"
import { DUMMY_REEL_DATA } from "@/constants/dummy-data"

export const CommentsSection = forwardRef<HTMLDivElement>((ref) => {
  return (
    <div ref={ref} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Comment Analysis</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Engaging Comments</CardTitle>
            <CardDescription>Comments with the most likes and replies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {DUMMY_REEL_DATA.comments.topEngaging.map((comment, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-2">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">{comment.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-sm">@{comment.username}</span>
                </div>
                <p className="text-sm">{comment.text}</p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Heart className="h-3 w-3" />
                    <span>{comment.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="h-3 w-3" />
                    <span>{comment.replies}</span>
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comment Analytics</CardTitle>
            <CardDescription>Spam detection and engagement trends</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg text-center">
                <AlertTriangle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-600">{DUMMY_REEL_DATA.comments.spamDetected}</div>
                <div className="text-sm text-red-700">Spam Detected</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg text-center">
                <Bot className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">{DUMMY_REEL_DATA.comments.botComments}</div>
                <div className="text-sm text-orange-700">Bot Comments</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Most Used Words</h4>
              <div className="flex flex-wrap gap-2">
                {DUMMY_REEL_DATA.comments.wordCloud.map((word, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {word.word} ({word.count})
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
})

CommentsSection.displayName = "CommentsSection"
