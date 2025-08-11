"use client"

import { testimonials } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-800 to-black animated-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Clients & Colloborators Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Testimonials from satisfied clients and collaborators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-black/30 border-gray-700 hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed italic">"{testimonial.feedback}"</p>

                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
