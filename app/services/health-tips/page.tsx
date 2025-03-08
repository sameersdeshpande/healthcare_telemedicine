import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckSquare,
  Clock,
  Filter,
  Heart,
  Leaf,
  Moon,
  Pill,
  Search,
  Shield,
  Smile,
  Snowflake,
  Sun,
  Users,
  Utensils,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function HealthTipsPage() {
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
                Wellness Resources
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Health Tips & Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Expert advice and evidence-based resources to help you maintain optimal health and wellness.
              </p>
              <div className="relative max-w-md mx-auto mt-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input type="search" placeholder="Search health topics..." className="pl-10 h-12 rounded-full" />
                <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 px-4">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Health Tips */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">Featured Health Tips</h2>
                <p className="text-lg text-muted-foreground">
                  Curated advice from healthcare professionals to improve your wellbeing.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Link href="/health-tips/all">
                  <Button variant="ghost" size="sm" className="rounded-full">
                    View All
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "10 Simple Habits for Better Sleep",
                  description: "Improve your sleep quality with these evidence-based tips for a restful night.",
                  image: "/placeholder.svg?height=200&width=400",
                  category: "Sleep",
                  readTime: "5 min read",
                  icon: Moon,
                },
                {
                  title: "Nutrition Basics: Building a Balanced Plate",
                  description: "Learn how to create nutritionally balanced meals to fuel your body properly.",
                  image: "/placeholder.svg?height=200&width=400",
                  category: "Nutrition",
                  readTime: "7 min read",
                  icon: Utensils,
                },
                {
                  title: "Stress Management Techniques That Actually Work",
                  description: "Effective strategies to reduce stress and improve your mental wellbeing.",
                  image: "/placeholder.svg?height=200&width=400",
                  category: "Mental Health",
                  readTime: "6 min read",
                  icon: Smile,
                },
              ].map((article, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary/90 hover:bg-primary text-white">{article.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{article.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {article.readTime}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Health Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Health Categories</h2>
              <p className="text-lg text-muted-foreground">
                Explore resources by health topic to find the information you need.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-auto">
                <TabsTrigger value="all" className="py-3">
                  All Topics
                </TabsTrigger>
                <TabsTrigger value="nutrition" className="py-3">
                  Nutrition
                </TabsTrigger>
                <TabsTrigger value="fitness" className="py-3">
                  Fitness
                </TabsTrigger>
                <TabsTrigger value="mental" className="py-3">
                  Mental Health
                </TabsTrigger>
                <TabsTrigger value="preventive" className="py-3">
                  Preventive Care
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Nutrition", icon: Utensils, count: 24 },
                    { name: "Fitness", icon: Zap, count: 18 },
                    { name: "Mental Health", icon: Smile, count: 15 },
                    { name: "Sleep", icon: Moon, count: 12 },
                    { name: "Heart Health", icon: Heart, count: 9 },
                    { name: "Seasonal Wellness", icon: Sun, count: 14 },
                    { name: "Family Health", icon: Users, count: 11 },
                    { name: "Preventive Care", icon: Shield, count: 16 },
                  ].map((category, index) => (
                    <Link href={`/health-tips/category/${category.name.toLowerCase().replace(" ", "-")}`} key={index}>
                      <div className="bg-card hover:bg-accent/50 transition-colors rounded-xl p-6 text-center border shadow-sm h-full flex flex-col items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <category.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-medium mb-1">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.count} articles</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              {/* Other tab contents would be similar but filtered by category */}
              <TabsContent value="nutrition" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Nutrition Fundamentals</CardTitle>
                      <CardDescription>Essential knowledge for a balanced diet</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <Link href="#" className="hover:text-primary transition-colors">
                            Understanding Macronutrients
                          </Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <Link href="#" className="hover:text-primary transition-colors">
                            Portion Control Guide
                          </Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <Link href="#" className="hover:text-primary transition-colors">
                            Hydration Importance
                          </Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <Link href="#" className="hover:text-primary transition-colors">
                            Reading Nutrition Labels
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <div className="bg-card rounded-xl border shadow-sm p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Featured Resource</h3>
                          <p className="text-sm text-muted-foreground">Downloadable meal planning guide</p>
                        </div>
                      </div>
                      <Button className="w-full">Download Guide</Button>
                    </div>

                    <div className="bg-card rounded-xl border shadow-sm p-6">
                      <h3 className="font-medium mb-3">Popular Nutrition Topics</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Meal Prep", "Plant-Based", "Superfoods", "Anti-Inflammatory", "Gut Health"].map((tag, i) => (
                          <Badge key={i} variant="outline" className="hover:bg-primary/10 cursor-pointer">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Seasonal Health Tips */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Seasonal Health Tips</h2>
              <p className="text-lg text-muted-foreground">
                Stay healthy year-round with our seasonal wellness advice.
              </p>
            </div>

            <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                <div
                  className="w-full h-full bg-contain bg-no-repeat bg-right-top"
                  style={{ backgroundImage: "url('/placeholder.svg?height=300&width=300')" }}
                ></div>
              </div>
              <div className="relative z-10 max-w-2xl">
                <Badge className="mb-4 bg-primary/90 hover:bg-primary text-white">Current Season</Badge>
                <h3 className="text-2xl font-bold mb-4">Spring Wellness Guide</h3>
                <p className="text-muted-foreground mb-6">
                  As nature renews itself, it's the perfect time to refresh your health routines. Our spring wellness
                  guide covers seasonal allergies, immune support, and outdoor activity recommendations.
                </p>
                <Button className="rounded-full">
                  Read the Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  season: "Summer",
                  title: "Beat the Heat: Summer Health Essentials",
                  description: "Stay safe and healthy during hot weather with these essential tips.",
                  icon: Sun,
                },
                {
                  season: "Fall",
                  title: "Autumn Wellness: Transitioning to Cooler Weather",
                  description: "Prepare your body and mind for the changing seasons with our fall health guide.",
                  icon: Leaf,
                },
                {
                  season: "Winter",
                  title: "Winter Wellness: Staying Healthy During Cold Months",
                  description: "Combat cold and flu season with our comprehensive winter health strategies.",
                  icon: Snowflake,
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View {item.season} Guide
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Health Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Health Resources</h2>
              <p className="text-lg text-muted-foreground">
                Downloadable guides, tools, and resources to support your health journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Meal Planning Templates",
                  description: "Printable templates to help you plan balanced, nutritious meals for the week.",
                  icon: Calendar,
                  buttonText: "Download Templates",
                },
                {
                  title: "Home Workout Guide",
                  description: "No-equipment exercises you can do at home to stay fit and active.",
                  icon: Zap,
                  buttonText: "Get Workout Guide",
                },
                {
                  title: "Stress Management Workbook",
                  description: "Interactive workbook with exercises to help identify and manage stress triggers.",
                  icon: BookOpen,
                  buttonText: "Download Workbook",
                },
                {
                  title: "Sleep Tracker",
                  description: "Track your sleep patterns to identify areas for improvement in your sleep hygiene.",
                  icon: Moon,
                  buttonText: "Get Sleep Tracker",
                },
                {
                  title: "Medication Management Chart",
                  description: "Keep track of your medications, dosages, and schedules with this printable chart.",
                  icon: Pill,
                  buttonText: "Download Chart",
                },
                {
                  title: "Preventive Care Checklist",
                  description: "Age-appropriate screening and preventive care recommendations.",
                  icon: CheckSquare,
                  buttonText: "Get Checklist",
                },
              ].map((resource, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{resource.buttonText}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground w-fit mx-auto mb-4">
                Stay Updated
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Subscribe to Our Health Newsletter
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest health tips, seasonal wellness advice, and exclusive resources delivered straight to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="rounded-full" />
                <Button className="rounded-full">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

