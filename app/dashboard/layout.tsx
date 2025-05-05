import type React from "react"
import type { Metadata } from "next"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export const metadata: Metadata = {
  title: "Dashboard - GYM CRM",
  description: "Analytics dashboard for GYM CRM",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="pl-[var(--sidebar-width,80px)] p-6 min-h-screen transition-all duration-300">
        {children}
      </main>
    </div>
  )
}
