import jsPDF from "jspdf"
import type { StudentData } from "./student-data"

export function generateContract(student: StudentData) {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  const contentWidth = pageWidth - margin * 2
  let y = 20

  // --- Header ---
  doc.setDrawColor(26, 58, 92)
  doc.setLineWidth(1.5)
  doc.line(margin, y, pageWidth - margin, y)
  y += 10

  doc.setFont("helvetica", "bold")
  doc.setFontSize(18)
  doc.setTextColor(26, 58, 92)
  doc.text("GUIDANCE GROUP PVT LTD", pageWidth / 2, y, { align: "center" })
  y += 7
  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)
  doc.setTextColor(100, 100, 100)
  doc.text(
    "123, Rajendra Place, New Delhi - 110008 | CIN: U80903DL2010PTC123456",
    pageWidth / 2,
    y,
    { align: "center" }
  )
  y += 8
  doc.setDrawColor(26, 58, 92)
  doc.setLineWidth(0.5)
  doc.line(margin, y, pageWidth - margin, y)
  y += 10

  // --- Title ---
  doc.setFillColor(26, 58, 92)
  doc.roundedRect(pageWidth / 2 - 55, y - 5, 110, 12, 2, 2, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(11)
  doc.setTextColor(255, 255, 255)
  doc.text("COACHING SERVICES AGREEMENT", pageWidth / 2, y + 3, { align: "center" })
  y += 16

  // Contract reference
  doc.setFont("helvetica", "normal")
  doc.setFontSize(8)
  doc.setTextColor(100, 100, 100)
  doc.text(`Agreement No: GG/AGR/${student.id}`, margin, y)
  doc.text(`Date: ${student.enrollmentDate}`, pageWidth - margin, y, { align: "right" })
  y += 10

  // --- Parties ---
  doc.setFont("helvetica", "bold")
  doc.setFontSize(9)
  doc.setTextColor(26, 58, 92)
  doc.text("BETWEEN:", margin, y)
  y += 7

  doc.setFont("helvetica", "normal")
  doc.setFontSize(8.5)
  doc.setTextColor(40, 40, 40)

  const wrapText = (text: string, x: number, startY: number, maxWidth: number) => {
    const lines = doc.splitTextToSize(text, maxWidth)
    for (const line of lines) {
      doc.text(line, x, startY)
      startY += 5
    }
    return startY
  }

  doc.setFont("helvetica", "bold")
  doc.text("Party A (The Institute):", margin, y)
  doc.setFont("helvetica", "normal")
  y = wrapText(
    "Guidance Group Pvt Ltd, a company incorporated under the Companies Act, 2013, having its registered office at 123, Rajendra Place, New Delhi - 110008, represented by its Director, Dr. Rajesh Verma (hereinafter referred to as \"The Institute\").",
    margin,
    y + 6,
    contentWidth
  )
  y += 4

  doc.setFont("helvetica", "bold")
  doc.text("Party B (The Student):", margin, y)
  doc.setFont("helvetica", "normal")
  y = wrapText(
    `${student.name}, S/o ${student.fatherName}, residing at ${student.address}, enrolled under Student ID: ${student.id}, Enrollment ID: ${student.enrollmentId} (hereinafter referred to as "The Student").`,
    margin,
    y + 6,
    contentWidth
  )
  y += 6

  // Divider
  doc.setDrawColor(200, 200, 200)
  doc.setLineWidth(0.3)
  doc.line(margin, y, pageWidth - margin, y)
  y += 8

  // --- Terms and Conditions ---
  doc.setFont("helvetica", "bold")
  doc.setFontSize(10)
  doc.setTextColor(26, 58, 92)
  doc.text("TERMS AND CONDITIONS", margin, y)
  y += 8

  const terms = [
    {
      title: "1. Scope of Services",
      content: `The Institute agrees to provide comprehensive coaching for the "${student.course}" examination to The Student for a duration of ${student.courseDuration}, commencing from the date of enrolment. The coaching shall include classroom lectures, study materials, test series, doubt-clearing sessions, and mock examinations as described in the course brochure.`,
    },
    {
      title: "2. Fee Structure & Payment",
      content: `The total course fee is INR ${student.totalFee.toLocaleString("en-IN")} (${numberToWords(student.totalFee)} only). The Student has paid INR ${student.feePaid.toLocaleString("en-IN")} via ${student.paymentMode} on ${student.paymentDate} (Transaction ID: ${student.transactionId}). The balance payable, if any, is INR ${student.feeBalance.toLocaleString("en-IN")}.`,
    },
    {
      title: "3. 100% Placement Guarantee & Unconditional Fee Refund",
      content:
        "The Institute provides an UNCONDITIONAL PLACEMENT GUARANTEE to The Student. Once the official results of the examination are declared by the concerned authority, if The Student DOES NOT secure placement/selection in a government position or the designated role as per the course objective, The Institute shall IMMEDIATELY refund the ENTIRE course fee (100% - Full Refund) to The Student. The refund shall be processed within 7 (seven) days (1 week) from the date of result declaration. This refund guarantee is ABSOLUTE and IRRESPECTIVE of any circumstances, conditions, or clauses mentioned elsewhere in this Agreement. Simply put: If results are out and you are not placed, your full fee will be refunded within 1 week - NO EXCEPTIONS.",
    },
    {
      title: "4. Refund Processing & Student Rights",
      content:
        "The refund under Clause 3 is a FUNDAMENTAL RIGHT of The Student and shall be processed immediately upon request after the result declaration. The Student may claim the refund by submitting a written request along with documentary proof of the examination result. The Institute shall process the refund within 7 (seven) days (1 week) via the same payment mode used during enrollment. No deductions, administrative fees, or processing charges shall be levied on the refund amount. The full course fee shall be returned in its entirety.",
    },
    {
      title: "5. Non-Refundable Circumstances",
      content:
        "The fee shall NOT be refundable if: (a) The Student voluntarily withdraws from the programme before completion; (b) The Student fails to meet the minimum 90% attendance requirement; (c) The Student does not appear for the actual government examination; (d) The Student is expelled due to violation of the Institute's code of conduct; or (e) The examination is cancelled, postponed, or restructured by the government authority, in which case the coaching validity shall be extended accordingly at no additional cost.",
    },
    {
      title: "6. Intellectual Property & Confidentiality",
      content:
        "All study materials, test papers, video lectures, and other content provided by The Institute are the exclusive intellectual property of Guidance Group Pvt Ltd. The Student shall not copy, reproduce, distribute, or share these materials with any third party. Violation of this clause may result in termination of enrolment without refund.",
    },
    {
      title: "7. Dispute Resolution",
      content:
        "Any dispute arising out of or in connection with this Agreement shall first be resolved through mutual discussion and mediation. If unresolved within 30 days, the dispute shall be referred to arbitration under the Arbitration and Conciliation Act, 1996. The courts of New Delhi shall have exclusive jurisdiction over any proceedings arising from this Agreement.",
    },
    {
      title: "8. Governing Law",
      content:
        "This Agreement shall be governed by and construed in accordance with the laws of the Republic of India.",
    },
  ]

  doc.setFontSize(8.5)
  for (const term of terms) {
    if (y > 250) {
      doc.addPage()
      y = 20
    }
    doc.setFont("helvetica", "bold")
    doc.setTextColor(26, 58, 92)
    doc.text(term.title, margin, y)
    y += 5
    doc.setFont("helvetica", "normal")
    doc.setTextColor(40, 40, 40)
    y = wrapText(term.content, margin, y, contentWidth)
    y += 5
  }

  // --- Signatures Section (new page if needed) ---
  if (y > 200) {
    doc.addPage()
    y = 20
  }

  y += 6
  doc.setDrawColor(26, 58, 92)
  doc.setLineWidth(0.5)
  doc.line(margin, y, pageWidth - margin, y)
  y += 12

  doc.setFont("helvetica", "bold")
  doc.setFontSize(10)
  doc.setTextColor(26, 58, 92)
  doc.text("SIGNATURES", pageWidth / 2, y, { align: "center" })
  y += 12

  // Two-column signatures
  const col1X = margin
  const col2X = pageWidth / 2 + 10

  // Institute signature
  doc.setFont("helvetica", "bold")
  doc.setFontSize(9)
  doc.setTextColor(60, 60, 60)
  doc.text("Authorized Signatory", col1X, y)

  // Student signature
  doc.text("The Student", col2X, y)
  y += 12

  // Institute e-signature
  doc.setFont("times", "italic")
  doc.setFontSize(16)
  doc.setTextColor(26, 58, 92)
  doc.text("Guidance Group Pvt Ltd", col1X, y)

  // Student e-signature
  doc.text(student.name, col2X, y)
  y += 4

  doc.setDrawColor(26, 58, 92)
  doc.setLineWidth(0.4)
  doc.line(col1X, y, col1X + 65, y)
  doc.line(col2X, y, col2X + 65, y)
  y += 6

  doc.setFont("helvetica", "normal")
  doc.setFontSize(8)
  doc.setTextColor(80, 80, 80)
  doc.text("Authorized Signatory", col1X, y)
  doc.text(student.name, col2X, y)
  y += 5
  doc.text("Guidance Group Pvt Ltd", col1X, y)
  doc.text(`Student ID: ${student.id}`, col2X, y)
  y += 5
  doc.text("", col1X, y)
  doc.text(`Enrollment: ${student.enrollmentId}`, col2X, y)
  y += 14

  // Digital signature verification box
  doc.setDrawColor(26, 58, 92)
  doc.setFillColor(245, 247, 250)
  doc.roundedRect(margin, y, contentWidth, 34, 2, 2, "FD")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(7)
  doc.setTextColor(26, 58, 92)
  doc.text("DIGITAL SIGNATURE VERIFICATION", margin + 4, y + 6)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(6.5)
  doc.setTextColor(80, 80, 80)
  doc.text(
    `Signer 1: Authorized Signatory (Guidance Group Pvt Ltd) | Signed on: ${student.enrollmentDate}`,
    margin + 4,
    y + 12
  )
  doc.text(
    `Signer 2: ${student.name} (Student ID: ${student.id}) | Signed on: ${student.enrollmentDate}`,
    margin + 4,
    y + 17
  )
  doc.text(
    `Document ID: GG-AGR-${student.id} | Hash: SHA-256: b8e4c1d3f5a7b9c2d4e6f8a0b1c3d5e7f9a2b4c6d8e0f2a4b6c8d0e1f3a5b7`,
    margin + 4,
    y + 22
  )
  doc.text(
    "Both parties have digitally signed this agreement. The digital signatures ensure the integrity and authenticity of this document.",
    margin + 4,
    y + 28
  )

  // Bottom border
  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setDrawColor(26, 58, 92)
    doc.setLineWidth(1.5)
    doc.line(margin, 280, pageWidth - margin, 280)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(6.5)
    doc.setTextColor(150, 150, 150)
    doc.text(
      `Coaching Services Agreement | GG/AGR/${student.id} | Page ${i} of ${totalPages}`,
      pageWidth / 2,
      285,
      { align: "center" }
    )
  }

  return doc
}

function numberToWords(num: number): string {
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ]
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ]

  if (num === 0) return "Zero"

  // Indian numbering: lakhs and crores
  const crore = Math.floor(num / 10000000)
  num %= 10000000
  const lakh = Math.floor(num / 100000)
  num %= 100000
  const thousand = Math.floor(num / 1000)
  num %= 1000
  const hundred = Math.floor(num / 100)
  const remainder = num % 100

  let result = ""

  const twoDigitToWords = (n: number) => {
    if (n < 20) return ones[n]
    return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "")
  }

  if (crore) result += twoDigitToWords(crore) + " Crore "
  if (lakh) result += twoDigitToWords(lakh) + " Lakh "
  if (thousand) result += twoDigitToWords(thousand) + " Thousand "
  if (hundred) result += ones[hundred] + " Hundred "
  if (remainder) {
    if (result) result += "and "
    result += twoDigitToWords(remainder)
  }

  return "Rupees " + result.trim() + " Only"
}
