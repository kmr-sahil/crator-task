import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2, ExternalLink } from "lucide-react"
import { DUMMY_REEL_DATA } from "@/constants/dummy-data"

export function UserInfo() {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return `${diffDays} days ago`
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={DUMMY_REEL_DATA.user.profilePicture || "/placeholder.svg"} />
            <AvatarFallback>
              {DUMMY_REEL_DATA.user.displayName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h2 className="text-2xl font-bold">{DUMMY_REEL_DATA.user.displayName}</h2>
              {DUMMY_REEL_DATA.user.verified && <CheckCircle2 className="h-5 w-5 text-blue-500" />}
            </div>
            <p className="text-muted-foreground mb-2">@{DUMMY_REEL_DATA.user.username}</p>
            <p className="text-sm mb-4">{DUMMY_REEL_DATA.user.bio}</p>
            <div className="flex items-center space-x-6 text-sm">
              <div>
                <span className="font-semibold">{formatNumber(DUMMY_REEL_DATA.user.followers)}</span>
                <span className="text-muted-foreground ml-1">followers</span>
              </div>
              <div>
                <span className="font-semibold">{formatNumber(DUMMY_REEL_DATA.user.following)}</span>
                <span className="text-muted-foreground ml-1">following</span>
              </div>
              <div>
                <span className="font-semibold">{formatNumber(DUMMY_REEL_DATA.user.posts)}</span>
                <span className="text-muted-foreground ml-1">posts</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="secondary" className="mb-2">
              <ExternalLink className="h-3 w-3 mr-1" />
              View Reel
            </Badge>
            <p className="text-sm text-muted-foreground">Posted {formatDate(DUMMY_REEL_DATA.performance.postDate)}</p>
            <p className="text-sm text-muted-foreground">Duration: {DUMMY_REEL_DATA.performance.duration}s</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
