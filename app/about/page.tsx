import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Eye,
  Heart,
  Award,
} from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Guidance Group Pvt Ltd",
  description:
    "Learn about Guidance Group Pvt Ltd's mission, values and team. India's trusted coaching institute for government exam preparation.",
}

const timeline = [
  {
    year: "2010",
    title: "Foundation",
    description:
      "Guidance Group was established in New Delhi with a small batch of 30 students preparing for UPSC examinations.",
  },
  {
    year: "2013",
    title: "Expansion to Banking & SSC",
    description:
      "Added dedicated coaching programmes for Banking (IBPS/SBI) and SSC examinations due to growing demand.",
  },
  {
    year: "2016",
    title: "1000+ Selections Milestone",
    description:
      "Crossed the 1,000 selections mark with students placed in IAS, IPS, IRS, SBI, IBPS and SSC CGL roles.",
  },
  {
    year: "2019",
    title: "Multi-Centre Operations",
    description:
      "Expanded to 5 centres across North India including Delhi, Lucknow, Jaipur, Patna and Chandigarh.",
  },
  {
    year: "2022",
    title: "Online Learning Launch",
    description:
      "Launched a comprehensive online learning platform to reach aspirants in tier-2 and tier-3 cities across India.",
  },
  {
    year: "2025",
    title: "50,000+ Students Strong",
    description:
      "Crossed 50,000 enrolled students with 12,000+ selections in various government departments and services.",
  },
]

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To provide accessible, high-quality coaching for government examinations, empowering aspirants from all backgrounds to achieve their dream of public service.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be India's most trusted and result-oriented coaching institute, known for producing well-prepared candidates who serve the nation with integrity.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity in teaching, student-first approach, continuous innovation in pedagogy, and an unwavering commitment to every aspirant's success.",
  },
]

const team = [
  {
    name: "Dr. Rajesh Verma",
    role: "Founder & Director",
    initials: "RV",
    description:
      "Former IAS officer with 20+ years of experience in public administration and coaching.",
  },
  {
    name: "Prof. Sunita Mishra",
    role: "Head - UPSC Division",
    initials: "SM",
    description:
      "MA in Political Science from JNU, 15+ years of experience in UPSC GS and Essay coaching.",
  },
  {
    name: "Mr. Amit Sharma",
    role: "Head - Banking Division",
    initials: "AS",
    description:
      "Former SBI Branch Manager with deep expertise in Quantitative Aptitude and Data Interpretation.",
  },
  {
    name: "Mrs. Kavita Singh",
    role: "Head - SSC Division",
    initials: "KS",
    description:
      "M.Sc. Mathematics from DU, specialist in SSC-level Reasoning and Quantitative Aptitude.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl text-balance">
              About Guidance Group
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
              For over 15 years, we have been shaping the future of government
              exam aspirants across India with expert coaching, personalised
              mentoring and a proven track record of success.
            </p>
          </div>
        </section>

        {/* About Image + Story */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/classroom.jpg"
                  alt="Guidance Group classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <span className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
                  Building Careers, Serving the Nation
                </h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                  <p>
                    Guidance Group Pvt Ltd was founded in 2010 by Dr. Rajesh
                    Verma, a former IAS officer, with a simple yet powerful
                    vision: to make quality government exam coaching accessible
                    to every aspirant in India, regardless of their background.
                  </p>
                  <p>
                    Starting with a single classroom in New Delhi and a batch of
                    just 30 students, we have grown into one of India&#39;s most
                    trusted coaching institutes with multiple centres and an
                    online platform reaching aspirants across the country.
                  </p>
                  <p>
                    Today, with 12,000+ successful selections and a community of
                    50,000+ students, Guidance Group stands as a testament to
                    what dedicated teaching and a student-first approach can
                    achieve.
                  </p>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <span className="font-heading text-3xl font-bold text-foreground">
                      15+
                    </span>
                    <span className="text-sm text-muted-foreground">Years</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-3xl font-bold text-foreground">
                      5
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Centres
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-3xl font-bold text-foreground">
                      100+
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Faculty Members
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="border border-border bg-card"
                >
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary">
                      <value.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-card-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
                Our Journey
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
                15+ Years of Transforming Aspirants into Officers
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
              <div className="flex flex-col gap-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex flex-col gap-4 md:flex-row md:items-center ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0
                          ? "md:text-right md:pr-12"
                          : "md:text-left md:pl-12"
                      }`}
                    >
                      <Card className="border border-border bg-card inline-block">
                        <CardContent className="p-5">
                          <span className="font-heading text-2xl font-bold text-secondary">
                            {item.year}
                          </span>
                          <h3 className="mt-1 font-heading text-lg font-semibold text-card-foreground">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden h-4 w-4 shrink-0 rounded-full border-2 border-secondary bg-card md:block" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
                Our Faculty
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
                Learn from the Best in the Industry
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <Card
                  key={member.name}
                  className="border border-border bg-card text-center"
                >
                  <CardContent className="flex flex-col items-center gap-3 p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                      <span className="font-heading text-xl font-bold text-primary-foreground">
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-semibold text-card-foreground">
                      {member.name}
                    </h3>
                    <span className="text-sm font-medium text-secondary">
                      {member.role}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
