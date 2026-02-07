import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-students.svg"
          alt="Students studying at Guidance Group"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center lg:px-8 lg:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2">
          <GraduationCap className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">
            {"Trusted by 50,000+ Students Across India"}
          </span>
        </div>
        <h1 className="font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
          Your Gateway to a{" "}
          <span className="text-secondary">Government Career</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
          Guidance Group Pvt Ltd is India's premier coaching institute for UPSC,
          SSC, Banking, Railways and State PCS examinations. Expert faculty,
          proven results, and personalised guidance for every aspirant.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8"
          >
            <Link href="/courses">
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 bg-transparent"
          >
            <Link href="/about#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
