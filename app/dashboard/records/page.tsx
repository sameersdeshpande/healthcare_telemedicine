"use client"

import { useState } from "react"
import { Download, FileText, Filter, Plus, Search, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MedicalRecordsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const records = [
    {
      id: 1,
      title: "Annual Physical Examination",
      doctor: "Dr. Sarah Johnson",
      date: "Feb 15, 2025",
      type: "Examination",
      fileSize: "2.4 MB",
    },
    {
      id: 2,
      title: "Blood Test Results",
      doctor: "Dr. Sarah Johnson",
      date: "Feb 15, 2025",
      type: "Lab Results",
      fileSize: "1.8 MB",
    },
    {
      id: 3,
      title: "Chest X-Ray",
      doctor: "Dr. Emily Rodriguez",
      date: "Jan 30, 2025",
      type: "Imaging",
      fileSize: "8.5 MB",
    },
    {
      id: 4,
      title: "Dermatology Consultation",
      doctor: "Dr. Michael Chen",
      date: "Jan 20, 2025",
      type: "Consultation",
      fileSize: "1.2 MB",
    },
    {
      id: 5,
      title: "Prescription - Lisinopril",
      doctor: "Dr. Emily Rodriguez",
      date: "Jan 30, 2025",
      type: "Prescription",
      fileSize: "0.5 MB",
    },
  ]

  const prescriptions = [
    {
      id: 1,
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      doctor: "Dr. Emily Rodriguez",
      date: "Jan 30, 2025",
      refills: 2,
    },
    {
      id: 2,
      name: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily at bedtime",
      doctor: "Dr. Emily Rodriguez",
      date: "Jan 30, 2025",
      refills: 5,
    },
    {
      id: 3,
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily with meals",
      doctor: "Dr. Sarah Johnson",
      date: "Dec 15, 2024",
      refills: 3,
    },
  ]

  const filteredRecords = records.filter(
    (record) =>
      record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Medical Records</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload Record
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Request Records
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all-records">
          <TabsList>
            <TabsTrigger value="all-records">All Records</TabsTrigger>
            <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
            <TabsTrigger value="imaging">Imaging</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          </TabsList>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center my-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search records..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="examination">Examination</SelectItem>
                <SelectItem value="lab">Lab Results</SelectItem>
                <SelectItem value="imaging">Imaging</SelectItem>
                <SelectItem value="consultation">Consultation</SelectItem>
                <SelectItem value="prescription">Prescription</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <TabsContent value="all-records" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredRecords.map((record) => (
                <Card key={record.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-primary" />
                      {record.title}
                    </CardTitle>
                    <CardDescription>{record.doctor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Date:</div>
                      <div>{record.date}</div>
                      <div className="text-muted-foreground">Type:</div>
                      <div>{record.type}</div>
                      <div className="text-muted-foreground">Size:</div>
                      <div>{record.fileSize}</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lab-results" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredRecords
                .filter((record) => record.type === "Lab Results")
                .map((record) => (
                  <Card key={record.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <FileText className="mr-2 h-5 w-5 text-primary" />
                        {record.title}
                      </CardTitle>
                      <CardDescription>{record.doctor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-muted-foreground">Date:</div>
                        <div>{record.date}</div>
                        <div className="text-muted-foreground">Type:</div>
                        <div>{record.type}</div>
                        <div className="text-muted-foreground">Size:</div>
                        <div>{record.fileSize}</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="imaging" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredRecords
                .filter((record) => record.type === "Imaging")
                .map((record) => (
                  <Card key={record.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <FileText className="mr-2 h-5 w-5 text-primary" />
                        {record.title}
                      </CardTitle>
                      <CardDescription>{record.doctor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-muted-foreground">Date:</div>
                        <div>{record.date}</div>
                        <div className="text-muted-foreground">Type:</div>
                        <div>{record.type}</div>
                        <div className="text-muted-foreground">Size:</div>
                        <div>{record.fileSize}</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="prescriptions" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {prescriptions.map((prescription) => (
                <Card key={prescription.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-primary" />
                      {prescription.name}
                    </CardTitle>
                    <CardDescription>{prescription.doctor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Dosage:</div>
                      <div>{prescription.dosage}</div>
                      <div className="text-muted-foreground">Frequency:</div>
                      <div>{prescription.frequency}</div>
                      <div className="text-muted-foreground">Refills:</div>
                      <div>{prescription.refills}</div>
                      <div className="text-muted-foreground">Date:</div>
                      <div>{prescription.date}</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


