"use client"

import { personalInfo } from "@/lib/constants"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-800 to-black animated-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>

              <p className="text-lg text-gray-300 leading-relaxed">{personalInfo.bio}</p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-white mb-2">2+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-white mb-2">07+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-white mb-2">50k+</div>
                  <div className="text-gray-300 text-sm">Users Served</div>
                </div>
                <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-white mb-2">95+</div>
                  <div className="text-gray-300 text-sm">Avg Core Web Vitals Score</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-600">
                  <Image
                    src={personalInfo.avatar || "/placeholder.svg"}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
