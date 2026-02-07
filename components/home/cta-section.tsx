import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
          Ready to Start Your Government Exam Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
          Join thousands of successful aspirants who have achieved their dream of a
          government career with Guidance Group.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8"
          >
            <Link href="/courses">
              Browse Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
