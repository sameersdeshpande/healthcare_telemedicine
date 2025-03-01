import { Calendar, Leaf, Video } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        {/* Section Title and Description */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="max-w-[700px] text-muted-foreground text-lg">
            Explore the wide range of healthcare services we provide, all accessible online with just a few clicks.
          </p>
        </div>

        {/* Grid Layout for Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Calendar,
              title: "Telemedicine Consultations",
              description: "Access healthcare professionals remotely through secure video consultations.",
              color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
              link: "/services/telemedicine",
            },
            {
              icon: Leaf,
              title: "Health Monitoring",
              description: "Track your health metrics like blood pressure, heart rate, and more, from home.",
              color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
              link: "/services/health-monitoring",
            },
            {
              icon: Video,
              title: "Mental Health Support",
              description: "Get counseling and support for mental wellness from licensed professionals.",
              color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400",
              link: "/services/mental-health",
            },
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-card rounded-xl border shadow-sm p-8 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground flex-grow">{item.description}</p>
                <Link href={item.link} className="text-primary mt-4 inline-block text-sm font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
