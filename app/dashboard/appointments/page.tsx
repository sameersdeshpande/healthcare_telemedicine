"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, Filter, Plus, Search, Video } from "lucide-react"
import { format } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date>()

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Primary Care",
      date: "Today",
      time: "3:00 PM",
      type: "Video",
      status: "Upcoming",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatology",
      date: "Tomorrow",
      time: "10:30 AM",
      type: "Video",
      status: "Upcoming",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      doctor: "Dr. Emily Rodriguez",
      specialty: "Cardiology",
      date: "Feb 28, 2025",
      time: "2:15 PM",
      type: "Video",
      status: "Upcoming",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 4,
      doctor: "Dr. James Wilson",
      specialty: "Psychiatry",
      date: "Feb 15, 2025",
      time: "1:00 PM",
      type: "Video",
      status: "Completed",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 5,
      doctor: "Dr. Lisa Patel",
      specialty: "Endocrinology",
      date: "Jan 30, 2025",
      time: "11:45 AM",
      type: "Video",
      status: "Completed",
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Appointments</h1>
          <Link href="/dashboard/appointments/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-1 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search appointments..." className="pl-8" />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="All specialties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All specialties</SelectItem>
                <SelectItem value="primary">Primary Care</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="psychiatry">Psychiatry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="rounded-lg border">
              {appointments
                .filter((appointment) => appointment.status === "Upcoming")
                .map((appointment) => (
                  <div key={appointment.id} className="flex items-center gap-4 border-b last:border-0 p-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={appointment.image} alt={appointment.doctor} />
                      <AvatarFallback>
                        {appointment.doctor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{appointment.doctor}</p>
                      <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                    </div>
                    <div className="hidden md:block">
                      <p className="text-sm font-medium">{appointment.date}</p>
                      <p className="text-sm text-muted-foreground">{appointment.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="gap-1">
                        <Video className="h-4 w-4" />
                        Join
                      </Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            <div className="rounded-lg border">
              {appointments
                .filter((appointment) => appointment.status === "Completed")
                .map((appointment) => (
                  <div key={appointment.id} className="flex items-center gap-4 border-b last:border-0 p-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={appointment.image} alt={appointment.doctor} />
                      <AvatarFallback>
                        {appointment.doctor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{appointment.doctor}</p>
                      <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                    </div>
                    <div className="hidden md:block">
                      <p className="text-sm font-medium">{appointment.date}</p>
                      <p className="text-sm text-muted-foreground">{appointment.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        View Summary
                      </Button>
                      <Button size="sm" variant="outline">
                        Book Again
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="cancelled" className="space-y-4">
            <div className="rounded-lg border p-8 text-center">
              <p className="text-muted-foreground">No cancelled appointments</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

