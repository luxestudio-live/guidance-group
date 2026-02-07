import Link from "next/link"
import { BookOpen, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <BookOpen className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight">
                  Guidance Group
                </span>
                <span className="text-xs leading-tight text-primary-foreground/70">Pvt Ltd</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Empowering aspirants across India to achieve their dream of a government career
              through expert coaching and comprehensive study material.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link href="/" className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary">
                Home
              </Link>
              <Link href="/courses" className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary">
                Our Courses
              </Link>
              <Link href="/about" className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary">
                Contact Us
              </Link>
              <Link href="/login" className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary">
                Student Login
              </Link>
            </nav>
          </div>

          {/* Courses */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Popular Courses
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Popular courses">
              <Link href="/courses" className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary">
                UPSC Civil Services
              </Link>
              <Link href="/courses" className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary">
                SSC CGL / CHSL
              </Link>
              <Link href="/courses" className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary">
                Banking (IBPS / SBI)
              </Link>
              <Link href="/courses" className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary">
                Railway (RRB NTPC)
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact Info
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  123, Rajendra Place, New Delhi - 110008
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/80">info@guidancegroup.online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            {"© 2026 Guidance Group Pvt Ltd. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
