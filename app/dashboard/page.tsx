"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, ChevronRight, Clock, FileText, Leaf, MessageSquare, Plus, Search, Menu } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      {/* Add md:pl-64 to account for the sidebar width */}
      <div className="flex-1 flex flex-col min-h-screen w-full md:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="relative flex-1 md:grow-0 md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-8 md:w-80 bg-background" />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar className="h-8 w-8 border border-border">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, John Doe</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-1">
                  <Calendar className="h-4 w-4" />
                  February 25, 2025
                </Button>
                <Button className="gap-1">
                  <Plus className="h-4 w-4" />
                  New Appointment
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Calendar,
                  label: "Available Doctors",
                  value: "28",
                  color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
                },
                {
                  icon: MessageSquare,
                  label: "Unread Messages",
                  value: "2",
                  color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
                },
                {
                  icon: FileText,
                  label: "Prescriptions",
                  value: "3",
                  color: "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
                },
                {
                  icon: Clock,
                  label: "Hours Saved",
                  value: "12",
                  color: "bg-lime-50 text-lime-600 dark:bg-lime-900/20 dark:text-lime-400",
                },
              ].map((stat, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md">
                  <CardHeader className="p-6 pb-2 flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                    <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-transparent border-b rounded-none h-auto p-0 w-full justify-start space-x-6">
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="appointments"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
                >
                  Appointments
                </TabsTrigger>
                <TabsTrigger
                  value="messages"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
                >
                  Messages
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-7">
                  <Card className="md:col-span-4 border-none shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                      <div>
                        <CardTitle>Health Resources</CardTitle>
                        <CardDescription>Articles, guides and wellness tips</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <FileText className="h-4 w-4" />
                        View All
                      </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        {[
                          {
                            title: "Understanding Telemedicine: A Patient's Guide",
                            category: "Telehealth",
                            readTime: "5 min read",
                            image: "/placeholder.svg?height=60&width=60",
                            color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
                          },
                          {
                            title: "5 Ways to Prepare for Your Virtual Doctor Visit",
                            category: "Tips & Tricks",
                            readTime: "3 min read",
                            image: "/placeholder.svg?height=60&width=60",
                            color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
                          },
                          {
                            title: "Managing Chronic Conditions Through Telehealth",
                            category: "Health Management",
                            readTime: "7 min read",
                            image: "/placeholder.svg?height=60&width=60",
                            color: "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
                          },
                        ].map((resource, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                          >
                            <div
                              className={`h-12 w-12 rounded-lg ${resource.color} flex items-center justify-center shrink-0`}
                            >
                              <Leaf className="h-6 w-6" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="font-medium line-clamp-1">{resource.title}</p>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <span className="font-medium">{resource.category}</span>
                                <span className="mx-2">•</span>
                                <span>{resource.readTime}</span>
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-4 bg-muted/20">
                      <div className="w-full grid grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full text-sm">
                          Health Library
                        </Button>
                        <Button variant="outline" className="w-full text-sm">
                          Wellness Tips
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card className="md:col-span-3 border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Recent Messages</CardTitle>
                      <CardDescription>Your latest communications</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        <div className="flex items-center gap-4 p-4">
                          <Avatar className="h-10 w-10 border border-border">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Sarah Johnson" />
                            <AvatarFallback>SJ</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <p className="font-medium">Dr. Sarah Johnson</p>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              Your test results look good. Let's discuss them in our next appointment.
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">2h ago</p>
                            <div className="h-2 w-2 bg-primary rounded-full ml-auto mt-1"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                          <Avatar className="h-10 w-10 border border-border">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Michael Chen" />
                            <AvatarFallback>MC</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <p className="font-medium">Dr. Michael Chen</p>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              Please complete the pre-appointment questionnaire before our session tomorrow.
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">Yesterday</p>
                            <div className="h-2 w-2 bg-primary rounded-full ml-auto mt-1"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-4 bg-muted/20">
                      <Link href="/dashboard/messages" className="w-full">
                        <Button variant="outline" className="w-full">
                          View All Messages
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>

                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Health Summary</CardTitle>
                    <CardDescription>Your recent health metrics and activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Blood Pressure</p>
                          <p className="text-sm text-muted-foreground">Last updated: Feb 20</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
                            <span className="font-bold">120</span>
                          </div>
                          <div className="text-sm">
                            <p className="font-medium">120/80 mmHg</p>
                            <p className="text-muted-foreground">Normal range</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Heart Rate</p>
                          <p className="text-sm text-muted-foreground">Last updated: Feb 22</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 dark:bg-green-900/20 dark:text-green-400">
                            <span className="font-bold">72</span>
                          </div>
                          <div className="text-sm">
                            <p className="font-medium">72 BPM</p>
                            <p className="text-muted-foreground">Resting rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Weight</p>
                          <p className="text-sm text-muted-foreground">Last updated: Feb 18</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 dark:bg-teal-900/20 dark:text-teal-400">
                            <span className="font-bold">165</span>
                          </div>
                          <div className="text-sm">
                            <p className="font-medium">165 lbs</p>
                            <p className="text-muted-foreground">Stable</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appointments" className="mt-6">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Appointments</CardTitle>
                    <CardDescription>Schedule and manage your healthcare consultations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-muted/50 rounded-lg p-4 text-center flex flex-col items-center justify-center space-y-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-medium">Schedule New</h3>
                          <p className="text-sm text-muted-foreground">
                            Book a consultation with a healthcare provider
                          </p>
                          <Button size="sm" className="mt-2">
                            Schedule
                          </Button>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4 text-center flex flex-col items-center justify-center space-y-3">
                          <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 dark:bg-teal-900/20 dark:text-teal-400">
                            <Clock className="h-6 w-6" />
                          </div>
                          <h3 className="font-medium">View Upcoming</h3>
                          <p className="text-sm text-muted-foreground">See your scheduled appointments</p>
                          <Button size="sm" variant="outline" className="mt-2">
                            View Calendar
                          </Button>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4 text-center flex flex-col items-center justify-center space-y-3">
                          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 dark:bg-green-900/20 dark:text-green-400">
                            <FileText className="h-6 w-6" />
                          </div>
                          <h3 className="font-medium">Past Appointments</h3>
                          <p className="text-sm text-muted-foreground">Access your appointment history</p>
                          <Button size="sm" variant="outline" className="mt-2">
                            View History
                          </Button>
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link href="/dashboard/appointments">Go to Appointment Manager</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="messages" className="mt-6">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>All Messages</CardTitle>
                    <CardDescription>Your conversations with healthcare providers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>Access all your message threads here.</p>
                      <Button asChild>
                        <Link href="/dashboard/messages">Go to Messages</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <footer className="border-t py-4 px-6 bg-background">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs text-muted-foreground">© 2025 MediConnect. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <Leaf className="h-4 w-4 text-primary" />
              <p className="text-xs text-muted-foreground">HIPAA Compliant & Secure</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

