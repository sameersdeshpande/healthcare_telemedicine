import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  Headphones,
  Leaf,
  MessageSquare,
  ShieldCheck,
  Stethoscope,
  Video,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function TelemedicineServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 w-fit mx-auto mb-4">
                <span className="flex h-2 w-2 rounded-full bg-white mr-1"></span>
                Virtual Healthcare
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Telemedicine Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Access quality healthcare from anywhere with our secure, convenient, and personalized telemedicine
                platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                <Button size="lg" className="rounded-full text-base px-8">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base px-8">
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Comprehensive Telemedicine Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Our platform offers a wide range of virtual healthcare services to meet your needs.
              </p>
            </div>

            <Tabs defaultValue="primary-care" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto">
                <TabsTrigger value="primary-care" className="py-3">
                  Primary Care
                </TabsTrigger>
                <TabsTrigger value="specialist" className="py-3">
                  Specialist Care
                </TabsTrigger>
                <TabsTrigger value="mental-health" className="py-3">
                  Mental Health
                </TabsTrigger>
                <TabsTrigger value="chronic" className="py-3">
                  Chronic Care
                </TabsTrigger>
              </TabsList>

              <TabsContent value="primary-care" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Virtual Primary Care</h3>
                    <p className="text-muted-foreground mb-6">
                      Access comprehensive primary care services from the comfort of your home. Our licensed physicians
                      can diagnose conditions, prescribe medications, and provide ongoing care.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Treatment for common illnesses and injuries",
                        "Preventive care and wellness advice",
                        "Prescription refills and management",
                        "Lab test orders and result reviews",
                        "Referrals to specialists when needed",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 rounded-full">Book Primary Care Visit</Button>
                  </div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-border/40 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Virtual Primary Care"
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specialist" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Specialist Consultations</h3>
                    <p className="text-muted-foreground mb-6">
                      Connect with board-certified specialists across multiple disciplines without the long wait times
                      for appointments.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Dermatology consultations",
                        "Cardiology follow-ups",
                        "Endocrinology management",
                        "Gastroenterology assessments",
                        "Neurology evaluations",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 rounded-full">Find a Specialist</Button>
                  </div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-border/40 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Specialist Consultations"
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mental-health" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Mental Health Services</h3>
                    <p className="text-muted-foreground mb-6">
                      Access confidential mental health support from licensed therapists, counselors, and psychiatrists
                      through secure video sessions.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Therapy and counseling sessions",
                        "Psychiatric evaluations",
                        "Medication management",
                        "Cognitive behavioral therapy",
                        "Stress and anxiety management",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 rounded-full">Connect with a Therapist</Button>
                  </div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-border/40 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mental Health Services"
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="chronic" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Chronic Condition Management</h3>
                    <p className="text-muted-foreground mb-6">
                      Ongoing care and monitoring for patients with chronic conditions, helping you manage your health
                      effectively.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Diabetes management and monitoring",
                        "Hypertension control",
                        "Asthma and COPD care",
                        "Heart disease management",
                        "Regular check-ins and adjustments",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 rounded-full">Start Chronic Care Program</Button>
                  </div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-border/40 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Chronic Condition Management"
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">How Telemedicine Works</h2>
              <p className="text-lg text-muted-foreground">
                Our simple process makes it easy to receive quality healthcare from anywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Calendar,
                  title: "Schedule Your Appointment",
                  description: "Choose a healthcare provider and select a convenient time for your virtual visit.",
                  color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
                  number: "01",
                },
                {
                  icon: Video,
                  title: "Join Your Virtual Visit",
                  description: "Connect through our secure video platform from any device with internet access.",
                  color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
                  number: "02",
                },
                {
                  icon: FileText,
                  title: "Receive Care & Follow-up",
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

        {/* Benefits */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Benefits of Telemedicine</h2>
              <p className="text-lg text-muted-foreground">
                Discover why thousands of patients choose our telemedicine services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Clock,
                  title: "Convenience & Accessibility",
                  description: "Access healthcare from anywhere, eliminating travel time and waiting rooms.",
                },
                {
                  icon: ShieldCheck,
                  title: "Privacy & Security",
                  description: "HIPAA-compliant platform ensures your medical information remains confidential.",
                },
                {
                  icon: CreditCard,
                  title: "Cost-Effective Care",
                  description:
                    "Save money on transportation, parking, and childcare costs associated with in-person visits.",
                },
                {
                  icon: MessageSquare,
                  title: "Improved Communication",
                  description: "Direct messaging with your healthcare provider for quick questions and follow-ups.",
                },
                {
                  icon: Stethoscope,
                  title: "Quality Healthcare",
                  description:
                    "Connect with board-certified healthcare professionals with expertise in various specialties.",
                },
                {
                  icon: Headphones,
                  title: "24/7 Support",
                  description: "Access to medical advice and support around the clock for urgent health concerns.",
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">What Our Patients Say</h2>
              <p className="text-lg text-muted-foreground">
                Read testimonials from patients who have experienced our telemedicine services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote:
                    "The virtual consultation was so convenient. I got the care I needed without having to take time off work or arrange childcare.",
                  name: "Sarah Johnson",
                  role: "Patient",
                },
                {
                  quote:
                    "I was skeptical about telemedicine at first, but my experience was excellent. The doctor was thorough and attentive, just like an in-person visit.",
                  name: "Michael Chen",
                  role: "Patient",
                },
                {
                  quote:
                    "Managing my diabetes through regular telemedicine check-ins has been life-changing. I feel more in control of my health than ever before.",
                  name: "Emily Rodriguez",
                  role: "Chronic Care Patient",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Leaf className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our telemedicine services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What conditions can be treated through telemedicine?",
                  answer:
                    "Many conditions can be effectively diagnosed and treated through telemedicine, including common illnesses like colds, flu, allergies, skin conditions, mental health concerns, and chronic condition management. However, some conditions may require in-person care, especially if physical examination or testing is necessary.",
                },
                {
                  question: "Is telemedicine covered by insurance?",
                  answer:
                    "Many insurance plans now cover telemedicine services. Coverage varies by provider and plan. We recommend checking with your insurance provider about your specific coverage details before scheduling an appointment.",
                },
                {
                  question: "How secure is the telemedicine platform?",
                  answer:
                    "Our telemedicine platform is fully HIPAA-compliant and uses end-to-end encryption to ensure your personal health information remains private and secure. We implement strict security protocols to protect your data at all times.",
                },
                {
                  question: "What technology do I need for a telemedicine appointment?",
                  answer:
                    "You'll need a device with internet access, a camera, and a microphone. This can be a smartphone, tablet, laptop, or desktop computer. You'll also need a stable internet connection. Our platform works with most modern web browsers, or you can download our mobile app.",
                },
                {
                  question: "Can doctors prescribe medications through telemedicine?",
                  answer:
                    "Yes, healthcare providers can prescribe many medications during telemedicine visits. The prescription will be sent electronically to your preferred pharmacy. However, there are some restrictions on prescribing controlled substances through telemedicine depending on state regulations.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
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
                    <Link href="/services">
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
                          <ShieldCheck className="h-6 w-6 text-white" />
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

