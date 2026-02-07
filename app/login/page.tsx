"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, LogIn, AlertCircle, Info } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Client-side UI-only credential check (exact match)
    setTimeout(() => {
      if (
        email === "rahulkushwaha2206@gmail.com" &&
        password === "Rahul@2206"
      ) {
        localStorage.setItem("gg_logged_in", "true")
        router.push("/dashboard")
      } else {
        setError("Invalid credentials. Please check your email and password.")
      }
      setLoading(false)
    }, 800)
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-muted px-4 py-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center gap-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
              <BookOpen className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground">
                Student Portal
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Guidance Group Pvt Ltd
              </p>
            </div>
          </div>

          {/* Login Card */}
          <Card className="border border-border bg-card">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  {loading ? (
                    "Logging in..."
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Login to Portal
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* No sign-up notice */}
          <Card className="mt-4 border border-secondary/30 bg-secondary/5">
            <CardContent className="flex items-start gap-3 p-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-foreground">
                  No sign-up available
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Login credentials are provided to students directly after
                  payment and enrolment. If you have not received your
                  credentials, please contact our admissions office.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Demo credentials removed — UI-only check uses a single exact credential */}

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Need help?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
