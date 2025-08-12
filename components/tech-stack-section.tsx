"use client"

import { techStackCategories } from "@/lib/constants"
import { useState } from "react"

export default function TechStackSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-800 to-black animated-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technologies I Work With</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-2">
            Specializing in modern, performant, and scalable web applications
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Building with cutting-edge tools and frameworks to deliver exceptional user experiences
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {Object.entries(techStackCategories).map(([categoryKey, category], categoryIndex) => (
            <div key={categoryKey} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">{category.title}</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
              </div>

              <div className="flex gap-6 justify-center flex-wrap">
                {category.technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group relative max-w-[235px] w-full"
                    style={{
                      animationDelay: `${categoryIndex * 200 + index * 100}ms`,
                    }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="relative bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-110 hover:bg-black/50 cursor-pointer border border-gray-700 hover:border-white/30 group-hover:shadow-lg group-hover:shadow-white/10">
                      {/* Tech Icon */}
                      <div
                        className="text-5xl mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{
                          filter: hoveredTech === tech.name ? `drop-shadow(0 0 8px ${tech.color}40)` : "none",
                        }}
                      >
                        {tech.icon}
                      </div>

                      {/* Tech Name */}
                      <h4 className="text-white font-medium text-sm group-hover:text-gray-300 transition-colors duration-300 mb-2">
                        {tech.name}
                      </h4>

                      {/* Hover glow effect */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                        style={{
                          background: `radial-gradient(circle at center, ${tech.color}70 0%, transparent 90%)`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-sm">Always learning. Always creating</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
