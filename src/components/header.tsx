import { Button } from "@/components/ui/button"
import { Download, BarChart3 } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* <BarChart3 className="h-8 w-8 text-blue-600" /> */}
            <h1 className="text-2xl font-bold text-gray-900">Crator</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
            <Button size="sm">Analyze New Reel</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
