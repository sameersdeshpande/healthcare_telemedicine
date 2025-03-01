import Link from "next/link"
import { Mail, MapPin, Phone, Leaf } from "lucide-react"

/**
 * Footer component
 *
 * This component provides the footer for the telemedicine platform.
 * It includes:
 * - Copyright information
 * - Navigation links
 * - Contact information
 * - Legal links
 *
 * Usage:
 * <Footer />
 */
export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">HealX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting patients with healthcare professionals through secure, convenient telemedicine services.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">
                  How It Works
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">
                  Specialties
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">
                  For Healthcare Providers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Medical Plaza, Suite 456
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">support@mediconnect.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">
                  HIPAA Compliance
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 HealX. All rights reserved.</p>
            <div className="flex gap-6">
              <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="#">
                Cookie Settings
              </Link>
              <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="#">
                Do Not Sell My Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

