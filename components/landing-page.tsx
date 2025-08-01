"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BarChart3, Eye, MessageCircle, TrendingUp, Hash, Sparkles } from "lucide-react"

interface LandingPageProps {
  url: string
  setUrl: (url: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export function LandingPage({ url, setUrl, onSubmit }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Instagram Reel Analytics
          </CardTitle>
          <CardDescription className="text-lg">
            Get deep insights into your Instagram Reels performance, engagement, and audience sentiment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium">
                Instagram Reel URL
              </label>
              <Input
                id="url"
                type="url"
                placeholder="https://www.instagram.com/reel/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-12"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Analyze Reel
            </Button>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm font-medium">Performance</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-sm font-medium">Sentiment</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-sm font-medium">Engagement</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Hash className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-sm font-medium">Hashtags</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
