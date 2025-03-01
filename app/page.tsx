// import Link from "next/link"
// import { ArrowRight, Calendar, CheckCircle, Leaf, MessageSquare, Video } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Footer } from "@/components/footer"
// import { Navbar } from "@/components/navbar"

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-1">
//         {/* Hero Section - Asymmetrical layout with overlapping elements */}
//         <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
//           <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
//           <div className="container px-4 md:px-6 relative z-10">
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//               <div className="flex flex-col justify-center space-y-8 max-w-xl">
//                 <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 w-fit">
//                   <span className="flex h-2 w-2 rounded-full bg-white mr-1"></span>
//                   Trusted by 10,000+ patients
//                 </div>
//                 <div className="space-y-4">
//                   <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
//                     Healthcare <span className="text-primary">Reimagined</span> for the Digital Age
//                   </h1>
//                   <p className="text-xl text-muted-foreground max-w-[600px]">
//                     Connect with licensed healthcare professionals from anywhere. Secure, convenient, and personalized
//                     care when you need it most.
//                   </p>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Link href="/signup">
//                     <Button size="lg" className="rounded-full text-base px-8">
//                       Get Started
//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </Button>
//                   </Link>
//                   <Link href="/doctors">
//                     <Button size="lg" variant="outline" className="rounded-full text-base px-8">
//                       Find a Doctor
//                     </Button>
//                   </Link>
//                 </div>
//                 <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                   <div className="flex items-center">
//                     <CheckCircle className="mr-1 h-4 w-4 text-primary" />
//                     HIPAA Compliant
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="mr-1 h-4 w-4 text-primary" />
//                     24/7 Support
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="mr-1 h-4 w-4 text-primary" />
//                     Secure
//                   </div>
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
//                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
//                 <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-border/40 overflow-hidden">
                
//                   <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/40">
//                     <div className="flex items-center gap-3">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
//                           <Leaf className="h-5 w-5 text-primary" />
//                         </div>
//                       </div>
//                       <div>
//                         <p className="text-sm font-medium">Trusted Healthcare</p>
//                         <p className="text-xs text-muted-foreground">Connect with 500+ specialists nationwide</p>
//                       </div>
//                       <Button size="sm" className="ml-auto rounded-full">
//                         Learn More
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How It Works - Card-based layout with icons */}
//         <section className="py-20 bg-background">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//               <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground w-fit">
//                 Simple Process
//               </div>
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
//               <p className="max-w-[700px] text-muted-foreground text-lg">
//                 Our platform makes it easy to receive quality healthcare from anywhere in just three simple steps.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: Calendar,
//                   title: "Book an Appointment",
//                   description: "Schedule a virtual consultation with a healthcare provider that fits your schedule.",
//                   color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
//                   number: "01",
//                 },
//                 {
//                   icon: Video,
//                   title: "Connect Virtually",
//                   description: "Join your appointment through our secure video platform from any device.",
//                   color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
//                   number: "02",
//                 },
//                 {
//                   icon: MessageSquare,
//                   title: "Receive Care",
//                   description: "Get diagnosis, treatment plans, prescriptions, and follow-up care all online.",
//                   color: "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
//                   number: "03",
//                 },
//               ].map((item, index) => (
//                 <div key={index} className="relative group">
//                   <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//                   <div className="relative bg-card rounded-xl border shadow-sm p-8 h-full flex flex-col">
//                     <div className="absolute -top-5 right-5 bg-primary text-primary-foreground text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center">
//                       {item.number}
//                     </div>
//                     <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6`}>
//                       <item.icon className="h-7 w-7" />
//                     </div>
//                     <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                     <p className="text-muted-foreground flex-grow">{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-primary/5">
//           <div className="container px-4 md:px-6">
//             <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent p-8 md:p-12">
//               <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
//               <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//                 <div className="space-y-4">
//                   <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
//                     Ready to experience healthcare reimagined?
//                   </h2>
//                   <p className="text-lg text-white/80 max-w-[600px]">
//                     Join thousands of patients who have already discovered the convenience and quality of telemedicine
//                     with MediConnect.
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                     <Link href="/signup">
//                       <Button size="lg" className="rounded-full text-base px-8 bg-white text-primary hover:bg-white/90">
//                         Get Started Now
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Button>
//                     </Link>
//                     <Link href="/doctors">
//                       <Button
//                         size="lg"
//                         variant="outline"
//                         className="rounded-full text-base px-8 border-white text-white hover:bg-white/10"
//                       >
//                         Learn More
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="hidden lg:block">
//                   <div className="relative">
//                     <Leaf className="h-32 w-32 text-white/20 absolute -top-10 -right-10" />
//                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
//                       <div className="flex items-center gap-4 mb-4">
//                         <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
//                           <Leaf className="h-6 w-6 text-white" />
//                         </div>
//                         <div>
//                           <p className="text-lg font-medium text-white">HIPAA Compliant</p>
//                           <p className="text-sm text-white/70">Your data is secure and protected</p>
//                         </div>
//                       </div>
//                       <ul className="space-y-2">
//                         {[
//                           "End-to-end encryption",
//                           "Secure video consultations",
//                           "Private medical records",
//                           "Compliant prescriptions",
//                         ].map((item, i) => (
//                           <li key={i} className="flex items-center text-white/80">
//                             <CheckCircle className="mr-2 h-5 w-5 text-white/80" />
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   )
// }


import Image from 'next/image'
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, Leaf, MessageSquare, Video } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - Asymmetrical layout with overlapping elements */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-8 max-w-xl">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-white mr-1"></span>
                  Trusted by 10,000+ patients
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Healthcare <span className="text-primary">Reimagined</span> for the Digital Age
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-[600px]">
                    Connect with licensed healthcare professionals from anywhere. Secure, convenient, and personalized
                    care when you need it most.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup">
                    <Button size="lg" className="rounded-full text-base px-8">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/doctors">
                    <Button size="lg" variant="outline" className="rounded-full text-base px-8">
                      Find a Doctor
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                    HIPAA Compliant
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                    24/7 Support
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                    Secure
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-border/40 overflow-hidden">
                    <img
                        src="/docimage.jpg"
                        alt="Telemedicine Consultation"
                        width={800}
                        height={600}
                        className="rounded-xl object-cover w-full aspect-[4/3]"
                      />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/40">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Leaf className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Trusted Healthcare</p>
                        <p className="text-xs text-muted-foreground">Connect with 500+ specialists nationwide</p>
                      </div>
                      <Button size="sm" className="ml-auto rounded-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Card-based layout with icons */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground w-fit">
                Simple Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground text-lg">
                Our platform makes it easy to receive quality healthcare from anywhere in just three simple steps.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Book an Appointment",
                  description: "Schedule a virtual consultation with a healthcare provider that fits your schedule.",
                  color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
                  number: "01",
                },
                {
                  icon: Video,
                  title: "Connect Virtually",
                  description: "Join your appointment through our secure video platform from any device.",
                  color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
                  number: "02",
                },
                {
                  icon: MessageSquare,
                  title: "Receive Care",
                  description: "Get diagnosis, treatment plans, prescriptions, and follow-up care all online.",
                  color: "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
                  number: "03",
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-card rounded-xl border shadow-sm p-8 h-full flex flex-col">
                    <div className="absolute -top-5 right-5 bg-primary text-primary-foreground text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center">
                      {item.number}
                    </div>
                    <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6`}>
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground flex-grow">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent p-8 md:p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                    Ready to experience healthcare reimagined?
                  </h2>
                  <p className="text-lg text-white/80 max-w-[600px]">
                    Join thousands of patients who have already discovered the convenience and quality of telemedicine
                    with MediConnect.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/signup">
                      <Button size="lg" className="rounded-full text-base px-8 bg-white text-primary hover:bg-white/90">
                        Get Started Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/doctors">
                      <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full text-base px-8 border-white text-white hover:bg-white/10"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="relative">
                    <Leaf className="h-32 w-32 text-white/20 absolute -top-10 -right-10" />
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <Leaf className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-white">HIPAA Compliant</p>
                          <p className="text-sm text-white/70">Your data is secure and protected</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "End-to-end encryption",
                          "Secure video consultations",
                          "Private medical records",
                          "Compliant prescriptions",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center text-white/80">
                            <CheckCircle className="mr-2 h-5 w-5 text-white/80" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
