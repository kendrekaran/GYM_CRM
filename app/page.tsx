import { StatCard } from "@/components/stat-card"
import { ProjectsTable } from "@/components/projects-table"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"


const paymentData = [
    { manager: "Amit Sharma", date: "Apr 25, 2024", amount: "3000.00", status: "Rejected" as const, plan: "1 Month" as const },
    { manager: "Priya Singh", date: "Apr 03, 2024", amount: "36000.00", status: "In Progress" as const, plan: "1 Year" as const },
    { manager: "Rahul Verma", date: "Apr 11, 2024", amount: "3000.00", status: "Approved" as const, plan: "1 Month" as const },
    { manager: "Sneha Patel", date: "Apr 06, 2024", amount: "36000.00", status: "In Progress" as const, plan: "1 Year" as const },
    { manager: "Vikram Desai", date: "Apr 10, 2024", amount: "9000.00", status: "Approved" as const, plan: "3 Months" as const },
    { manager: "Neha Reddy", date: "Apr 21, 2024", amount: "36000.00", status: "Pending" as const, plan: "1 Year" as const },
    { manager: "Karan Mehta", date: "Apr 11, 2024", amount: "9000.00", status: "Approved" as const, plan: "3 Months" as const },
    { manager: "Pooja Iyer", date: "Apr 07, 2024", amount: "36000.00", status: "In Progress" as const, plan: "1 Year" as const },
    { manager: "Rohit Sinha", date: "Apr 04, 2024", amount: "9000.00", status: "Complete" as const, plan: "3 Months" as const },
    { manager: "Anjali Nair", date: "Apr 28, 2024", amount: "36000.00", status: "In Progress" as const, plan: "1 Year" as const },
    { manager: "Deepak Chauhan", date: "Apr 06, 2024", amount: "36000.00", status: "In Progress" as const, plan: "1 Year" as const },
    { manager: "Meera Joshi", date: "Apr 16, 2024", amount: "36000.00", status: "Rejected" as const, plan: "1 Year" as const },
    { manager: "Arjun Kapoor", date: "Apr 19, 2024", amount: "9000.00", status: "Rejected" as const, plan: "3 Months" as const },
    { manager: "Divya Bhandari", date: "Apr 11, 2024", amount: "9000.00", status: "Pending" as const, plan: "3 Months" as const },
    { manager: "Yash Thakur", date: "Apr 02, 2024", amount: "3000.00", status: "Complete" as const, plan: "1 Month" as const },
    { manager: "Tanya Malhotra", date: "Apr 22, 2024", amount: "9000.00", status: "Complete" as const, plan: "3 Months" as const },
    { manager: "Nikhil Jain", date: "Apr 13, 2024", amount: "36000.00", status: "Rejected" as const, plan: "1 Year" as const },
    { manager: "Ritika Gupta", date: "Apr 12, 2024", amount: "3000.00", status: "Approved" as const, plan: "1 Month" as const },
    { manager: "Siddharth Rao", date: "Apr 14, 2024", amount: "36000.00", status: "Complete" as const, plan: "1 Year" as const },
    { manager: "Ishita Dube", date: "Apr 18, 2024", amount: "9000.00", status: "Pending" as const, plan: "3 Months" as const },
    { manager: "Manish Tiwari", date: "Apr 21, 2024", amount: "36000.00", status: "Approved" as const, plan: "1 Year" as const },
    { manager: "Kajal Arora", date: "Apr 06, 2024", amount: "3000.00", status: "Complete" as const, plan: "1 Month" as const },
    { manager: "Abhishek Kulkarni", date: "Apr 03, 2024", amount: "36000.00", status: "Complete" as const, plan: "1 Year" as const },
    { manager: "Simran Kaur", date: "Apr 20, 2024", amount: "3000.00", status: "Approved" as const, plan: "1 Month" as const },
    { manager: "Varun Yadav", date: "Apr 10, 2024", amount: "9000.00", status: "Pending" as const, plan: "3 Months" as const },
    { manager: "Ayesha Sheikh", date: "Apr 14, 2024", amount: "9000.00", status: "Complete" as const, plan: "3 Months" as const },
    { manager: "Gaurav Dubey", date: "Apr 08, 2024", amount: "3000.00", status: "Complete" as const, plan: "1 Month" as const },
    { manager: "Preeti Rawat", date: "Apr 13, 2024", amount: "9000.00", status: "Complete" as const, plan: "3 Months" as const },
    { manager: "Harsh Vardhan", date: "Apr 14, 2024", amount: "36000.00", status: "In Progress" as const, plan: "1 Year" as const },
    { manager: "Rekha Das", date: "Apr 26, 2024", amount: "3000.00", status: "Approved" as const, plan: "1 Month" as const },
    { manager: "Aditya Pillai", date: "Apr 07, 2024", amount: "3000.00", status: "Pending" as const, plan: "1 Month" as const },
    { manager: "Bhavna Seth", date: "Apr 08, 2024", amount: "9000.00", status: "Rejected" as const, plan: "3 Months" as const },
    { manager: "Vivek Nanda", date: "Apr 27, 2024", amount: "36000.00", status: "Complete" as const, plan: "1 Year" as const },
    { manager: "Snehal Patil", date: "Apr 29, 2024", amount: "36000.00", status: "Pending" as const, plan: "1 Year" as const },
    { manager: "Akshay Rane", date: "Apr 16, 2024", amount: "36000.00", status: "In Progress" as const, plan: "1 Year" as const },
    { manager: "Ruchi Shah", date: "Apr 06, 2024", amount: "3000.00", status: "Rejected" as const, plan: "1 Month" as const },
    { manager: "Naveen Kumar", date: "Apr 08, 2024", amount: "3000.00", status: "Complete" as const, plan: "1 Month" as const },
    { manager: "Shraddha Roy", date: "Apr 27, 2024", amount: "36000.00", status: "Approved" as const, plan: "1 Year" as const },
    { manager: "Kunal Sengupta", date: "Apr 25, 2024", amount: "9000.00", status: "Complete" as const, plan: "3 Months" as const },
    { manager: "Lavanya Menon", date: "Apr 28, 2024", amount: "36000.00", status: "Pending" as const, plan: "1 Year" as const },
    { manager: "Ravindra Joshi", date: "Apr 24, 2024", amount: "9000.00", status: "Approved" as const, plan: "3 Months" as const },
    { manager: "Shreya Jain", date: "Apr 10, 2024", amount: "3000.00", status: "Rejected" as const, plan: "1 Month" as const },
    { manager: "Dev Mehta", date: "Apr 23, 2024", amount: "36000.00", status: "Approved" as const, plan: "1 Year" as const },
    { manager: "Pallavi Sen", date: "Apr 15, 2024", amount: "9000.00", status: "Approved" as const, plan: "3 Months" as const },
    { manager: "Yogesh Maurya", date: "Apr 19, 2024", amount: "36000.00", status: "In Progress" as const, plan: "1 Year" as const },
    { manager: "Naina Fernandes", date: "Apr 06, 2024", amount: "36000.00", status: "In Progress" as const, plan: "1 Year" as const },
    { manager: "Sachin Rawal", date: "Apr 26, 2024", amount: "3000.00", status: "Pending" as const, plan: "1 Month" as const },
    { manager: "Tanvi Bhatt", date: "Apr 22, 2024", amount: "3000.00", status: "Pending" as const, plan: "1 Month" as const },
    { manager: "Mohit Malhotra", date: "Apr 03, 2024", amount: "3000.00", status: "Complete" as const, plan: "1 Month" as const },
    { manager: "Zoya Khan", date: "Apr 09, 2024", amount: "9000.00", status: "Pending" as const, plan: "3 Months" as const },
]

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <SidebarInset className="flex flex-col min-h-screen">
        <header className="flex h-16 items-center justify-between border-b px-2 sm:px-4 md:px-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1">
              <span>Gym</span>
              <span className="text-muted-foreground">/</span>
              <span>Dashboard</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-2 sm:p-4 md:p-6">
          <div className="grid gap-4 sm:gap-6">
            {/* Stats Row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard title="Active Members" value="178" change={5.33} variant="blue" />
              <StatCard title="Pending Payments" value="14" change={-2.51} variant="dark" />
              <StatCard title="New Members this Month" value="9" change={12.75} variant="blue" />
              <StatCard title="Total Revenue (Monthly)" value="₹17,800" change={5.33} variant="dark" />
            </div>
            {/* Projects Table */}
            <ProjectsTable projects={paymentData} />
          </div>
        </main>
        <footer className="border-t p-2 sm:p-4 text-center text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© 2025 GYM</span>
            <div className="flex gap-2 sm:gap-4">
              <span>About</span>
              <span>Support</span>
              <span>Contact Us</span>
            </div>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
