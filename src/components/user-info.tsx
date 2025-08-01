import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  UserPlus,
  Grid3X3,
  BadgeCheck,
  SquareArrowOutUpRight,
} from "lucide-react";
import { DUMMY_REEL_DATA } from "@/constants/dummy-data";

export function UserInfo() {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <Card className="mb-8">
      <CardContent className="px-6">
        <div className="flex items-start justify-center space-x-6">
          <Avatar className="h-20 w-20">
            <AvatarImage
              src={DUMMY_REEL_DATA.user.profilePicture}
              alt={DUMMY_REEL_DATA.user.displayName}
            />
            <AvatarFallback>
              {DUMMY_REEL_DATA.user.displayName.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">
                {DUMMY_REEL_DATA.user.displayName}
              </h2>
              {DUMMY_REEL_DATA.user.verified && (
                <BadgeCheck className="h-5 w-5 text-blue-500" />
              )}
            </div>

            <p className="text-gray-600 text-sm mb-2">
              @{DUMMY_REEL_DATA.user.username}
            </p>
            <p className="text-gray-700 mb-2 text-sm">
              {DUMMY_REEL_DATA.user.bio}
            </p>
          </div>

          <div className="text-right flex flex-col items-end pr-3">
            <div className="p-2 ml-auto bg-gray-50 rounded-md">
              <SquareArrowOutUpRight className="h-4 w-4 text-gray-600 cursor-pointer" />
            </div>
            <div className="flex items-center space-x-6  pt-[1.5rem]">
              <div className="flex items-center space-x-1">
                <span className="font-semibold">
                  {formatNumber(DUMMY_REEL_DATA.user.followers)}
                </span>
                <span className="text-gray-500">followers</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold">
                  {formatNumber(DUMMY_REEL_DATA.user.following)}
                </span>
                <span className="text-gray-500">following</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold">
                  {DUMMY_REEL_DATA.user.posts}
                </span>
                <span className="text-gray-500">posts</span>
              </div>
            </div>

            {/* <Badge variant="secondary" className="mb-2">
              {DUMMY_REEL_DATA.insights.contentCategory}
            </Badge>
            <p className="text-sm text-gray-500">
              Posted{" "}
              {new Date(
                DUMMY_REEL_DATA.performance.postDate
              ).toLocaleDateString()}
            </p> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
