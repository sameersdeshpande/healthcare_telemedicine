import Link from "next/link"
import { Bell, Calendar, FileText, Home, LogOut, Menu, MessageSquare, Settings, ShieldCheck, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

/**
 * Dashboard navigation bar component
 *
 * This component provides the main navigation for authenticated users in the dashboard.
 * It includes:
 * - Mobile responsive menu
 * - Logo and brand name
 * - Main navigation links
 * - Notifications button
 * - User profile dropdown
 *
 * Usage:
 * <DashboardNavbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
 */
interface DashboardNavbarProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export function DashboardNavbar({ isMobileMenuOpen, setIsMobileMenuOpen }: DashboardNavbarProps) {
  const handleLogout = () => {
    // In a real app, this would handle the logout process
    window.location.href = "/"
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span>HealX</span>
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/appointments"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calendar className="h-5 w-5" />
              Appointments
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5" />
              Messages
            </Link>
            <Link
              href="/dashboard/records"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="h-5 w-5" />
              Medical Records
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <ShieldCheck className="h-6 w-6 text-primary" />
        <span>HealX</span>
      </Link>
      <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
        <Link href="/dashboard" className="font-medium text-primary">
          Dashboard
        </Link>
        <Link
          href="/dashboard/appointments"
          className="font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Appointments
        </Link>
        <Link
          href="/dashboard/messages"
          className="font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Messages
        </Link>
        <Link
          href="/dashboard/records"
          className="font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Medical Records
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

