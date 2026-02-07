import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, IndianRupee } from "lucide-react"

const courses = [
  {
    title: "UPSC Civil Services",
    tag: "Most Popular",
    duration: "18 Months",
    price: "9,50,000",
    description:
      "Our elite flagship programme with one-on-one mentorship from former IAS/IPS officers covering Prelims, Mains and Interview.",
  },
  {
    title: "SSC CGL",
    tag: "Fast Track",
    duration: "10 Months",
    price: "3,50,000",
    description:
      "A meticulously structured programme built around proven pedagogy of concept building, shortcut mastery and relentless practice.",
  },
  {
    title: "Banking (IBPS PO/Clerk)",
    tag: "High Demand",
    duration: "10 Months",
    price: "4,00,000",
    description:
      "An intensive programme covering every stage from Prelims to the final interview with exclusive banking awareness modules.",
  },
  {
    title: "Railway (RRB NTPC)",
    tag: "New Batch",
    duration: "10 Months",
    price: "3,50,000",
    description:
      "India's most comprehensive Railway NTPC programme with a week-by-week study plan and rigorous milestone testing.",
  },
]

export function CoursesPreview() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Our Courses
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Popular Exam Coaching Programmes
            </h2>
          </div>
          <Button asChild variant="outline" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Card
              key={course.title}
              className="border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <Badge className="w-fit bg-secondary/10 text-secondary hover:bg-secondary/20 border-0">
                  {course.tag}
                </Badge>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {course.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-0.5 font-heading text-lg font-bold text-foreground">
                    <IndianRupee className="h-4 w-4" />
                    {course.price}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
