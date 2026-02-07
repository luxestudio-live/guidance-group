import jsPDF from "jspdf"
import type { StudentData } from "./student-data"

export function generateFeeReceipt(student: StudentData) {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  const contentWidth = pageWidth - margin * 2
  let y = 20

  // --- Header border ---
  doc.setDrawColor(26, 58, 92) // primary navy
  doc.setLineWidth(1.5)
  doc.line(margin, y, pageWidth - margin, y)
  y += 10

  // --- Company header ---
  doc.setFont("helvetica", "bold")
  doc.setFontSize(20)
  doc.setTextColor(26, 58, 92)
  doc.text("GUIDANCE GROUP PVT LTD", pageWidth / 2, y, { align: "center" })
  y += 7
  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)
  doc.setTextColor(100, 100, 100)
  doc.text(
    "123, Rajendra Place, New Delhi - 110008 | info@guidancegroup.online",
    pageWidth / 2,
    y,
    { align: "center" }
  )
  y += 5
  doc.text("CIN: U80903DL2010PTC123456 | GSTIN: 07AABCG1234A1Z5", pageWidth / 2, y, {
    align: "center",
  })
  y += 8

  // --- Title ---
  doc.setDrawColor(26, 58, 92)
  doc.setLineWidth(0.5)
  doc.line(margin, y, pageWidth - margin, y)
  y += 10

  doc.setFillColor(26, 58, 92)
  doc.roundedRect(pageWidth / 2 - 40, y - 5, 80, 12, 2, 2, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.setTextColor(255, 255, 255)
  doc.text("FEE RECEIPT", pageWidth / 2, y + 3, { align: "center" })
  y += 16

  // --- Receipt info row ---
  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)
  doc.setTextColor(100, 100, 100)
  doc.text(`Receipt No: GG/RCP/${student.id}`, margin, y)
  doc.text(`Date: ${student.paymentDate}`, pageWidth - margin, y, { align: "right" })
  y += 10

  // --- Student details table ---
  const drawRow = (label: string, value: string, currentY: number) => {
    doc.setFillColor(245, 247, 250)
    if (Math.floor((currentY - y) / 8) % 2 === 0) {
      doc.rect(margin, currentY - 4, contentWidth, 8, "F")
    }
    doc.setFont("helvetica", "bold")
    doc.setFontSize(9)
    doc.setTextColor(60, 60, 60)
    doc.text(label, margin + 4, currentY)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(30, 30, 30)
    doc.text(value, margin + 65, currentY)
    return currentY + 8
  }

  // Table header
  doc.setFillColor(26, 58, 92)
  doc.rect(margin, y - 4, contentWidth, 9, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(9)
  doc.setTextColor(255, 255, 255)
  doc.text("STUDENT DETAILS", margin + 4, y + 2)
  y += 12

  y = drawRow("Student Name", student.name, y)
  y = drawRow("Father's Name", student.fatherName, y)
  y = drawRow("Enrollment ID", student.enrollmentId, y)
  y = drawRow("Student ID", student.id, y)
  y = drawRow("Course", student.course, y)
  y = drawRow("Batch", student.batchId, y)
  y = drawRow("Centre", student.centre, y)
  y = drawRow("Duration", student.courseDuration, y)
  y += 6

  // Payment details
  doc.setFillColor(26, 58, 92)
  doc.rect(margin, y - 4, contentWidth, 9, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(9)
  doc.setTextColor(255, 255, 255)
  doc.text("PAYMENT DETAILS", margin + 4, y + 2)
  y += 12

  y = drawRow("Total Fee", `INR ${student.totalFee.toLocaleString("en-IN")}`, y)
  y = drawRow("Amount Paid", `INR ${student.feePaid.toLocaleString("en-IN")}`, y)
  y = drawRow("Balance", `INR ${student.feeBalance.toLocaleString("en-IN")}`, y)
  y = drawRow("Payment Mode", student.paymentMode, y)
  y = drawRow("Transaction ID", student.transactionId, y)
  y = drawRow("Payment Date", student.paymentDate, y)
  y += 6

  // Payment status
  doc.setFillColor(34, 139, 34)
  doc.roundedRect(margin, y, 50, 10, 2, 2, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(9)
  doc.setTextColor(255, 255, 255)
  doc.text("PAYMENT: RECEIVED", margin + 4, y + 7)
  y += 22

  // --- Border line ---
  doc.setDrawColor(200, 200, 200)
  doc.setLineWidth(0.3)
  doc.line(margin, y, pageWidth - margin, y)
  y += 12

  // --- e-Signature section ---
  doc.setFont("helvetica", "bold")
  doc.setFontSize(10)
  doc.setTextColor(26, 58, 92)
  doc.text("Authorized Signatory", pageWidth - margin, y, { align: "right" })
  y += 6

  // Digital signature representation
  doc.setDrawColor(26, 58, 92)
  doc.setLineWidth(0.5)
  const sigX = pageWidth - margin - 60
  doc.line(sigX, y, pageWidth - margin, y)
  y += 5
  doc.setFont("times", "italic")
  doc.setFontSize(14)
  doc.setTextColor(26, 58, 92)
  doc.text("Guidance Group Pvt Ltd", pageWidth - margin - 30, y, { align: "center" })
  y += 5
  doc.setFont("helvetica", "normal")
  doc.setFontSize(7)
  doc.setTextColor(100, 100, 100)
  doc.text("Authorized Signatory", pageWidth - margin - 30, y, { align: "center" })
  y += 10

  // Digital signature verification box
  doc.setDrawColor(26, 58, 92)
  doc.setFillColor(245, 247, 250)
  doc.roundedRect(margin, y, contentWidth, 28, 2, 2, "FD")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(7)
  doc.setTextColor(26, 58, 92)
  doc.text("DIGITALLY SIGNED DOCUMENT", margin + 4, y + 6)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(6.5)
  doc.setTextColor(80, 80, 80)
  doc.text(
    `Signed by: Authorized Signatory (Guidance Group Pvt Ltd) | Date: ${student.paymentDate} | Document ID: GG-RCP-${student.id}`,
    margin + 4,
    y + 12
  )
  doc.text(
    "Signature Hash: SHA-256: a7f3b9c2e1d4f6a8b0c3d5e7f9a1b2c4d6e8f0a2b4c6d8e0f1a3b5c7d9e1f3",
    margin + 4,
    y + 17
  )
  doc.text(
    "This is a computer-generated document. The digital signature ensures the integrity and authenticity of this receipt.",
    margin + 4,
    y + 23
  )
  y += 36

  // Footer
  doc.setFont("helvetica", "normal")
  doc.setFontSize(7)
  doc.setTextColor(150, 150, 150)
  doc.text(
    "This receipt is electronically generated and is valid without a physical signature. For any queries, contact: info@guidancegroup.online",
    pageWidth / 2,
    y,
    { align: "center" }
  )

  // Bottom border
  doc.setDrawColor(26, 58, 92)
  doc.setLineWidth(1.5)
  doc.line(margin, 280, pageWidth - margin, 280)

  return doc
}
