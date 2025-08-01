"use client";

import { useState, useRef } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/header";
import { UserInfo } from "@/components/user-info";
import { ReelStats } from "@/components/reel-stats";
import { PerformanceSection } from "@/components/performance-section";
import { SentimentSection } from "@/components/sentiment-section";
import { CommentsSection } from "@/components/comments-section";
import { HashtagsSection } from "@/components/hashtags-section";
import { InsightsSection } from "@/components/insights-section";
import { LandingPage } from "@/components/landing-page";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  const [currentView, setCurrentView] = useState<
    "landing" | "loading" | "dashboard"
  >("dashboard");
  const [activeTab, setActiveTab] = useState("performance");

  // Refs for each section
  const performanceRef = useRef<HTMLDivElement>(null);
  const sentimentRef = useRef<HTMLDivElement>(null);
  const commentsRef = useRef<HTMLDivElement>(null);
  const hashtagsRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);

  const handleAnalyze = (url: string) => {
    setCurrentView("loading");
    setTimeout(() => {
      setCurrentView("dashboard");
    }, 2000);
  };

  const scrollToSection = (section: string) => {
    setActiveTab(section);
    const refs = {
      performance: performanceRef,
      sentiment: sentimentRef,
      comments: commentsRef,
      hashtags: hashtagsRef,
      insights: insightsRef,
    };

    const targetRef = refs[section as keyof typeof refs];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (currentView === "landing") {
    return <LandingPage onAnalyze={handleAnalyze} />;
  }

  if (currentView === "loading") {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserInfo />
        <ReelStats />

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mt-6"
        >
          <div className="sticky top-16 z-40 py-2 rounded-md">
            <div className="bg-gray-50 rounded-md">
              <TabsList className="grid w-full grid-cols-5 bg-white ">
                <TabsTrigger
                  value="performance"
                  onClick={() => scrollToSection("performance")}
                  className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  Performance
                </TabsTrigger>
                <TabsTrigger
                  value="sentiment"
                  onClick={() => scrollToSection("sentiment")}
                  className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  Sentiment
                </TabsTrigger>
                <TabsTrigger
                  value="comments"
                  onClick={() => scrollToSection("comments")}
                  className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  Comments
                </TabsTrigger>
                <TabsTrigger
                  value="hashtags"
                  onClick={() => scrollToSection("hashtags")}
                  className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  Hashtags
                </TabsTrigger>
                <TabsTrigger
                  value="insights"
                  onClick={() => scrollToSection("insights")}
                  className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  Insights
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <div className="space-y-16">
            <PerformanceSection ref={performanceRef} />
            <SentimentSection ref={sentimentRef} />
            <CommentsSection ref={commentsRef} />
            <HashtagsSection ref={hashtagsRef} />
            <InsightsSection ref={insightsRef} />
          </div>
        </Tabs>
      </div>
    </div>
  );
}
