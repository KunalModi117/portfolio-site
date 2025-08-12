"use client";

import { projects } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-black via-gray-800 to-black animated-gradient"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development and
            performance optimization
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-black/30 border-gray-700 hover:bg-black/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 group overflow-hidden backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div
                  className={`flex flex-col ${
                    project.alignment === "right"
                      ? "lg:flex-row-reverse"
                      : "lg:flex-row"
                  } items-center`}
                >
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800/50 text-white rounded-full text-sm font-medium hover:bg-gray-700/50 transition-colors duration-200 border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.link ? (
                        <Button
                          className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/25"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </div>

                  <div className="lg:w-1/2 relative overflow-hidden">
                    <div className="aspect-video relative group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
