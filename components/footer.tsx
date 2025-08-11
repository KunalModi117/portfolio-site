"use client"

import { socialLinks } from "@/lib/constants"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-black via-gray-800 to-black animated-gradient py-16"
    >
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Kunal Modi</h3>
              <p className="text-gray-400">
                React & Next.js Developer specializing in performance-driven web solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Navigation</h4>
              <div className="space-y-2">
                <button
                  onClick={scrollToTop}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect</h4>
              <div className="space-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <p className="text-gray-400">Ready to start your next project? Let's build something amazing together.</p>
              <a
                href="mailto:kunalmodi117@gmail.com"
                className="inline-block bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/25"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">© 2025 Kunal Modi. All rights reserved.</p>
              <p className="text-gray-400 text-sm">Built with Next.js & TailwindCSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
