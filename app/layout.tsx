import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kunal Modi | React & Next.js Developer | High-Performance Web Apps",
  description:
    "Portfolio of Kunal Modi — React & Next.js expert crafting offline-first, performance-driven, and SEO-optimized web applications. Explore projects, skills, and achievements.",
  keywords: [
    "Kunal Modi",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Offline-First Web Apps",
    "Performance Optimization",
    "Progressive Web Apps",
    "SEO Optimized Websites",
    "Web Development Portfolio"
  ],
  authors: [{ name: "Kunal Modi" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Kunal Modi | React & Next.js Developer | High-Performance Web Apps",
    description:
      "Discover the portfolio of Kunal Modi — building fast, offline-capable, and performance-optimized web applications with React & Next.js.",
    url: "https://portfolio-site-pi-nine-43.vercel.app",
    siteName: "Kunal Modi Portfolio",
    images: [
      {
        url: "https://portfolio-site-pi-nine-43.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kunal Modi - React & Next.js Developer"
      }
    ],
    locale: "en_US",
    type: "website"
  }
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
