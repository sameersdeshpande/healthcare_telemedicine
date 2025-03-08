import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Brain,
  Calendar,
  CheckCircle,
  FileText,
  Heart,
  Leaf,
  MessageSquare,
  Phone,
  ShieldCheck,
  Smile,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function MentalHealthServicesPage() {
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
                Mental Wellness
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Mental Health Support
              </h1>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Compassionate, confidential mental health services to support your emotional wellbeing and help you
                thrive.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Our Mental Health Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive support for a wide range of mental health concerns through secure virtual care.
              </p>
            </div>

            <Tabs defaultValue="therapy" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto">
                <TabsTrigger value="therapy" className="py-3">
                  Therapy
                </TabsTrigger>
                <TabsTrigger value="psychiatry" className="py-3">
                  Psychiatry
                </TabsTrigger>
                <TabsTrigger value="groups" className="py-3">
                  Support Groups
                </TabsTrigger>
                <TabsTrigger value="self-care" className="py-3">
                  Self-Care Tools
                </TabsTrigger>
              </TabsList>

              <TabsContent value="therapy" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Individual Therapy</h3>
                    <p className="text-muted-foreground mb-6">
                      Connect with licensed therapists who specialize in various therapeutic approaches to address your
                      unique needs and concerns.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Cognitive Behavioral Therapy (CBT)",
                        "Acceptance and Commitment Therapy (ACT)",
                        "Mindfulness-Based Cognitive Therapy",
                        "Solution-Focused Brief Therapy",
                        "Trauma-Informed Care",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 rounded-full">Find a Therapist</Button>
                  </div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-border/40 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Virtual Therapy Session"
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="psychiatry" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Psychiatric Care</h3>
                    <p className="text-muted-foreground mb-6">
                      Receive evaluation, diagnosis, and medication management from board-certified psychiatrists for
                      conditions that may benefit from medical treatment.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Comprehensive psychiatric evaluations",
                        "Medication prescription and management",
                        "Regular follow-up appointments",
                        "Coordination with therapists",
                        "Treatment for various mental health conditions",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 rounded-full">Schedule Psychiatric Consultation</Button>
                  </div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-border/40 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Psychiatric Consultation"
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="groups" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Support Groups</h3>
                    <p className="text-muted-foreground mb-6">
                      Join virtual support groups facilitated by mental health professionals where you can connect with
                      others experiencing similar challenges.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Anxiety and stress management groups",
                        "Depression support circles",
                        "Grief and loss processing groups",
                        "LGBTQ+ affirming spaces",
                        "Caregiver support networks",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 rounded-full">Browse Support Groups</Button>
                  </div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-border/40 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Virtual Support Group"
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="self-care" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Self-Care Resources</h3>
                    <p className="text-muted-foreground mb-6">
                      Access digital tools and resources to support your mental health journey between professional
                      sessions.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Guided meditation and mindfulness exercises",
                        "Mood tracking and journaling tools",
                        "Sleep improvement resources",
                        "Stress reduction techniques",
                        "Educational materials about mental health",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 rounded-full">Explore Self-Care Tools</Button>
                  </div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-border/40 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Self-Care Resources"
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

        {/* Conditions We Treat */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Conditions We Treat</h2>
              <p className="text-lg text-muted-foreground">
                Our mental health professionals are experienced in treating a wide range of conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Anxiety Disorders",
                  description: "Including generalized anxiety, social anxiety, panic disorder, and specific phobias.",
                  icon: Brain,
                },
                {
                  title: "Mood Disorders",
                  description: "Such as depression, bipolar disorder, and persistent depressive disorder.",
                  icon: Heart,
                },
                {
                  title: "Trauma & PTSD",
                  description: "Support for processing traumatic experiences and managing post-traumatic stress.",
                  icon: ShieldCheck,
                },
                {
                  title: "Stress Management",
                  description: "Tools and techniques to cope with life stressors and prevent burnout.",
                  icon: Leaf,
                },
                {
                  title: "Relationship Issues",
                  description: "Help navigating challenges in personal and professional relationships.",
                  icon: Users,
                },
                {
                  title: "Self-Esteem & Identity",
                  description: "Support for building self-worth and exploring questions of identity and purpose.",
                  icon: Smile,
                },
              ].map((condition, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <condition.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{condition.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{condition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Therapists */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Meet Our Mental Health Professionals
              </h2>
              <p className="text-lg text-muted-foreground">
                Our team of licensed therapists and psychiatrists are committed to providing compassionate,
                evidence-based care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  title: "Licensed Psychologist",
                  specialties: ["Anxiety", "Depression", "Trauma"],
                  bio: "Dr. Johnson specializes in cognitive behavioral therapy with over 10 years of experience helping clients overcome anxiety and depression.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Dr. Michael Chen",
                  title: "Psychiatrist",
                  specialties: ["Medication Management", "Mood Disorders", "ADHD"],
                  bio: "Board-certified psychiatrist with expertise in medication management for various mental health conditions.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Jessica Rodriguez, LMFT",
                  title: "Licensed Marriage & Family Therapist",
                  specialties: ["Relationships", "Family Dynamics", "Life Transitions"],
                  bio: "Jessica helps individuals and couples navigate relationship challenges and major life transitions.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "David Wilson, LCSW",
                  title: "Licensed Clinical Social Worker",
                  specialties: ["Trauma", "LGBTQ+ Issues", "Grief"],
                  bio: "David provides trauma-informed care with a focus on helping clients process grief and loss.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Dr. Aisha Patel",
                  title: "Clinical Psychologist",
                  specialties: ["Cultural Identity", "Stress Management", "Self-Esteem"],
                  bio: "Dr. Patel specializes in culturally-sensitive therapy approaches that honor diverse backgrounds and experiences.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Robert Kim, LPC",
                  title: "Licensed Professional Counselor",
                  specialties: ["Anxiety", "Men's Issues", "Work-Life Balance"],
                  bio: "Robert helps clients develop practical strategies for managing anxiety and achieving better work-life balance.",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((therapist, index) => (
                <Card key={index} className="border-none shadow-md overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={therapist.image || "/placeholder.svg"}
                      alt={therapist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{therapist.name}</CardTitle>
                    <CardDescription>{therapist.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {therapist.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">{therapist.bio}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book Appointment</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" className="rounded-full">
                View All Providers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                How Our Mental Health Services Work
              </h2>
              <p className="text-lg text-muted-foreground">
                Getting started with virtual mental health care is simple and convenient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Complete Assessment",
                  description:
                    "Fill out a brief questionnaire to help us understand your needs and match you with the right provider.",
                  icon: FileText,
                  number: "01",
                },
                {
                  title: "Choose Your Provider",
                  description:
                    "Browse profiles of therapists and psychiatrists who specialize in your areas of concern.",
                  icon: Users,
                  number: "02",
                },
                {
                  title: "Schedule Session",
                  description: "Book your first appointment at a time that works for your schedule.",
                  icon: Calendar,
                  number: "03",
                },
                {
                  title: "Attend Virtual Visit",
                  description: "Connect with your provider through our secure video platform from any device.",
                  icon: MessageSquare,
                  number: "04",
                },
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-card rounded-xl border shadow-sm p-8 h-full flex flex-col">
                    <div className="absolute -top-5 right-5 bg-primary text-primary-foreground text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground flex-grow">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance & Pricing */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Insurance & Pricing</h2>
              <p className="text-lg text-muted-foreground">
                We strive to make mental health care accessible and affordable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Insurance Coverage</CardTitle>
                  <CardDescription>We accept many major insurance plans</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealthcare", "Medicare", "And many more"].map(
                      (plan, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                          {plan}
                        </li>
                      ),
                    )}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    We'll verify your benefits before your first appointment and explain any costs you may be
                    responsible for.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Verify Insurance
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Self-Pay Options</CardTitle>
                  <CardDescription>Transparent pricing for those without insurance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Initial Therapy Consultation</span>
                      <span className="font-bold">$120</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Therapy Session (45-50 min)</span>
                      <span className="font-bold">$90-110</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Initial Psychiatric Evaluation</span>
                      <span className="font-bold">$200</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Medication Management (20-30 min)</span>
                      <span className="font-bold">$100-150</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    We offer sliding scale fees based on financial need. Ask about our payment plans and reduced fee
                    options.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn About Financial Assistance</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our mental health services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Is online therapy as effective as in-person therapy?",
                    answer:
                      "Research shows that online therapy can be just as effective as in-person therapy for many mental health conditions. Virtual therapy offers the same evidence-based approaches while providing greater convenience and accessibility. Some clients even find it easier to open up from the comfort of their own space.",
                  },
                  {
                    question: "How do I know if I need therapy or psychiatry?",
                    answer:
                      "Therapy focuses on talking through problems and developing coping strategies, while psychiatry involves medical evaluation and potentially medication. Many people benefit from therapy alone, while others may need a combination of both. During your initial assessment, we can help determine which services would be most beneficial for your specific situation.",
                  },
                  {
                    question: "How private and secure are the virtual sessions?",
                    answer:
                      "We take your privacy very seriously. Our platform is fully HIPAA-compliant with end-to-end encryption to ensure your sessions remain confidential. We never record sessions, and all your health information is stored securely according to strict privacy standards.",
                  },
                  {
                    question: "How long will I need to be in therapy?",
                    answer:
                      "The duration of therapy varies greatly depending on your individual needs, goals, and the type of challenges you're facing. Some people benefit from short-term therapy (8-12 sessions) focused on specific issues, while others find value in longer-term support. Your provider will discuss recommendations during your sessions and regularly review progress with you.",
                  },
                  {
                    question: "Can I switch therapists if I don't feel it's a good match?",
                    answer:
                      "Absolutely. The relationship between you and your therapist is crucial for effective treatment. If you don't feel comfortable or connected with your provider, you can request to switch at any time. We want to ensure you find the right fit for your needs and preferences.",
                  },
                  {
                    question: "What should I do in a mental health emergency?",
                    answer:
                      "Our telehealth services are not designed for emergency situations. If you're experiencing a mental health crisis or having thoughts of harming yourself or others, please call 988 (Suicide & Crisis Lifeline), go to your nearest emergency room, or call 911 immediately.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Crisis Resources */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Crisis Resources</h2>
              <p className="text-lg text-muted-foreground">
                If you're experiencing a mental health emergency, please use these resources for immediate help.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-6 border border-primary/20">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">988 Suicide & Crisis Lifeline</h3>
                    <p className="text-sm text-muted-foreground">Call or text 988 (available 24/7)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Crisis Text Line</h3>
                    <p className="text-sm text-muted-foreground">Text HOME to 741741 (available 24/7)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">National Domestic Violence Hotline</h3>
                    <p className="text-sm text-muted-foreground">Call 1-800-799-7233 (available 24/7)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Trevor Project (LGBTQ+ Youth)</h3>
                    <p className="text-sm text-muted-foreground">Call 1-866-488-7386 (available 24/7)</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  In case of immediate danger to yourself or others, please call 911 or go to your nearest emergency
                  room.
                </p>
                <Button variant="outline" className="rounded-full">
                  Download Crisis Resources PDF
                </Button>
              </div>
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
                    Take the first step toward better mental health
                  </h2>
                  <p className="text-lg text-white/80 max-w-[600px]">
                    Our compassionate mental health professionals are ready to support you on your journey to wellness.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/signup">
                      <Button size="lg" className="rounded-full text-base px-8 bg-white text-primary hover:bg-white/90">
                        Schedule Your First Session
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
                          <Brain className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-white">Your Mental Health Matters</p>
                          <p className="text-sm text-white/70">Confidential, professional support</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "Licensed mental health professionals",
                          "Secure, private virtual sessions",
                          "Flexible scheduling options",
                          "Evidence-based treatment approaches",
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

