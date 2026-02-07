import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Guidance Group Pvt Ltd",
  description:
    "Get in touch with Guidance Group Pvt Ltd for enquiries about government exam coaching courses. Visit our centres across India.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl text-balance">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
              Have questions about our courses? Want to visit our centre? Reach
              out to us and our team will get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Contact Info */}
              <div className="flex flex-col gap-6 lg:col-span-2">
                <Card className="border border-border bg-card">
                  <CardContent className="flex flex-col gap-5 p-6">
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">
                      Contact Information
                    </h3>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                        <MapPin className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-card-foreground">
                          Head Office
                        </p>
                        <p className="text-sm text-muted-foreground">
                          123, Rajendra Place, New Delhi - 110008
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                        <Mail className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-card-foreground">
                          Email
                        </p>
                        <p className="text-sm text-muted-foreground">
                          info@guidancegroup.online
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                        <Clock className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-card-foreground">
                          Office Hours
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Mon - Sat: 8:00 AM - 8:00 PM
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Sunday: 9:00 AM - 2:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Branch Centres */}
                <Card className="border border-border bg-card">
                  <CardContent className="flex flex-col gap-3 p-6">
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">
                      Our Centres
                    </h3>
                    <div className="flex flex-col gap-2">
                      {[
                        "New Delhi (Head Office)",
                        "Lucknow",
                        "Jaipur",
                        "Patna",
                        "Chandigarh",
                      ].map((centre) => (
                        <div key={centre} className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 shrink-0 text-secondary" />
                          <span className="text-sm text-muted-foreground">
                            {centre}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="border border-border bg-card lg:col-span-3">
                <CardContent className="p-6">
                  <h3 className="mb-6 font-heading text-lg font-semibold text-card-foreground">
                    Send Us a Message
                  </h3>
                  <form className="flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="course">Course Interested In</Label>
                      <Input
                        id="course"
                        placeholder="e.g. UPSC Civil Services, SSC CGL"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                    >
                      Send Enquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
