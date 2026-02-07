import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  IndianRupee,
  CheckCircle2,
  GraduationCap,
  Users,
  FileText,
  BookOpen,
  Landmark,
  Train,
  Building2,
  Shield,
  Scale,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Courses - Guidance Group Pvt Ltd",
  description:
    "Explore our comprehensive courses for UPSC, SSC, Banking, Railways, State PCS and Defence examinations. Expert faculty and proven results.",
}

const courses = [
  {
    icon: Landmark,
    title: "UPSC Civil Services (IAS/IPS/IFS)",
    tag: "Most Popular",
    duration: "18 Months",
    price: "9,50,000",
    description:
      "Our elite flagship programme crafted to transform aspirants into top-ranking civil servants. This all-inclusive course covers every dimension of UPSC CSE - from Prelims and Mains to a rigorous personality test preparation - with one-on-one mentorship from former IAS/IPS officers and subject-matter experts who have themselves cleared the exam.",
    highlights: [
      "Complete GS + CSAT Prelims coverage",
      "Mains answer writing practice (300+ sessions)",
      "Optional subject coaching by top faculty",
      "Mock interviews with retired UPSC board members",
      "Daily current affairs + monthly magazine",
      "All India test series with detailed ranking & analysis",
    ],
  },
  {
    icon: FileText,
    title: "SSC CGL (Combined Graduate Level)",
    tag: "Fast Track",
    duration: "10 Months",
    price: "3,50,000",
    description:
      "A meticulously structured programme that leaves nothing to chance. Our SSC CGL course is built around a proven pedagogy of concept building, shortcut mastery and relentless practice, ensuring students consistently outperform lakhs of competitors across all four tiers of the examination.",
    highlights: [
      "Tier I to Tier IV complete coverage",
      "Shortcut methods for Quant & Reasoning",
      "English language mastery module",
      "Weekly full-length mock tests with ranking",
      "Previous 15 years paper analysis",
      "Unlimited doubt clearing sessions",
    ],
  },
  {
    icon: FileText,
    title: "SSC CHSL",
    tag: "Beginner Friendly",
    duration: "8 Months",
    price: "2,50,000",
    description:
      "A thorough and result-oriented programme designed for students entering the competitive exam arena for the first time. We build your foundation from scratch and rapidly advance you to an exam-ready level with structured modules, daily practice sets and personalised performance tracking.",
    highlights: [
      "Complete Tier I & Tier II preparation",
      "Typing and skill test guidance",
      "Reasoning & General Awareness classes",
      "Weekly sectional & full-length test series",
      "Descriptive writing masterclass",
      "AI-powered performance tracking dashboard",
    ],
  },
  {
    icon: Building2,
    title: "Banking (IBPS PO / SBI PO)",
    tag: "High Demand",
    duration: "10 Months",
    price: "4,00,000",
    description:
      "Designed for aspirants who want to enter India's premier banking institutions as officers. This intensive programme covers every stage from Prelims to the final interview round, with exclusive modules on data interpretation, financial awareness and personality development that give our students a decisive edge over the competition.",
    highlights: [
      "Prelims & Mains complete coverage",
      "Data Interpretation & Analysis special classes",
      "Computer knowledge & technology module",
      "Banking awareness & financial GK mastery",
      "100+ sectional & full-length mock tests",
      "Group discussion & interview preparation",
    ],
  },
  {
    icon: Building2,
    title: "Banking (IBPS Clerk / SBI Clerk)",
    tag: "Popular",
    duration: "8 Months",
    price: "3,00,000",
    description:
      "A power-packed programme for clerical cadre aspirants that focuses on building speed, accuracy and exam temperament. With dedicated faculty, daily practice sessions and a scientifically designed test series, our students consistently secure top ranks in IBPS Clerk, SBI Clerk and RRB Office Assistant exams.",
    highlights: [
      "Prelims & Mains in-depth syllabus coverage",
      "Speed & accuracy improvement bootcamp",
      "English language special batch",
      "General Awareness capsule with daily quizzes",
      "Online test series (100+ tests with analytics)",
      "Dedicated doubt resolution support",
    ],
  },
  {
    icon: Train,
    title: "Railway (RRB NTPC)",
    tag: "New Batch",
    duration: "10 Months",
    price: "3,50,000",
    description:
      "India's most comprehensive Railway NTPC programme that covers every stage of the recruitment process. Our subject-matter experts break down the vast syllabus into a manageable, week-by-week study plan with rigorous testing at every milestone, so you walk into the exam hall with absolute confidence.",
    highlights: [
      "CBT 1 & CBT 2 complete coaching",
      "Mathematics & General Intelligence masterclass",
      "General Awareness & Science in-depth modules",
      "Previous 10 years paper practice sessions",
      "Bi-weekly mock tests with detailed analysis",
      "Physical efficiency test preparation guidance",
    ],
  },
  {
    icon: Train,
    title: "Railway Group D",
    tag: "Value Programme",
    duration: "6 Months",
    price: "2,00,000",
    description:
      "A focused and high-intensity programme that takes students from fundamentals to exam-readiness in record time. Every concept is taught with clarity, every topic backed by extensive practice material, and every student tracked individually to ensure no one is left behind in the race for a coveted Railway Group D position.",
    highlights: [
      "Complete syllabus coverage from basics to advanced",
      "Mathematics taught from fundamentals",
      "General Science special classes by PhD faculty",
      "Current Affairs capsule with weekly updates",
      "Mock tests with personalised analysis reports",
      "Physical test preparation & fitness guidance",
    ],
  },
  {
    icon: Scale,
    title: "State PCS Examinations",
    tag: "Regional",
    duration: "14 Months",
    price: "7,00,000",
    description:
      "A premium, state-specific coaching programme tailored for aspirants targeting UPPSC, MPPSC, BPSC, RPSC and other State Public Service Commission exams. Our regional experts bring deep knowledge of state-level patterns, question trends and scoring strategies that generic coaching simply cannot offer.",
    highlights: [
      "State-specific syllabus & pattern coverage",
      "General Studies & regional GK by local experts",
      "Mains answer writing practice (200+ sessions)",
      "Interview guidance with state-level panelists",
      "State-level test series with peer ranking",
      "Current affairs with dedicated state focus",
    ],
  },
  {
    icon: Shield,
    title: "Defence (CDS / NDA / AFCAT)",
    tag: "Specialised",
    duration: "12 Months",
    price: "5,50,000",
    description:
      "An elite training programme for those who dream of serving the nation in uniform. Beyond rigorous academic coaching for CDS, NDA and AFCAT written exams, this programme includes an immersive SSB preparation module led by retired defence officers, physical fitness training and personality grooming sessions that build the officer-like qualities the Services Selection Board looks for.",
    highlights: [
      "Written exam complete coaching by defence experts",
      "SSB interview preparation with retired officers",
      "Physical fitness training & guidance",
      "Group discussion & lecturette practice",
      "Personality development & OLQ building sessions",
      "Mock SSB conducted by former board members",
    ],
  },
]

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2">
              <GraduationCap className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">{"25+ Courses Available"}</span>
            </div>
            <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl text-balance">
              Our Course Offerings
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
              Choose from our wide range of government exam coaching programmes. Each course is
              designed by experts with years of experience in competitive exam preparation.
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 lg:gap-16 lg:px-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">{"Batch Size: 40-60 Students"}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">{"Free Study Material Included"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">{"Weekend & Weekday Batches"}</span>
            </div>
          </div>
        </section>

        {/* Course Grid */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card
                  key={course.title}
                  className="flex flex-col border border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <CardContent className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary">
                        <course.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-0">
                        {course.tag}
                      </Badge>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">
                      {course.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {course.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-col gap-2">
                      {course.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price & Duration */}
                    <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-0.5 font-heading text-xl font-bold text-foreground">
                        <IndianRupee className="h-4 w-4" />
                        {course.price}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href="/about#contact">Enquire Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary py-12">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
              {"Not Sure Which Course to Choose?"}
            </h2>
            <p className="mt-3 text-primary-foreground/80 leading-relaxed">
              Talk to our counsellors for free career guidance and course recommendations.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8"
            >
              <Link href="/about#contact">Get Free Counselling</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
