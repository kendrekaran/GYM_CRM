import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  change: number
  icon?: LucideIcon
  variant?: "default" | "blue" | "dark"
}

export function StatCard({ title, value, change, variant = "default" }: StatCardProps) {
  const isPositive = change >= 0

  const bgColors = {
    default: "bg-white",
    blue: "bg-blue-500 text-white",
    dark: "bg-zinc-900 text-white",
  }

  const changeColors = {
    default: isPositive ? "text-green-600" : "text-red-600",
    blue: "text-blue-100",
    dark: "text-zinc-300",
  }

  return (
    <Card className={cn("border shadow-sm", bgColors[variant])}>
      <CardContent className="p-3 sm:p-6">
        <div className="flex flex-col gap-1">
          <p className={cn("text-xs sm:text-sm font-medium", variant !== "default" && "text-zinc-200")}>{title}</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl sm:text-3xl font-bold">{value}</h3>
            <div className={cn("flex items-center gap-1 text-xs sm:text-sm", changeColors[variant])}>
              {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              <span>{Math.abs(change).toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
