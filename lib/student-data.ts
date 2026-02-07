export interface StudentData {
  id: string
  name: string
  fatherName: string
  email: string
  phone: string
  address: string
  dateOfBirth: string
  enrollmentDate: string
  enrollmentId: string
  course: string
  courseDuration: string
  batchId: string
  centre: string
  totalFee: number
  feePaid: number
  feeBalance: number
  paymentMode: string
  paymentDate: string
  transactionId: string
  status: "Active" | "Completed" | "Pending"
}

// Demo student used for UI preview
export const demoStudent: StudentData = {
  id: "STU-2026-04871",
  name: "Rahul Kushwaha",
  fatherName: "Jitendra Kushwaha",
  email: "rahulkushwaha2206@gmail.com",
  phone: "+91 951890892",
  address: "112/4, Omkar Colony, Nadhe Nagar, kalewadi- 411017",
  dateOfBirth: "22 June 2001",
  enrollmentDate: "7 February 2026",
  enrollmentId: "GG/2026/AP/04871",
  course: "Assistant Programmer",
  courseDuration: "6 Months (Jan 2026 - Jun 2026)",
  batchId: "2026-BATCH-A",
  centre: "New Delhi (Head Office)",
  totalFee: 499999,
  feePaid: 299999,
  feeBalance: 200000,
  paymentMode: "Debit Card",
  paymentDate: "8 February 2026",
  transactionId: "TXT2025011098765",
  status: "Active",
}

// Demo credentials
export const DEMO_CREDENTIALS = {
  email: "rahulkushwaha2206@gmail.com",
  password: "Rahul@2206",
}
