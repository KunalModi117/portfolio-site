"use client"

import { personalInfo } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Eye } from "lucide-react"

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-800 to-black animated-gradient">
      {/* Starry background */}
      <div className="absolute inset-0">
        {/* Static twinkling stars */}
        <div className="star" style={{ top: "15%", left: "20%", animationDelay: "0s" }}></div>
        <div className="star" style={{ top: "25%", left: "80%", animationDelay: "1s" }}></div>
        <div className="star" style={{ top: "40%", left: "15%", animationDelay: "2s" }}></div>
        <div className="star" style={{ top: "60%", left: "90%", animationDelay: "0.5s" }}></div>
        <div className="star" style={{ top: "70%", left: "25%", animationDelay: "1.5s" }}></div>
        <div className="star" style={{ top: "80%", left: "70%", animationDelay: "2.5s" }}></div>
        <div className="star" style={{ top: "10%", left: "60%", animationDelay: "3s" }}></div>
        <div className="star" style={{ top: "35%", left: "45%", animationDelay: "1.8s" }}></div>
        <div className="star" style={{ top: "55%", left: "5%", animationDelay: "2.2s" }}></div>
        <div className="star" style={{ top: "85%", left: "85%", animationDelay: "0.8s" }}></div>
        <div className="star" style={{ top: "20%", left: "40%", animationDelay: "3.5s" }}></div>
        <div className="star" style={{ top: "75%", left: "55%", animationDelay: "1.2s" }}></div>

        {/* Shooting stars - left to right at different heights */}
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>
        <div className="shooting-star shooting-star-4"></div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-in fade-in duration-1000">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white">{personalInfo.name}</h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            {personalInfo.title}
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">{personalInfo.intro}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/25"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
