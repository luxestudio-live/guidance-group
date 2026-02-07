import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, FileText, Headphones, Award, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Exam-Focused Approach",
    description:
      "Our curriculum is designed around the latest exam patterns and syllabus updates from UPSC, SSC, IBPS and more.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Learn from experienced educators, many of whom are former civil servants and subject matter experts with decades of experience.",
  },
  {
    icon: FileText,
    title: "Comprehensive Study Material",
    description:
      "Get access to meticulously crafted notes, practice papers, and current affairs compilations updated regularly.",
  },
  {
    icon: Headphones,
    title: "Personal Mentorship",
    description:
      "Every student is assigned a dedicated mentor who provides guidance on strategy, time management, and answer writing.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Consistent results year after year with thousands of selections in UPSC, SSC, Banking and Railway examinations.",
  },
  {
    icon: BarChart3,
    title: "Regular Mock Tests",
    description:
      "All India level test series with detailed performance analytics to track your progress and identify weak areas.",
  },
]

export function WhyUsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
            Why Choose Us
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Everything You Need to Crack Government Exams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            At Guidance Group, we provide a complete ecosystem for government exam
            preparation. From expert teaching to personalised mentoring, we have got you covered.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex flex-col gap-3 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
