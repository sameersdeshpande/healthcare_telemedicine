"use client"

import Link from "next/link"
import { Brain, ChevronDown, Leaf, Stethoscope, Syringe, Users, GraduationCap, Building2, Phone, FileText, Calendar, BadgeHelp } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const menuItems = {
    services: [
      {
        title: "Telemedicine Services",
        href: "/services/telemedicine",
        description: "Connect with healthcare professionals through secure video consultations",
        icon: Stethoscope,
      },
      {
        title: "Health Tips & Resources",
        href: "/services/health-tips",
        description: "Expert advice and resources for maintaining your health and wellness",
        icon: Syringe,
      },
      {
        title: "Mental Health Support",
        href: "/services/mental-health",
        description: "Professional counseling and mental health services",
        icon: Brain,
      },
    ],
    forPatients: [
      {
        title: "Find a Doctor",
        href: "/find-doctor",
        description: "Search and connect with healthcare providers",
        icon: Users,
      },
      {
        title: "Book Appointment",
        href: "/book-appointment",
        description: "Schedule your next healthcare consultation",
        icon: Calendar,
      },
      {
        title: "Patient Resources",
        href: "/patient-resources",
        description: "Helpful guides and educational materials",
        icon: FileText,
      },
    ],
    forProviders: [
      {
        title: "Join as Provider",
        href: "/provider-signup",
        description: "Partner with us as a healthcare provider",
        icon: Stethoscope,
      },
      {
        title: "Provider Training",
        href: "/provider-training",
        description: "Resources and training for telemedicine practice",
        icon: GraduationCap,
      },
      {
        title: "Provider Portal",
        href: "/provider-portal",
        description: "Access your provider dashboard",
        icon: Building2,
      },
    ],
    resources: [
      {
        title: "Health Blog",
        href: "/blog",
        description: "Latest health insights and medical news",
        icon: FileText,
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Frequently asked questions about our services",
        icon: BadgeHelp,
      },
      {
        title: "Support Center",
        href: "/support",
        description: "Get help with using our platform",
        icon: Phone,
      },
    ],
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 md:gap-8">
            <Link className="flex items-center justify-center shrink-0" href="/">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="ml-2 text-xl font-bold">MediConnect</span>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-2">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                        {menuItems.services.map((item) => (
                          <NavigationMenuLink asChild key={item.href}>
                            <Link
                              href={item.href}
                              className="flex items-center space-x-4 rounded-md p-3 hover:bg-muted transition-colors"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-md border bg-background">
                                <item.icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <h3 className="text-sm font-medium">{item.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* For Patients Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">For Patients</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                        {menuItems.forPatients.map((item) => (
                          <NavigationMenuLink asChild key={item.href}>
                            <Link
                              href={item.href}
                              className="flex items-center space-x-4 rounded-md p-3 hover:bg-muted transition-colors"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-md border bg-background">
                                <item.icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <h3 className="text-sm font-medium">{item.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* For Providers Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">For Providers</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                        {menuItems.forProviders.map((item) => (
                          <NavigationMenuLink asChild key={item.href}>
                            <Link
                              href={item.href}
                              className="flex items-center space-x-4 rounded-md p-3 hover:bg-muted transition-colors"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-md border bg-background">
                                <item.icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <h3 className="text-sm font-medium">{item.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Resources Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                        {menuItems.resources.map((item) => (
                          <NavigationMenuLink asChild key={item.href}>
                            <Link
                              href={item.href}
                              className="flex items-center space-x-4 rounded-md p-3 hover:bg-muted transition-colors"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-md border bg-background">
                                <item.icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <h3 className="text-sm font-medium">{item.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Regular Links */}
                  <NavigationMenuItem>
                    <Link
                      href="/pricing"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Pricing
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="/contact"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Contact
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="px-2">
                    Menu
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[300px]">
                  {/* Show login option only on mobile */}
                  <DropdownMenuItem asChild className="sm:hidden">
                    <Link href="/login" className="flex items-center gap-3 p-3">
                      <span className="text-sm font-medium">Log In</span>
                    </Link>
                  </DropdownMenuItem>

                  {Object.entries(menuItems).map(([category, items]) =>
                    items.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href} className="flex items-center gap-3 p-3">
                          <item.icon className="h-5 w-5 text-primary" />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{item.title}</span>
                            <span className="text-xs text-muted-foreground line-clamp-1">{item.description}</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    )),
                  )}
                  <DropdownMenuItem asChild>
                    <Link href="/pricing" className="flex items-center gap-3 p-3">
                      <span className="text-sm font-medium">Pricing</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/contact" className="flex items-center gap-3 p-3">
                      <span className="text-sm font-medium">Contact</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Auth buttons */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="rounded-full px-3">
                    Log In
                  </Button>
                </Link>
              </div>
              <Link href="/signup">
                <Button size="sm" className="rounded-full px-3 whitespace-nowrap">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
