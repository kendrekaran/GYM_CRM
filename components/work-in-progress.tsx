import { AlertTriangle } from "lucide-react"

interface WorkInProgressProps {
  title: string
  description?: string
}

export function WorkInProgress({ title, description }: WorkInProgressProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <div className="flex flex-col items-center p-8 bg-amber-50 border border-amber-200 rounded-lg max-w-md">
        <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
        <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>
        {description && (
          <p className="text-gray-600 text-center">{description}</p>
        )}
        <div className="mt-6 p-4 bg-white rounded border border-amber-100">
          <p className="text-sm text-gray-500">This page is currently under development. Check back soon for updates!</p>
        </div>
      </div>
    </div>
  )
} 