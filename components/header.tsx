"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, Download } from "lucide-react"

interface HeaderProps {
  onAnalyzeNew: () => void
}

export function Header({ onAnalyzeNew }: HeaderProps) {
  return (
    <div className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold">Reel Analytics</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
            <Button variant="outline" size="sm" onClick={onAnalyzeNew}>
              Analyze New Reel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
