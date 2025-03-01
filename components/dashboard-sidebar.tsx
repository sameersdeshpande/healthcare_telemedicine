"use client"
import Link from "next/link"
import { Bell, Calendar, FileText, Home, Leaf, LogOut, MessageSquare, Settings, User, X } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface DashboardSidebarProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export function DashboardSidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: DashboardSidebarProps) {
  const handleLogout = () => {
    // In a real app, this would handle the logout process
    window.location.href = "/"
  }

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
    { icon: Calendar, label: "Find Doctors", href: "/dashboard/doctors", active: false },
    { icon: MessageSquare, label: "Messages", href: "/dashboard/messages", active: false, badge: 2 },
    { icon: FileText, label: "Medical Records", href: "/dashboard/records", active: false },
    { icon: User, label: "Profile", href: "/dashboard/profile", active: false },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", active: false },
  ]

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-[280px]">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <Link href="/dashboard" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Leaf className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">HealX</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <div className="px-3 py-2">
                <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-muted/50">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
              </div>
              <nav className="grid gap-1 px-2 py-3">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                      item.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-medium">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="border-t p-4">
              <Button variant="outline" className="w-full justify-start gap-2" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
                Log out
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-30">
        <div className="flex flex-col flex-grow border-r bg-card">
          <div className="flex items-center gap-2 px-6 py-4 h-16 border-b">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold">MediConnect</span>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <div className="px-4 py-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Avatar className="h-10 w-10 border border-border">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                </div>
              </div>
            </div>
            <nav className="flex-1 px-3 py-2 space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    item.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-medium">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
            <div className="p-4">
              <div className="rounded-lg bg-primary/5 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bell className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-medium text-sm">Need Help?</p>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Contact our support team for assistance with your telemedicine experience.
                </p>
                <Button size="sm" variant="outline" className="w-full text-xs">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start gap-2" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Log out
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

