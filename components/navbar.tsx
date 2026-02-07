"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { BookOpen, Menu, Phone, User } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold leading-tight text-foreground">
              Guidance Group
            </span>
            <span className="text-xs leading-tight text-muted-foreground">
              Pvt Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Login + Mobile */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden border-primary text-primary hover:bg-primary hover:text-primary-foreground sm:inline-flex bg-transparent"
          >
            <Link href="/login">
              <User className="mr-2 h-4 w-4" />
              Student Login
            </Link>
          </Button>
          <Button
            asChild
            className="hidden bg-secondary text-secondary-foreground hover:bg-secondary/90 sm:inline-flex"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Enquire Now
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 pt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                    <BookOpen className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-heading text-lg font-bold text-foreground">
                    Guidance Group
                  </span>
                </Link>
                <nav
                  className="flex flex-col gap-1"
                  aria-label="Mobile navigation"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Link href="/login" onClick={() => setOpen(false)}>
                      <User className="mr-2 h-4 w-4" />
                      Student Login
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      <Phone className="mr-2 h-4 w-4" />
                      Enquire Now
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
