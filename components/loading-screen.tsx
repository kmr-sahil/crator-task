import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold mb-2">Analyzing Your Reel</h3>
          <p className="text-muted-foreground mb-4">Extracting insights and metrics...</p>
          <Progress value={75} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">This may take a few seconds</p>
        </CardContent>
      </Card>
    </div>
  )
}
