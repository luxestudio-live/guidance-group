import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Guidance Group Pvt Ltd - Best Coaching for Government Exams",
  description:
    "Guidance Group Pvt Ltd offers top-quality coaching for UPSC, SSC, Banking, Railways and State PCS exams. Join India's trusted coaching institute for your government job preparation.",
  keywords:
    "government exam coaching, UPSC coaching, SSC coaching, banking exam preparation, railway exam coaching, best coaching institute India",
}

export const viewport: Viewport = {
  themeColor: "#1a3a5c",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
