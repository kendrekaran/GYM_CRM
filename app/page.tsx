import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Welcome to GYM CRM</h1>
      <p className="text-xl text-muted-foreground">Modern analytics dashboard</p>
      <Button asChild size="lg">
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  )
}
