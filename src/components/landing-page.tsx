"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, MessageSquare, Hash, Users, Zap } from "lucide-react"

interface LandingPageProps {
  onAnalyze: (url: string) => void
}

export function LandingPage({ onAnalyze }: LandingPageProps) {
  const [url, setUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url.trim()) {
      onAnalyze(url)
    }
  }

  const features = [
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track views, likes, comments, and engagement rates over time",
    },
    {
      icon: MessageSquare,
      title: "Sentiment Analysis",
      description: "Analyze comment sentiment and caption effectiveness",
    },
    {
      icon: Hash,
      title: "Hashtag Insights",
      description: "Discover trending hashtags and optimize your reach",
    },
    {
      icon: Users,
      title: "Audience Demographics",
      description: "Understand your audience with detailed demographic data",
    },
    {
      icon: Zap,
      title: "Virality Prediction",
      description: "Get AI-powered predictions on content viral potential",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Reports",
      description: "Export detailed analytics reports in PDF format",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <BarChart3 className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Instagram Reel Analytics</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive insights into your Instagram Reels performance with AI-powered analytics, sentiment
            analysis, and audience demographics.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto mb-16">
          <CardHeader>
            <CardTitle className="text-center">Analyze Your Instagram Reel</CardTitle>
            <CardDescription className="text-center">
              Paste your Instagram Reel URL below to get started with detailed analytics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="url"
                placeholder="https://www.instagram.com/reel/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-center"
                required
              />
              <Button type="submit" className="w-full" size="lg">
                Analyze Reel
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
