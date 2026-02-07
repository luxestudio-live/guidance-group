import { Users, Trophy, BookOpen, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Students Enrolled",
  },
  {
    icon: Trophy,
    value: "12,000+",
    label: "Selections in Govt Jobs",
  },
  {
    icon: BookOpen,
    value: "25+",
    label: "Courses Offered",
  },
  {
    icon: Clock,
    value: "15+",
    label: "Years of Excellence",
  },
]

export function StatsSection() {
  return (
    <section className="border-b border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <stat.icon className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-heading text-3xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
