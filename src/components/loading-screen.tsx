"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, MessageSquare, Hash, Users, Zap } from "lucide-react"
import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { icon: BarChart3, text: "Fetching reel data..." },
    { icon: TrendingUp, text: "Analyzing performance metrics..." },
    { icon: MessageSquare, text: "Processing comments..." },
    { icon: Hash, text: "Analyzing hashtags..." },
    { icon: Users, text: "Gathering audience insights..." },
    { icon: Zap, text: "Calculating virality score..." },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2
        const stepIndex = Math.floor(newProgress / 17)
        setCurrentStep(Math.min(stepIndex, steps.length - 1))
        return Math.min(newProgress, 100)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            <BarChart3 className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-pulse" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Your Reel</h2>
            <p className="text-gray-600">Please wait while we process your Instagram Reel data</p>
          </div>

          <div className="mb-6">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-gray-500 mt-2">{progress}% complete</p>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => {
              const StepIcon = step.icon
              const isActive = index === currentStep
              const isCompleted = index < currentStep

              return (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-all ${
                    isActive ? "bg-blue-50 text-blue-700" : isCompleted ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  <StepIcon className={`h-5 w-5 ${isActive ? "animate-spin" : isCompleted ? "text-green-500" : ""}`} />
                  <span className="text-sm">{step.text}</span>
                  {isCompleted && (
                    <div className="ml-auto">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
