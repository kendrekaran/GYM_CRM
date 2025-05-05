import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Status = "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected"

interface Project {
  manager: string
  date: string
  amount: string
  status: Status
  plan: "1 Month" | "3 Months" | "1 Year"
}

const statusStyles: Record<Status, string> = {
  "In Progress": "bg-purple-100 text-purple-700",
  Complete: "bg-green-100 text-green-700",
  Pending: "bg-blue-100 text-blue-700",
  Approved: "bg-yellow-100 text-yellow-700",
  Rejected: "bg-gray-100 text-gray-700",
}

export function ProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Recent Membership Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted-foreground">
                <th className="pb-3 pt-1 font-normal">Member Name</th>
                <th className="pb-3 pt-1 font-normal">Payment Date</th>
                <th className="pb-3 pt-1 font-normal">Amount</th>
                <th className="pb-3 pt-1 font-normal">Status</th>
                <th className="pb-3 pt-1 font-normal">Plan</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="border-t text-sm">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      {project.manager}
                    </div>
                  </td>
                  <td className="py-3">{project.date}</td>
                  <td className="py-3">₹{project.amount}</td>
                  <td className="py-3">
                    <span className={cn("rounded-full px-3 py-1 text-xs font-medium", statusStyles[project.status])}>
                      {project.status}
                    </span>
                  </td>
                  <td className="py-3">{project.plan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
