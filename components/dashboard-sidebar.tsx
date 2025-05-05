"use client"

import { Home, UserPlus, Users, Calendar, CreditCard, FileText, BadgeDollarSign, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

// Navigation menu items data
const navigationItems = [
  {
    href: "/",
    icon: Home,
    label: "Overview",
  },
  {
    href: "/add-users",
    icon: UserPlus,
    label: "Add Users",
  },
  {
    href: "/manage-users",
    icon: Users,
    label: "Manage Users",
  },
  {
    href: "/attendance",
    icon: Calendar,
    label: "Attendance",
  },
  {
    href: "/fees",
    icon: CreditCard,
    label: "Fees",
  },
  {
    href: "/membership",
    icon: BadgeDollarSign,
    label: "Membership",
  },
  {
    href: "/pricing",
    icon: FileText,
    label: "Pricing",
  },
]

export function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  
  // Update main content margin when sidebar state changes
  useEffect(() => {
    // Update CSS variable for main content margin
    document.documentElement.style.setProperty(
      '--sidebar-width', 
      isCollapsed ? '80px' : '16rem'
    );
    
    // Add a class to the document to indicate sidebar state
    if (isCollapsed) {
      document.documentElement.classList.add('sidebar-collapsed');
    } else {
      document.documentElement.classList.remove('sidebar-collapsed');
    }
    
    return () => {
      document.documentElement.classList.remove('sidebar-collapsed');
    };
  }, [isCollapsed]);

  // Check if we're on mobile on initial load
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };
    
    // Run on mount
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-full z-10">
      <div className={`h-full border-r bg-white shadow-sm transition-all duration-300 ${isCollapsed ? 'w-[80px]' : 'w-64'}`}>
        <button 
          className="absolute -right-3 top-6 bg-white border rounded-full p-1 shadow-md z-10"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
        
        <div className="flex h-14 items-center px-4 border-b">
          {!isCollapsed && (
            <Link href="/" className="text-lg font-semibold">
              Dashboard
            </Link>
          )}
        </div>
        
        <div className="overflow-y-auto h-[calc(100vh-56px)]">
          <nav className="p-2 space-y-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || 
                              (item.href !== '/dashboard' && pathname.startsWith(item.href));
              
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-md ${isActive ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <item.icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : ''}`} />
                  </div>
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        
          {!isCollapsed && (
            <div className="absolute bottom-0 left-0 right-0 border-t p-4 bg-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}