import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Officer",
    initials: "PS",
    text: "Guidance Group completely transformed my UPSC preparation. The faculty's dedication and personalised mentoring helped me achieve my dream rank. I owe my success to their structured approach.",
  },
  {
    name: "Rohit Kumar",
    role: "SBI PO Selected",
    initials: "RK",
    text: "The banking course at Guidance Group is outstanding. The mock tests were very close to the actual exam pattern, and the faculty always made time for doubt clearing sessions.",
  },
  {
    name: "Anita Patel",
    role: "SSC CGL Selected",
    initials: "AP",
    text: "I joined Guidance Group for SSC CGL coaching and cleared the exam in my very first attempt. Their study material is comprehensive and the test series helped me manage my time effectively.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
            Student Success Stories
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Hear From Our Toppers
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border border-border bg-card"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={`star-${testimonial.name}-${i}`}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {`"${testimonial.text}"`}
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <Avatar className="h-10 w-10 bg-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground font-heading text-sm font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
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
