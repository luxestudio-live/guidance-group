"use client"

import React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  BookOpen,
  User,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  FileText,
  Download,
  LogOut,
  CheckCircle2,
  IndianRupee,
  Clock,
  Hash,
  Building2,
  Eye,
} from "lucide-react"
import { demoStudent } from "@/lib/student-data"
import { generateFeeReceipt } from "@/lib/generate-receipt"
import { generateContract } from "@/lib/generate-contract"

export default function DashboardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [receiptLoading, setReceiptLoading] = useState(false)
  const [contractLoading, setContractLoading] = useState(false)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [pdfTitle, setPdfTitle] = useState<string>("")
  const [viewerOpen, setViewerOpen] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem("gg_logged_in")
    if (!loggedIn) {
      router.push("/login")
    } else {
      setIsLoading(false)
    }
  }, [router])

  function handleLogout() {
    localStorage.removeItem("gg_logged_in")
    router.push("/login")
  }

  function handleViewReceipt() {
    setReceiptLoading(true)
    setTimeout(() => {
      const doc = generateFeeReceipt(demoStudent)
      const pdfBlob = doc.output("blob")
      const url = URL.createObjectURL(pdfBlob)
      setPdfUrl(url)
      setPdfTitle("Fee Receipt")
      setViewerOpen(true)
      setReceiptLoading(false)
    }, 500)
  }

  function handleDownloadReceipt() {
    setReceiptLoading(true)
    setTimeout(() => {
      const doc = generateFeeReceipt(demoStudent)
      doc.save(`Fee_Receipt_${demoStudent.id}.pdf`)
      setReceiptLoading(false)
    }, 500)
  }

  function handleViewContract() {
    setContractLoading(true)
    setTimeout(() => {
      const doc = generateContract(demoStudent)
      const pdfBlob = doc.output("blob")
      const url = URL.createObjectURL(pdfBlob)
      setPdfUrl(url)
      setPdfTitle("Coaching Agreement")
      setViewerOpen(true)
      setContractLoading(false)
    }, 500)
  }

  function handleDownloadContract() {
    setContractLoading(true)
    setTimeout(() => {
      const doc = generateContract(demoStudent)
      doc.save(`Agreement_${demoStudent.id}.pdf`)
      setContractLoading(false)
    }, 500)
  }

  function handleCloseViewer() {
    setViewerOpen(false)
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl)
      setPdfUrl(null)
    }
  }

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[60vh] items-center justify-center bg-muted">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="text-sm text-muted-foreground">Loading dashboard...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const student = demoStudent

  return (
    <>
      <Navbar />
      <main className="bg-muted">
        {/* Dashboard Header */}
        <section className="bg-primary py-8 lg:py-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <User className="h-7 w-7 text-secondary-foreground" />
                </div>
                <div>
                  <h1 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
                    Welcome, {student.name.split(" ")[0]}
                  </h1>
                  <p className="text-sm text-primary-foreground/70">
                    Student ID: {student.id} | {student.course}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="w-fit border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Left Column - Student Details */}
              <div className="flex flex-col gap-6 lg:col-span-2">
                {/* Personal Details */}
                <Card className="border border-border bg-card">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      <h2 className="font-heading text-lg font-semibold text-card-foreground">
                        Personal Details
                      </h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <DetailRow
                        icon={<User className="h-4 w-4" />}
                        label="Full Name"
                        value={student.name}
                      />
                      <DetailRow
                        icon={<User className="h-4 w-4" />}
                        label="Father's Name"
                        value={student.fatherName}
                      />
                      <DetailRow
                        icon={<Mail className="h-4 w-4" />}
                        label="Email"
                        value={student.email}
                      />
                      <DetailRow
                        icon={<Phone className="h-4 w-4" />}
                        label="Phone"
                        value={student.phone}
                      />
                      <DetailRow
                        icon={<Calendar className="h-4 w-4" />}
                        label="Date of Birth"
                        value={student.dateOfBirth}
                      />
                      <DetailRow
                        icon={<MapPin className="h-4 w-4" />}
                        label="Address"
                        value={student.address}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Enrolment Details */}
                <Card className="border border-border bg-card">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h2 className="font-heading text-lg font-semibold text-card-foreground">
                        Enrolment Details
                      </h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <DetailRow
                        icon={<Hash className="h-4 w-4" />}
                        label="Student ID"
                        value={student.id}
                      />
                      <DetailRow
                        icon={<Hash className="h-4 w-4" />}
                        label="Enrollment ID"
                        value={student.enrollmentId}
                      />
                      <DetailRow
                        icon={<BookOpen className="h-4 w-4" />}
                        label="Course"
                        value={student.course}
                      />
                      <DetailRow
                        icon={<Clock className="h-4 w-4" />}
                        label="Duration"
                        value={student.courseDuration}
                      />
                      <DetailRow
                        icon={<Hash className="h-4 w-4" />}
                        label="Batch"
                        value={student.batchId}
                      />
                      <DetailRow
                        icon={<Building2 className="h-4 w-4" />}
                        label="Centre"
                        value={student.centre}
                      />
                      <DetailRow
                        icon={<Calendar className="h-4 w-4" />}
                        label="Enrolled On"
                        value={student.enrollmentDate}
                      />
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-xs text-muted-foreground">Status</span>
                          <Badge
                            variant="default"
                            className="w-fit bg-green-600 text-green-50 hover:bg-green-600"
                          >
                            {student.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Fee Details */}
                <Card className="border border-border bg-card">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center gap-2">
                      <IndianRupee className="h-5 w-5 text-primary" />
                      <h2 className="font-heading text-lg font-semibold text-card-foreground">
                        Fee & Payment Details
                      </h2>
                    </div>

                    {/* Fee summary cards */}
                    <div className="mb-6 grid gap-4 sm:grid-cols-3">
                      <div className="flex flex-col gap-1 rounded-lg border border-border bg-muted p-4">
                        <span className="text-xs text-muted-foreground">Total Fee</span>
                        <span className="font-heading text-xl font-bold text-foreground">
                          INR {student.totalFee.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 rounded-lg border border-green-200 bg-green-50 p-4">
                        <span className="text-xs text-green-700">Amount Paid</span>
                        <span className="font-heading text-xl font-bold text-green-700">
                          INR {student.feePaid.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 rounded-lg border border-border bg-muted p-4">
                        <span className="text-xs text-muted-foreground">Balance</span>
                        <span className="font-heading text-xl font-bold text-foreground">
                          INR {student.feeBalance.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>

                    <Separator className="mb-4" />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <DetailRow
                        icon={<CreditCard className="h-4 w-4" />}
                        label="Payment Mode"
                        value={student.paymentMode}
                      />
                      <DetailRow
                        icon={<Hash className="h-4 w-4" />}
                        label="Transaction ID"
                        value={student.transactionId}
                      />
                      <DetailRow
                        icon={<Calendar className="h-4 w-4" />}
                        label="Payment Date"
                        value={student.paymentDate}
                      />
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-xs text-muted-foreground">Payment Status</span>
                          <Badge
                            variant="default"
                            className={`w-fit ${
                              student.feeBalance === 0
                                ? "bg-green-600 text-green-50 hover:bg-green-600"
                                : "bg-orange-600 text-orange-50 hover:bg-orange-600"
                            }`}
                          >
                            {student.feeBalance === 0 ? "Paid in Full" : "Partially Paid"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Downloads & Quick Actions */}
              <div className="flex flex-col gap-6">
                {/* Download Documents */}
                <Card className="border border-border bg-card">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <h2 className="font-heading text-lg font-semibold text-card-foreground">
                        Documents
                      </h2>
                    </div>
                    <div className="flex flex-col gap-4">
                      {/* Fee Receipt */}
                      <div className="rounded-lg border border-border bg-muted p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                            <IndianRupee className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              Fee Receipt
                            </p>
                            <p className="text-xs text-muted-foreground">
                              e-Signed official receipt
                            </p>
                          </div>
                        </div>
                        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                          Download your digitally signed fee receipt with
                          complete payment details and official e-signature from
                          the Director.
                        </p>
                        <div className="flex gap-2">
                          <Button
                            onClick={handleViewReceipt}
                            disabled={receiptLoading}
                            variant="outline"
                            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            {receiptLoading ? (
                              "Loading..."
                            ) : (
                              <>
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </>
                            )}
                          </Button>
                          <Button
                            onClick={handleDownloadReceipt}
                            disabled={receiptLoading}
                            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                          >
                            {receiptLoading ? (
                              "Loading..."
                            ) : (
                              <>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      {/* Contract / Agreement */}
                      <div className="rounded-lg border border-border bg-muted p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary">
                            <FileText className="h-4 w-4 text-secondary-foreground" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              Coaching Agreement
                            </p>
                            <p className="text-xs text-muted-foreground">
                              e-Signed by both parties
                            </p>
                          </div>
                        </div>
                        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                          Download your coaching services agreement with terms
                          including the fee refund guarantee, digitally signed
                          by both the Institute and the Student.
                        </p>
                        <div className="flex gap-2">
                          <Button
                            onClick={handleViewContract}
                            disabled={contractLoading}
                            variant="outline"
                            className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                          >
                            {contractLoading ? (
                              "Loading..."
                            ) : (
                              <>
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </>
                            )}
                          </Button>
                          <Button
                            onClick={handleDownloadContract}
                            disabled={contractLoading}
                            className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          >
                            {contractLoading ? (
                              "Loading..."
                            ) : (
                              <>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card className="border border-border bg-card">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <h2 className="font-heading text-lg font-semibold text-card-foreground">
                        Quick Info
                      </h2>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between rounded-md bg-muted px-3 py-2">
                        <span className="text-xs text-muted-foreground">Next Batch Start</span>
                        <span className="text-xs font-medium text-foreground">10th Feb 2026</span>
                      </div>
                      <div className="flex items-center justify-between rounded-md bg-muted px-3 py-2">
                        <span className="text-xs text-muted-foreground">Classes Timing</span>
                        <span className="text-xs font-medium text-foreground">10 AM - 6 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Help Card */}
                <Card className="border border-secondary/30 bg-secondary/5">
                  <CardContent className="flex flex-col gap-3 p-5">
                    <h3 className="font-heading text-sm font-semibold text-foreground">
                      Need Help?
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      If you have any questions about your enrolment, fees or
                      documents, reach out to our support team.
                    </p>
                    <Button
                      asChild
                      size="sm"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      <Link href="/contact">Contact Support</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* PDF Viewer Modal */}
      <Dialog open={viewerOpen} onOpenChange={(open) => !open && handleCloseViewer()}>
        <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0">
          <DialogHeader className="px-6 pt-6 pb-4 border-b">
            <DialogTitle className="font-heading text-xl">{pdfTitle}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden px-6 pb-6">
            {pdfUrl && (
              <iframe
                src={pdfUrl}
                className="w-full h-full rounded-md border border-border"
                title={pdfTitle}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
    </div>
  )
}
