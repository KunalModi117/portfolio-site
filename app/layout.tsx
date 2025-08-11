import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kunal Modi - React & Next.js Developer",
  description:
    "Portfolio of Kunal Modi, a React & Next.js developer specializing in offline-first and performance-driven web solutions.",
  keywords: ["React", "Next.js", "Frontend Developer", "Web Development", "Performance Optimization"],
  authors: [{ name: "Kunal Modi" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
