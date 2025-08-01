"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { UserInfo } from "@/components/user-info"
import { ReelStats } from "@/components/reel-stats"
import { PerformanceSection } from "@/components/performance-section"
import { SentimentSection } from "@/components/sentiment-section"
import { CommentsSection } from "@/components/comments-section"
import { HashtagsSection } from "@/components/hashtags-section"
import { InsightsSection } from "@/components/insights-section"
import { LandingPage } from "@/components/landing-page"
import { LoadingScreen } from "@/components/loading-screen"
import { DUMMY_REEL_DATA } from "@/constants/dummy-data"

export default function InstagramAnalytics() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [activeTab, setActiveTab] = useState("performance")

  // Refs for each section
  const performanceRef = useRef<HTMLDivElement>(null)
  const sentimentRef = useRef<HTMLDivElement>(null)
  const commentsRef = useRef<HTMLDivElement>(null)
  const hashtagsRef = useRef<HTMLDivElement>(null)
  const insightsRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setShowDashboard(true)
  }

  const scrollToSection = (section: string) => {
    setActiveTab(section)

    const refs = {
      performance: performanceRef,
      sentiment: sentimentRef,
      comments: commentsRef,
      hashtags: hashtagsRef,
      insights: insightsRef,
    }

    const targetRef = refs[section as keyof typeof refs]
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (!showDashboard) {
    return <LandingPage url={url} setUrl={setUrl} onSubmit={handleSubmit} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAnalyzeNew={() => setShowDashboard(false)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserInfo user={DUMMY_REEL_DATA.user} />
        <ReelStats performance={DUMMY_REEL_DATA.performance} insights={DUMMY_REEL_DATA.insights} />

        {/* Wrap everything in Tabs component */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Sticky Tabs */}
          <div className="sticky top-16 z-40 bg-white border-b mb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <TabsList className="grid w-full grid-cols-5 max-w-4xl mx-auto">
              <TabsTrigger value="performance" onClick={() => scrollToSection("performance")}>
                Performance
              </TabsTrigger>
              <TabsTrigger value="sentiment" onClick={() => scrollToSection("sentiment")}>
                Sentiment
              </TabsTrigger>
              <TabsTrigger value="comments" onClick={() => scrollToSection("comments")}>
                Comments
              </TabsTrigger>
              <TabsTrigger value="hashtags" onClick={() => scrollToSection("hashtags")}>
                Hashtags
              </TabsTrigger>
              <TabsTrigger value="insights" onClick={() => scrollToSection("insights")}>
                Insights
              </TabsTrigger>
            </TabsList>
          </div>

          {/* All Sections Rendered */}
          <div className="space-y-16">
            <PerformanceSection ref={performanceRef} data={DUMMY_REEL_DATA.performance} />
            <SentimentSection ref={sentimentRef} data={DUMMY_REEL_DATA.sentiment} />
            <CommentsSection ref={commentsRef} data={DUMMY_REEL_DATA.comments} />
            <HashtagsSection ref={hashtagsRef} data={DUMMY_REEL_DATA.hashtags} />
            <InsightsSection ref={insightsRef} data={DUMMY_REEL_DATA.insights} />
          </div>
        </Tabs>
      </div>
    </div>
  )
}
